import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';
import { Gear } from '@phosphor-icons/react'; // Import the Gear icon
import { sendMessage } from '../../lib/messaging'; // Relative path from entrypoints/popup to lib
import PopupDisplay from '../../src/components/PopupDisplay'; // Update import path

// This component manages the state and logic for the popup
function App() {
  const [status, setStatus] = useState<string>('');
  const [statusIsError, setStatusIsError] = useState<boolean>(false);
  const [isClipping, setIsClipping] = useState<boolean>(false);
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

  const handleClip = async () => {
    if (!pageInfo || !canClip || isClipping) {
      return;
    }

    setIsClipping(true);
    setStatus('Saving bookmark...'); // Updated status message
    setStatusIsError(false);

    try {
      // Include tags in the message payload
      await sendMessage('clipPage', { 
        title: pageInfo.title, 
        url: pageInfo.url, 
        tags: tagsValue.split(',').map(tag => tag.trim()).filter(Boolean) // Send tags as an array
      }); 
      setStatus('Bookmark saved successfully!'); // Updated status message
      setCanClip(false); // Optionally disable after successful clip
      // setTimeout(() => window.close(), 1500); // Optional: close popup
    } catch (error) {
      console.error('Error sending clip message:', error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      if (errorMsg.includes('Could not establish connection')) {
         setStatus('Error: Background service not responding.');
      } else {
         setStatus(`Error saving bookmark: ${errorMsg}`);
      }
      setStatusIsError(true);
    } finally {
      setIsClipping(false);
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
        isClipping={isClipping}
        canClip={canClip}
        onClip={handleClip}
        clipButtonText="Save"
        statusIsError={statusIsError}
        tagsValue={tagsValue}
        onTagsChange={handleTagsChange}
        onSettingsClick={openSettingsPage} // Pass the function down
      />
    </div> 
  );
}

export default App; // Export App as default