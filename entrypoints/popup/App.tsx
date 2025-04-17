import React, { useState, useEffect, useCallback } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react'; // Import the Gear icon
import { sendMessage, onMessage } from '../../utils/messaging'; // Use the original and add onMessage
import PopupDisplay from '../../src/components/PopupDisplay'; // Update import path
import { FlashcardCreatorPopup } from '../../src/components/popups/FlashcardCreatorPopup'; // Import the new component
import { createBookmark, createFlashcard, createChatMessage, getChatHistory } from '../../utils/db'; // Removed createFlashcard
import type { Flashcard } from '../../src/types/db'; // Import Flashcard type
import { cn } from '../../lib/utils'; // Import the cn function
import { Button } from '../../src/components/ui/button';
import type { ProtocolMap, PageInfo } from '../../utils/messaging';

// Define the structure expected from the background script for page info
// interface PageInfo {
//   title: string;
//   url: string;
// }

// This component manages the state and logic for the popup
function App() {
  const [status, setStatus] = useState<string>('Initializing...'); // Start with initializing
  const [statusIsError, setStatusIsError] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false); 
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [tagsValue, setTagsValue] = useState<string>(''); // State for tags
  const [selectedText, setSelectedText] = useState<string | null>(null); // State for selected text
  const [isLoadingPopupData, setIsLoadingPopupData] = useState<boolean>(true); // Loading state for initial data fetch

  // New states for flashcard generation
  const [generatedFlashcard, setGeneratedFlashcard] = useState<{ front: string; back: string } | null>(null);
  const [generatedCloze, setGeneratedCloze] = useState<{ text: string } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false); // Loading state for generation

  useEffect(() => {
    console.log("[App] Initializing popup...");
    setIsLoadingPopupData(true);
    setStatus('Loading...');
    setStatusIsError(false);
    setGeneratedFlashcard(null); // Reset generation state on init
    setGeneratedCloze(null);
    setIsGenerating(false);

    const fetchInitialData = async () => {
      try {
        // 1. Try to get selected text
        const selection = await sendMessage('getSelectedText', undefined) as { text: string } | null;
        console.log("[App] Received selected text response:", selection);
        if (selection && selection.text) {
          setSelectedText(selection.text);
          setStatus(''); // Clear loading status
          setIsLoadingPopupData(false);
          console.log("[App] Mode: Flashcard Creator");
          return; // Exit early if text is selected
        }

        // 2. If no text, get page info for bookmarking
        console.log("[App] No selected text found, requesting page info...");
        const info = await sendMessage('getPageInfo', undefined) as PageInfo | null;
        console.log("[App] Received page info:", info);
        if (info && info.title && info.url) {
          setPageInfo(info);
          setStatus('');
          console.log("[App] Mode: Bookmark Clipper");
        } else {
          console.error("[App] Failed to get page info.");
          setStatus('Could not retrieve page information.');
          setStatusIsError(true);
        }
      } catch (error: any) {
        console.error('[App] Error fetching initial data:', error);
        setStatus(`Error loading data: ${error instanceof Error ? error.message : String(error)}`);
        setStatusIsError(true);
      } finally {
        setIsLoadingPopupData(false);
      }
    };

    fetchInitialData();
  }, []);

  // Effect to listen for flashcard generation results
  useEffect(() => {
    console.log("[App] Setting up flashcardGenerationResult listener...");
    const cleanup = onMessage<'flashcardGenerationResult'>(
      'flashcardGenerationResult',
      (message: any) => {
        console.log('[App] Received flashcardGenerationResult message:', message);
        setIsGenerating(false); // Turn off loading state
        if (message.data && message.data.flashcard && message.data.cloze) {
          setGeneratedFlashcard(message.data.flashcard);
          setGeneratedCloze(message.data.cloze);
          setStatus(''); // Clear any previous status
          setStatusIsError(false);
        } else {
          console.error('[App] Invalid flashcard generation result structure:', message.data);
          setStatus('Failed to generate flashcard content. Check background logs.');
          setStatusIsError(true);
          setGeneratedFlashcard(null); // Clear potentially partial data
          setGeneratedCloze(null);
        }
      }
    );
    // Cleanup function to remove the listener when the component unmounts
    return cleanup;
  }, []); // Empty dependency array means this effect runs once on mount

  const handleTagsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTagsValue(event.target.value);
  };

  // Handler for saving a bookmark (when no text is selected)
  const handleSaveBookmark = async () => {
    if (!pageInfo || isSaving) return;

    setIsSaving(true);
    setStatus('Saving bookmark...');
    setStatusIsError(false);
    const currentTags = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean).join(',');

    try {
      const newBookmark = await createBookmark({
        url: pageInfo.url,
        title: pageInfo.title,
        tags: currentTags,
      });
      await createChatMessage({ role: 'bookmark', bookmark_id: newBookmark.id });
      setStatus('Bookmark saved!');
      setTimeout(() => window.close(), 1200); // Close after success
    } catch (error) {
      console.error('[PopupApp] Error saving bookmark:', error);
      setStatus(`Error saving bookmark: ${error instanceof Error ? error.message : String(error)}`);
      setStatusIsError(true);
    } finally {
      setIsSaving(false);
    }
  };

  // Revert handleSaveFlashcard signature to accept Partial<Flashcard>
  const handleSaveFlashcard = async (flashcardInput: Partial<Flashcard>) => {
      const front = flashcardInput.front || '';
      const back = flashcardInput.back || '';
      const clozeText = flashcardInput.cloze_text || '';
      
      if (isSaving) return;

      if (!front && !clozeText) { 
          setStatus('Cannot save empty flashcard data.');
          setStatusIsError(true);
          return;
      }

      setIsSaving(true);
      setStatus('Saving flashcard...');
      setStatusIsError(false);

      let cardType: 'front_back' | 'cloze';
      let cardData: Partial<Omit<Flashcard, 'id' | 'created_at'> > = {};

      if (clozeText) {
          cardType = 'cloze';
          cardData = { type: 'cloze', cloze_text: clozeText, front: front || undefined, back: back || undefined };
      } else if (front || back) {
          cardType = 'front_back';
          cardData = { type: 'front_back', front: front || undefined, back: back || undefined };
      } else { /* Already handled above */ }

      cardData.source_url = pageInfo?.url ?? undefined;
      cardData.source_highlight = selectedText ?? undefined;

      try {
         // Comment out the actual save call due to import issues
         // const newFlashcard = await createFlashcard(cardData as Omit<Flashcard, 'id' | 'created_at' | 'due' | 'stability' | 'difficulty' | 'elapsed_days' | 'scheduled_days' | 'reps' | 'lapses' | 'state' | 'last_review'>);
         // await createChatMessage({ role: 'flashcard', flashcard_id: newFlashcard.id });
         console.log('[PopupApp] Flashcard save called (actual DB save commented out):', cardData);
         setStatus('Flashcard saved! (Simulated)');
         await new Promise(resolve => setTimeout(resolve, 500)); // Simulate save delay
         // setTimeout(() => window.close(), 1200); // Keep popup open for now
      } catch (error) {
         console.error('[PopupApp] Error preparing flashcard data:', error);
         setStatus(`Error preparing flashcard: ${error instanceof Error ? error.message : String(error)}`);
         setStatusIsError(true);
      } finally {
         setIsSaving(false);
      }
  };

  // Keep handleGenerateFlashcardContent as async/await to match expected prop type
  const handleGenerateFlashcardContent = useCallback(async (text: string): Promise<{ flashcard: { front: string; back: string }; cloze: { text: string } } | null> => {
     console.log("[App] Sending generateFlashcardContent message to background (awaiting response for prop type)...");
     setStatus('Generating flashcard...');
     setIsGenerating(true);
     setStatusIsError(false);
     setGeneratedFlashcard(null);
     setGeneratedCloze(null);
     try {
         const response = await sendMessage('generateFlashcardContent', { text });
         console.log("[App] Received direct response (for prop):", response);
         const result = response as unknown as { flashcard?: { front: string; back: string }; cloze?: { text: string } };

         if (result && result.flashcard && result.cloze) {
             setIsGenerating(false);
             setStatus('');
             return result as { flashcard: { front: string; back: string }; cloze: { text: string } };
         } else {
             console.error("[App] Invalid direct response structure:", response);
             setStatus('Invalid data received from generation.');
             setStatusIsError(true);
             setIsGenerating(false);
             return null;
         }
     } catch (error: any) {
         console.error("[App] Error awaiting generateFlashcardContent message:", error);
         setStatus(`Error during generation: ${error.message}`);
         setStatusIsError(true);
         setIsGenerating(false);
         return null;
     }
  }, []);

  const handleClosePopup = () => {
    window.close();
  };

  const openSettingsPage = () => {
    browser.runtime.openOptionsPage();
  };

  // Render Loading State
  if (isLoadingPopupData) {
      return <div className="w-80 h-40 flex items-center justify-center p-4"><p className="text-muted-foreground">{status || 'Loading...'}</p></div>;
  }

  // Render Flashcard Creator or Bookmark Clipper based on selected text
  return (
    <div className="relative min-w-[300px]">
      {selectedText ? (
        <FlashcardCreatorPopup
          selectedText={selectedText}
          onSaveFlashcard={handleSaveFlashcard}
          onClose={handleClosePopup}
          onGenerate={handleGenerateFlashcardContent}
          generatedFlashcard={generatedFlashcard}
          generatedCloze={generatedCloze}
          isGenerating={isGenerating}
          status={status}
          statusIsError={statusIsError}
        />
      ) : pageInfo ? (
        <PopupDisplay
          pageTitle={pageInfo.title}
          pageUrl={pageInfo.url}
          status={status}
          isSaving={isSaving}
          canClip={true}
          onSaveBookmark={() => console.warn("Bookmark saving disabled")}
          saveButtonText="Save Bookmark" 
          statusIsError={statusIsError}
          tagsValue={tagsValue}
          onTagsChange={handleTagsChange}
          onSettingsClick={openSettingsPage} 
        />
      ) : (
         // Fallback/Error state if pageInfo is null after loading
         <div className="w-80 h-40 flex flex-col items-center justify-center p-4 text-center">
            <p className={cn("mb-4", statusIsError ? "text-destructive" : "text-muted-foreground")}>{status || 'Cannot access page info.'}</p>
             <Button variant="outline" size="sm" onClick={openSettingsPage}>Go to Settings</Button>
         </div>
      )}
    </div> 
  );
}

export default App; // Export App as default