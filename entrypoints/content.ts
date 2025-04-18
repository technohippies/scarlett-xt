import browser from 'webextension-polyfill';
import { onMessage } from '../utils/messaging';
import { defineContentScript } from 'wxt/utils/define-content-script';

console.log('[Scarlett Content Script] Preparing...');

// Directly export the configuration object as the default export
export default defineContentScript({
  matches: ['*://*/*'], 
  // Specify if it needs to run at document_start, document_end, or document_idle
  runAt: 'document_end', 

  async main(_ctx: any) {
    console.log('[Scarlett Content Script] main() executing.');

    // --- REMOVED Standard Listener ---
    // browser.runtime.onMessage.addListener((message: any, sender: browser.Runtime.MessageSender): Promise<string> | boolean | void => {
    //   console.debug('[Scarlett Content Script] Received message:', message, 'from:', sender.tab?.id);
    //   if (message && typeof message === 'object' && message.type === 'GET_SELECTED_TEXT') {
    //     const selectedText = window.getSelection()?.toString().trim() || '';
    //     console.log(`[Scarlett Content Script] Responding with selected text: "${selectedText.substring(0, 50)}..."`);
    //     return Promise.resolve(selectedText);
    //   }
    // });

    // --- Listener for messages FROM the Background Script ---
    // Listens for '_requestSelectionFromContentScript' using the shared messaging utility
    onMessage('_requestSelectionFromContentScript', async (_message: any) => {
      console.log('[Scarlett Content Script] Received _requestSelectionFromContentScript from background');
      const selectedText = window.getSelection()?.toString() || '';
      console.log(`[Scarlett Content Script] Returning selected text: "${selectedText.substring(0, 50)}..."`);
      // Return structure matches ProtocolMap response type: Promise<{ text: string } | null>
      return { text: selectedText }; 
    });

    // Add listener for the 'ping' message used by background script
    browser.runtime.onMessage.addListener((message: any, sender, sendResponse) => {
      if (message && message.type === 'ping') {
        console.log('[Scarlett Content Script] Received ping from background.');
        sendResponse({ pong: true });
      }
      // Always return true to satisfy strict TS type for listeners that *might* be async
      return true;
    });

    console.log('[Scarlett Content Script] Listeners set up.');

    // You can add other content script logic here if necessary
  },
}); 