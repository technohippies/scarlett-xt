import React, { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';
import { sendMessage } from '../../lib/messaging'; // Relative path from entrypoints/popup to lib

// This is the React component for the clipper popup
function Popup() {
  const [status, setStatus] = useState<string>('');
  const [isClipping, setIsClipping] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState<{ title: string; url: string } | null>(null);

  // Get current tab info when popup opens
  useEffect(() => {
    async function getCurrentTabInfo() {
      try {
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        if (tabs.length > 0 && tabs[0].url && tabs[0].title) {
          // Basic check to exclude internal/extension pages
          if (tabs[0].url.startsWith('http://') || tabs[0].url.startsWith('https://')) {
             setPageInfo({ title: tabs[0].title, url: tabs[0].url });
             setStatus('Ready to clip.');
          } else {
             setStatus('Cannot clip this type of page.');
          }
        } else {
          setStatus('Could not get page info.');
        }
      } catch (error) {
        console.error('Error getting current tab:', error);
        setStatus(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    getCurrentTabInfo();
  }, []);

  const handleClip = async () => {
    if (!pageInfo || isClipping) {
      return;
    }

    setIsClipping(true);
    setStatus('Clipping...');

    try {
      await sendMessage('clipPage', { title: pageInfo.title, url: pageInfo.url });
      setStatus('Page clipped successfully!');
      // Optionally close popup after success
      // setTimeout(() => window.close(), 1500);
    } catch (error) {
      console.error('Error sending clip message:', error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      // Check for specific connection error
      if (errorMsg.includes('Could not establish connection')) {
         setStatus('Error: Background service not responding.');
      } else {
         setStatus(`Error: ${errorMsg}`);
      }
    } finally {
      setIsClipping(false);
    }
  };

  return (
    <>
      {/* Use className for React */}
      <button onClick={handleClip} disabled={!pageInfo || isClipping}>
        {isClipping ? 'Clipping...' : 'Clip Current Page'}
      </button>
      {status && <div className={`status ${status.startsWith('Error') ? 'error' : ''}`}>{status}</div>}
    </>
  );
}

export default Popup; 