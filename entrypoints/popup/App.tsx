import React, { useState, useEffect, useCallback } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react'; // Import the Gear icon
import { sendMessage, onMessage } from '../../utils/messaging'; // Use the original and add onMessage
import type { ProtocolMap, PageInfo, FlashcardGenerationResult } from '../../utils/messaging'; // Import FlashcardGenerationResult
import PopupDisplay from '../../src/components/PopupDisplay'; // Update import path
import { FlashcardCreatorPopup } from '../../src/components/popups/FlashcardCreatorPopup'; // Import the new component
import { createBookmark, createFlashcard, createChatMessage, getChatHistory } from '../../utils/db'; // Removed createFlashcard
import type { Flashcard } from '../../src/types/db'; // Import Flashcard type
import { cn } from '../../lib/utils'; // Import the cn function
import { Button } from '../../src/components/ui/button';
// Import FSRSCard type definition for Omit
import { Card as FSRSCard, State } from 'ts-fsrs';

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

  // Add a ref to track initial generation done
  const initialGenerationDone = React.useRef<boolean>(false);

  // --- NEW Translation State --- 
  const [translatedFlashcardBack, setTranslatedFlashcardBack] = useState<string | null>(null);
  const [translatedClozeText, setTranslatedClozeText] = useState<string | null>(null);
  const [isTranslatingFlashcard, setIsTranslatingFlashcard] = useState(false);
  const [isTranslatingCloze, setIsTranslatingCloze] = useState(false);
  // --- End NEW Translation State ---

  useEffect(() => {
    console.log("[App] Initializing popup...");
    setIsLoadingPopupData(true);
    setStatus('Loading...');
    setStatusIsError(false);
    setGeneratedFlashcard(null); // Reset generation state on init
    setGeneratedCloze(null);
    setIsGenerating(false);
    // Reset translation state on init
    setTranslatedFlashcardBack(null);
    setTranslatedClozeText(null);
    setIsTranslatingFlashcard(false);
    setIsTranslatingCloze(false);

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

  // Generate flashcard content when selected text changes or component mounts
  // useEffect(() => {
  //   if (selectedText && !isGenerating && !initialGenerationDone.current) {
  //     console.log('[App] Triggering initial flashcard generation on mount/text change.');
  //     handleGenerateFlashcardContent(selectedText);
  //     initialGenerationDone.current = true;
  //   }
  // }, [selectedText, isGenerating]);

  // Handler to initiate flashcard generation
  // Revert to simple fire-and-forget
  const handleGenerateFlashcardContent = useCallback((text: string) => {
    if (isGenerating) {
      console.warn('[App] Generation already in progress.');
      return;
    }
    console.log('[App] Sending generateFlashcardContent message to background...');
    setIsGenerating(true);
    // Reset translation state when starting new generation
    setTranslatedFlashcardBack(null);
    setTranslatedClozeText(null);
    setStatus('Generating flashcard...');
    setStatusIsError(false);
    sendMessage('generateFlashcardContent', {
      text,
      sourceUrl: pageInfo?.url || null, // Revert back to null for ProtocolMap compatibility
      sourceLanguage: null, // TODO: Add language detection later
      targetLanguage: null, // TODO: Add target language later
    })
      .catch((error) => {
        console.error('[App] Error sending generateFlashcardContent message:', error);
        setStatus(`Error generating: ${error.message}`);
        setStatusIsError(true);
      })
      .finally(() => {
        // Note: isGenerating is set back to false when the result *arrives* via listener
        console.log('[App] generateFlashcardContent message sent (fire and forget).');
      });
  // Remove isGenerating from dependencies, keep pageInfo if it's stable after load
  }, [pageInfo]);

  // Listener for flashcard generation results from the background
  useEffect(() => {
    console.log('[App] Setting up flashcardGenerationResult listener...');
    const unlisten = onMessage(
      'flashcardGenerationResult',
      (message) => { // Correctly type the message argument based on ProtocolMap
        console.log('[App] Received flashcardGenerationResult message:', message);
        const { data, error } = message.data; // Extract data and error from message.data
        setIsGenerating(false); // Stop generating indicator
        if (error) {
          console.error('[App] Flashcard generation failed:', error);
          setStatus(`Error: ${error}`);
          setStatusIsError(true);
          setGeneratedFlashcard(null);
          setGeneratedCloze(null);
        } else if (data) {
          setGeneratedFlashcard(data.flashcard);
          setGeneratedCloze(data.cloze);
          setStatus('Generation complete.');
          setStatusIsError(false);
        } else {
          console.warn('[App] Received empty flashcard generation result.');
          setStatus('Received empty result.');
          setStatusIsError(true);
          setGeneratedFlashcard(null);
          setGeneratedCloze(null);
        }
        // Reset translation state when generation finishes
        setTranslatedFlashcardBack(null);
        setTranslatedClozeText(null);
        setIsTranslatingFlashcard(false);
        setIsTranslatingCloze(false);
      },
    );
    return unlisten;
  }, []);

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

  // Handler to save the generated flashcard
  const handleSaveFlashcard = async (flashcardDataFromPopup: Partial<Flashcard>) => {
    if (!selectedText) {
      console.error('[PopupApp] Cannot save flashcard without selected text.');
      setStatus('Error: No text selected.');
      setStatusIsError(true);
      return;
    }

    // Combine generated data, popup data, and potentially translated data
    const completeFlashcardData = {
      front: generatedFlashcard?.front, // Prefer generated front
      back: translatedFlashcardBack ?? generatedFlashcard?.back, // Use translation if available
      cloze_text: translatedClozeText ?? generatedCloze?.text, // Use translation if available
      ...flashcardDataFromPopup, // Include edits made in the popup
      source_highlight: selectedText,
      source_url: pageInfo?.url || undefined,
      // Determine type based on final cloze content
      type: ((translatedClozeText ?? generatedCloze?.text) ? 'cloze' : 'front_back') as Flashcard['type'],
      target_language: translatedFlashcardBack || translatedClozeText ? 'zh-CN' : undefined,
      // Add required FSRS fields with defaults if not in flashcardDataFromPopup
      difficulty: flashcardDataFromPopup.difficulty ?? 0,
      stability: flashcardDataFromPopup.stability ?? 0,
      reps: flashcardDataFromPopup.reps ?? 0,
      lapses: flashcardDataFromPopup.lapses ?? 0,
      state: flashcardDataFromPopup.state ?? State.New,
      due: flashcardDataFromPopup.due ?? new Date().toISOString(),
      elapsed_days: flashcardDataFromPopup.elapsed_days ?? 0,
      scheduled_days: flashcardDataFromPopup.scheduled_days ?? 0,
      last_review: flashcardDataFromPopup.last_review || undefined,
    };

    // Explicitly type the data being sent
    const cardDataToSend: Partial<Flashcard> = completeFlashcardData;

    console.log('[PopupApp] Sending saveFlashcardAndNotify message to background:', cardDataToSend);
    setIsSaving(true); // Use isSaving state
    setStatus('Saving flashcard...');
    setStatusIsError(false);

    try {
      const savedFlashcard = await sendMessage('saveFlashcardAndNotify', { cardData: cardDataToSend });

      if (savedFlashcard) {
        console.log('[PopupApp] Flashcard saved via background:', savedFlashcard);
        setStatus('Flashcard saved successfully!');
        setStatusIsError(false);
        // Consider closing popup or giving other feedback
        setTimeout(window.close, 1200); // Close after success
      } else {
        throw new Error('Background returned null or undefined saving flashcard.');
      }
    } catch (error: any) {
      console.error('[PopupApp] Error saving flashcard via background:', error);
      setStatus(`Error saving flashcard: ${error.message}`);
      setStatusIsError(true);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClosePopup = () => {
    window.close();
  };

  const openSettingsPage = () => {
    browser.runtime.openOptionsPage();
  };

  // --- NEW Translation Handlers ---
  const handleTranslateFlashcard = useCallback(async (text: string) => {
    if (isTranslatingFlashcard) return;
    console.log('[App] Translating flashcard back:', text);
    setIsTranslatingFlashcard(true);
    setTranslatedFlashcardBack('Translating...'); // Indicate loading
    setStatus('Translating flashcard...');
    setStatusIsError(false);
    try {
      const translated = await sendMessage('translateText', {
        text: text,
        targetLang: 'Mandarin Chinese'
      });
      setTranslatedFlashcardBack(translated);
      setStatus('Translation complete.');
    } catch (error: any) {
      console.error('[App] Error translating flashcard back:', error);
      setTranslatedFlashcardBack('[Translation Error]');
      setStatus(`Error: ${error.message || 'Translation failed'}`);
      setStatusIsError(true);
    } finally {
      setIsTranslatingFlashcard(false);
    }
  }, [isTranslatingFlashcard]); // Dependency: isTranslatingFlashcard to prevent concurrent calls

  const handleTranslateCloze = useCallback(async (fullClozeText: string) => {
    if (isTranslatingCloze) return;
    console.log('[App] Translating cloze answer from:', fullClozeText);
    setIsTranslatingCloze(true);
    setTranslatedClozeText('Translating...'); // Indicate loading
    setStatus('Translating cloze...');
    setStatusIsError(false);
    try {
      const match = fullClozeText.match(/\{\{c1::(.*?)\}\}/);
      if (match && match[1]) {
        const originalAnswer = match[1];
        const translatedAnswer = await sendMessage('translateText', {
          text: originalAnswer,
          targetLang: 'Mandarin Chinese'
        });
        const finalCloze = fullClozeText.replace(`{{c1::${originalAnswer}}}`, `{{c1::${translatedAnswer}}}`);
        setTranslatedClozeText(finalCloze);
        setStatus('Translation complete.');
      } else {
        console.warn("[App] Could not extract cloze answer for translation.");
        setTranslatedClozeText('[No Answer Found for Translation]');
        setStatus('Could not find cloze answer to translate.');
        setStatusIsError(true);
      }
    } catch (error: any) {
      console.error('[App] Error translating cloze answer:', error);
      setTranslatedClozeText('[Translation Error]');
      setStatus(`Error: ${error.message || 'Cloze translation failed'}`);
      setStatusIsError(true);
    } finally {
      setIsTranslatingCloze(false);
    }
  }, [isTranslatingCloze]); // Dependency: isTranslatingCloze
  // --- End NEW Translation Handlers ---

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
          // --- Pass Translation Props ---
          onTranslateFlashcard={handleTranslateFlashcard}
          onTranslateCloze={handleTranslateCloze}
          translatedFlashcardBack={translatedFlashcardBack}
          translatedClozeText={translatedClozeText}
          isTranslatingFlashcard={isTranslatingFlashcard}
          isTranslatingCloze={isTranslatingCloze}
          // --- End Pass Translation Props ---
        />
      ) : pageInfo ? (
        <PopupDisplay
          pageTitle={pageInfo.title}
          pageUrl={pageInfo.url}
          status={status}
          isSaving={isSaving}
          canClip={true}
          onSaveBookmark={handleSaveBookmark}
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