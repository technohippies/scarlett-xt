import browser from 'webextension-polyfill';
// Remove the incorrect import
// import { defineContentScript } from 'wxt/...'; 

console.log('[Scarlett Content Script] Preparing...');

// Directly export the configuration object as the default export
export default {
  matches: ['<all_urls>'], // Or be more specific if needed
  // Specify if it needs to run at document_start, document_end, or document_idle
  runAt: 'document_end', 

  main() {
    console.log('[Scarlett Content Script] main() executing.');

    /**
     * Listener for messages from other parts of the extension (popup, background).
     */
    browser.runtime.onMessage.addListener((message: any, sender: browser.Runtime.MessageSender): Promise<string> | boolean | void => {
      console.debug('[Scarlett Content Script] Received message:', message, 'from:', sender.tab?.id);

      if (message && typeof message === 'object' && message.type === 'GET_SELECTED_TEXT') {
        const selectedText = window.getSelection()?.toString().trim() || '';
        console.log(`[Scarlett Content Script] Responding with selected text: "${selectedText.substring(0, 50)}..."`);
        // Return the promise directly for async response
        return Promise.resolve(selectedText);
      }

      // Handle other message types here if needed in the future

      // Explicitly return undefined or false if not handling the message or not async
      // return false; 
    });

    // You can add other content script logic here if necessary
  },
}; 