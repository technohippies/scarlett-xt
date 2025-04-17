import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react'; // Import the Gear icon
import { sendMessage } from '../../utils/messaging'; // Use the typed messaging from utils
import PopupDisplay from '../../src/components/PopupDisplay'; // Update import path
import { FlashcardCreatorPopup } from '../../src/components/popups/FlashcardCreatorPopup'; // Import the new component
import { createBookmark, createFlashcard, createChatMessage, getChatHistory } from '../../utils/db'; // Import DB functions
import type { Flashcard } from '../../src/types/db'; // Import Flashcard type
import { cn } from '../../lib/utils'; // Import the cn function
import { Button } from '../../src/components/ui/button';

// This component manages the state and logic for the popup
function App() {
  const [status, setStatus] = useState<string>('Initializing...'); // Start with initializing
  const [statusIsError, setStatusIsError] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false); 
  const [pageInfo, setPageInfo] = useState<{ title: string; url: string } | null>(null);
  const [tagsValue, setTagsValue] = useState<string>(''); // State for tags
  const [selectedText, setSelectedText] = useState<string | null>(null); // State for selected text
  const [isLoadingPopupData, setIsLoadingPopupData] = useState<boolean>(true); // Loading state for initial data fetch

  useEffect(() => {
    async function getPopupData() {
      setIsLoadingPopupData(true);
      setStatus('Loading page info...');
      setStatusIsError(false);
      setPageInfo(null);
      setSelectedText(null);

      try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];
        const tabId = currentTab?.id;

        if (!tabId) throw new Error("Could not get active tab ID.");
        if (!currentTab?.url || !currentTab?.title) throw new Error("Could not get tab URL or title.");

        let canInteract = false;
        if (currentTab.url.startsWith('http://') || currentTab.url.startsWith('https://')) {
           setPageInfo({ title: currentTab.title, url: currentTab.url });
           canInteract = true;
        } else {
           setStatus('Cannot save from this page.');
           // Keep pageInfo null, selectedText null
        }

        // Attempt to get selected text ONLY if we can interact with the page
        if (canInteract) {
            let text = '';
            try {
                text = await browser.tabs.sendMessage(tabId, { type: 'GET_SELECTED_TEXT' });
                console.log('[PopupApp] Received selected text:', text);
            } catch (error) {
                console.warn('[PopupApp] Failed to get selected text from content script (maybe none selected or script not ready):', error);
                text = ''; // Assume no text if error
            }
            setSelectedText(text || ''); // Set to empty string if null/undefined, differentiating from initial null
            setStatus(''); // Clear loading status if successful
        }

      } catch (error) {
        console.error('[PopupApp] Error getting popup data:', error);
        setStatus(`Error: ${error instanceof Error ? error.message : String(error)}`);
        setStatusIsError(true);
      } finally {
        setIsLoadingPopupData(false);
      }
    }
    getPopupData();
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

  // Handler for saving a flashcard (passed to FlashcardCreatorPopup)
  const handleSaveFlashcard = async (flashcardData: Partial<Flashcard>) => {
      if (isSaving) return;

      setIsSaving(true);
      setStatus('Saving flashcard...');
      setStatusIsError(false);
      const currentTags = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean).join(',');

      try {
         // Enrich with source URL and tags before saving
         const dataToSave = {
            ...flashcardData,
            source_url: pageInfo?.url, // Add page URL as source if available
            tags: currentTags,
         };

         // Validate essential fields before attempting DB operation
         if (!dataToSave.type || (!dataToSave.front && !dataToSave.cloze_text)) {
             throw new Error('Flashcard data is missing type or front/cloze content.');
         }

         // Remove id if present, DB assigns it
         delete dataToSave.id;

         const newFlashcard = await createFlashcard(dataToSave as Omit<Flashcard, 'id' | 'created_at' | keyof import('ts-fsrs').Card | 'due' | 'state' | 'last_review'>); // Type assertion needed
         await createChatMessage({ role: 'flashcard', flashcard_id: newFlashcard.id });
         setStatus('Flashcard saved!');
         setTimeout(() => window.close(), 1200); // Close after success
      } catch (error) {
         console.error('[PopupApp] Error saving flashcard:', error);
         setStatus(`Error saving flashcard: ${error instanceof Error ? error.message : String(error)}`);
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
        />
      ) : pageInfo ? (
        <PopupDisplay
          pageTitle={pageInfo.title}
          pageUrl={pageInfo.url}
          status={status}
          isSaving={isSaving} // Pass isSaving state
          canClip={true} // If pageInfo exists, we can bookmark
          onSaveBookmark={handleSaveBookmark} // Pass bookmark save handler
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