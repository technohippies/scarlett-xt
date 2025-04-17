import browser from 'webextension-polyfill';
import { onMessage } from '../utils/messaging';
import type { ProtocolMap } from '../utils/messaging';
// Remove the incorrect import
// import { defineContentScript } from 'wxt/...'; 

console.log('[Scarlett Content Script] Preparing...');

// Directly export the configuration object as the default export
export default defineContentScript({
  matches: ['*://*/*'], 
  // Specify if it needs to run at document_start, document_end, or document_idle
  runAt: 'document_end', 

  async main(ctx) {
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

    // --- Listener for messages FROM the Background Script ---
    // Use the same onMessage from the messaging utility if it's compatible
    // or stick with webext-bridge if that's what's set up.
    // Assuming we use the shared onMessage from utils/messaging:
    onMessage<'_requestSelectionFromContentScript'>(
      '_requestSelectionFromContentScript',
      async (message: any) => {
        console.log('[Scarlett Content Script] Received _requestSelectionFromContentScript from background');
        const selectedText = window.getSelection()?.toString() || '';
        console.log(`[Scarlett Content Script] Returning selected text: "${selectedText.substring(0, 50)}..."`);
        return { text: selectedText };
      }
    );

    // Example: Listener for messages FROM the Popup/Other parts of the extension
    // This might be used if the popup directly asked the content script
    // onMessage('GET_SELECTED_TEXT', async () => {
    //   console.log('[ContentScript] Received GET_SELECTED_TEXT request.');
    //   const text = window.getSelection()?.toString();
    //   console.log(`[ContentScript] Selected Text: "${text}"`);
    //   return text;
    // });

    // Example: Sending a message TO the Background Script
    // const response = await sendMessage('messageFromContentScript', { data: 'some payload' }, 'background');
    // console.log('[ContentScript] Received response from background:', response);

    // You can add other content script logic here if necessary
  },
}); 