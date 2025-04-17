import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react'; // Import the Gear icon
import { sendMessage } from '../../utils/messaging'; // Use the typed messaging from utils
import PopupDisplay from '../../src/components/PopupDisplay'; // Update import path
import { createBookmark, createFlashcard, createChatMessage, getChatHistory } from '../../utils/db'; // Import DB functions
import { generateFlashcardPair } from '../../src/services/llmService'; // Import the new function

// This component manages the state and logic for the popup
function App() {
  const [status, setStatus] = useState<string>('');
  const [statusIsError, setStatusIsError] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false); // Renamed from isClipping
  const [canClip, setCanClip] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState<{ title: string; url: string } | null>(null);
  const [tagsValue, setTagsValue] = useState<string>(''); // State for tags

  // Get current tab info when popup opens
  useEffect(() => {
    async function getCurrentTabInfo() {
      setStatus('Loading page info...');
      setCanClip(false);
      try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        const currentTab = tabs[0];

        if (currentTab?.url && currentTab?.title) {
          // Check if it's a clippable page (http/https)
          if (currentTab.url.startsWith('http://') || currentTab.url.startsWith('https://')) {
             setPageInfo({ title: currentTab.title, url: currentTab.url });
             setStatus(''); // Clear status
             setCanClip(true); // Enable clipping
             setStatusIsError(false);
          } else {
             // Non-clippable page: Show empty state, disable clipping, neutral status
             setPageInfo(null); // Clear page info
             setStatus('No text found'); 
             setCanClip(false); 
             setStatusIsError(false); // Not an error state
          }
        } else {
          // Still treat inability to get info as an error state
          setPageInfo(null);
          setStatus('Could not get current page information.');
          setCanClip(false);
          setStatusIsError(true);
        }
      } catch (error) {
        console.error('Error getting current tab:', error);
        setStatus(`Error fetching page info: ${error instanceof Error ? error.message : String(error)}`);
        setStatusIsError(true);
      }
    }
    getCurrentTabInfo();
  }, []);

  const handleTagsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTagsValue(event.target.value);
  };

  // Renamed from handleClip
  const handleSave = async () => {
    if (!pageInfo || !canClip || isSaving) {
      return;
    }

    setIsSaving(true);
    setStatus('Processing...');
    setStatusIsError(false);

    try {
      const tabs = await browser.tabs.query({ active: true, currentWindow: true });
      const activeTab = tabs[0];
      if (!activeTab?.id) throw new Error("Could not get active tab ID.");

      // 1. Get selected text from content script
      let selectedText = '';
      try {
          selectedText = await browser.tabs.sendMessage(activeTab.id, { type: 'GET_SELECTED_TEXT' });
      } catch (error) {
          console.warn('[PopupApp] Failed to get selected text from content script:', error);
          // Potentially the content script hasn't loaded yet or access is denied.
          // Proceed assuming no text is selected.
          selectedText = '';
      }
      
      const currentTags = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean).join(','); // Store tags as comma-separated string

      // 2. Check if text is selected
      if (!selectedText) {
        // --- Create Bookmark --- 
        setStatus('Saving bookmark...');
        const newBookmark = await createBookmark({
          url: pageInfo.url,
          title: pageInfo.title,
          tags: currentTags,
        });
        await createChatMessage({ role: 'bookmark', bookmark_id: newBookmark.id });
        setStatus('Bookmark saved successfully!');

      } else {
        // --- Create Flashcards --- 
        setStatus('Generating flashcards...');
        console.log('Selected Text:', selectedText);

        // Call the new LLM service function
        const flashcardContent = await generateFlashcardPair(selectedText, pageInfo.url);

        if (!flashcardContent) {
             // Throw error or set status and return
             setStatus('Error: Failed to generate flashcard content from LLM.');
             setStatusIsError(true);
             // Don't set isSaving=false here yet, it's done in finally block
             throw new Error('Failed to generate flashcard content.'); 
        }

        // Create Front/Back card
        const frontBackCard = await createFlashcard({
            type: 'front_back',
            front: flashcardContent.frontBack.front,
            back: flashcardContent.frontBack.back,
            source_url: pageInfo.url,
            source_highlight: selectedText,
            tags: currentTags
        });
        await createChatMessage({ role: 'flashcard', flashcard_id: frontBackCard.id });
        
        // Create Cloze card
        const clozeCard = await createFlashcard({
            type: 'cloze',
            cloze_text: flashcardContent.cloze.text,
            source_url: pageInfo.url,
            source_highlight: selectedText,
            tags: currentTags
        });
        await createChatMessage({ role: 'flashcard', flashcard_id: clozeCard.id });

        setStatus('Flashcards created successfully!');
      }

      // TODO: Refresh chat history display here
      // e.g., fetchChatHistory().then(setHistoryState);

      setCanClip(false); // Optionally disable after successful save
      // setTimeout(() => window.close(), 1500); // Optional: close popup

    } catch (error) {
      console.error('Error during save process:', error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      if (errorMsg.includes('Could not establish connection')) {
         setStatus('Error: Background service not responding.');
      } else if (errorMsg.includes('No tab with id')) {
         setStatus('Error: Could not communicate with page.');
      } else {
         setStatus(`Error: ${errorMsg}`);
      }
      setStatusIsError(true);
    } finally {
      setIsSaving(false);
    }
  };

  // Function to open the settings page
  const openSettingsPage = () => {
    browser.runtime.openOptionsPage();
  };

  return (
    <div className="relative min-w-[300px]"> {/* Only need relative wrapper if App had other elements, can likely be removed */} 
      {/* Settings Gear Icon Button REMOVED FROM HERE */} 
      
      <PopupDisplay
        pageTitle={pageInfo?.title}
        pageUrl={pageInfo?.url}
        status={status}
        isClipping={isSaving} // Changed prop name
        canClip={canClip}
        onClip={handleSave} // Changed prop name
        clipButtonText="Save" // Default text remains Save
        statusIsError={statusIsError}
        tagsValue={tagsValue}
        onTagsChange={handleTagsChange}
        onSettingsClick={openSettingsPage} // Pass the function down
      />
    </div> 
  );
}

export default App; // Export App as default