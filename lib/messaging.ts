import browser, { type Runtime } from 'webextension-polyfill';

// Define a type for message handlers - maps message type to handler function
type MessageHandler<T = any, R = any> = (
  message: { type: string; data: T },
  sender: Runtime.MessageSender
) => Promise<R> | R | void; // Allow sync, async, or void returns

type MessageListeners = {
  [key: string]: MessageHandler<any, any>[];
};

const listeners: MessageListeners = {};

/**
 * Sends a message to other parts of the extension.
 * Can be called from any context (content script, popup, background, options, etc.).
 * @param type The message type (string identifier).
 * @param data Optional data payload.
 * @returns A promise resolving with the response from the listener, if any.
 */
export async function sendMessage<T = any, R = any>(type: string, data?: T): Promise<R | undefined> {
  console.debug(`[Messaging] Sending: ${type}`, data);
  try {
    const response = await browser.runtime.sendMessage({ type, data });
    console.debug(`[Messaging] Received response for ${type}:`, response);
    return response as R;
  } catch (error: any) {
    // Check if the error is due to no receiving end, which is often okay
    if (error.message?.includes('Could not establish connection') || error.message?.includes('Receiving end does not exist')) {
      console.debug(`[Messaging] No listener for message type "${type}"`);
      return undefined; // Or handle as needed - maybe return a specific error object?
    }
    console.error(`[Messaging] Error sending message ${type}:`, error);
    throw error; // Re-throw other errors
  }
}

/**
 * Registers a listener for a specific message type.
 * Primarily used in the background script, but can be used elsewhere if needed.
 * @param type The message type to listen for.
 * @param handler The function to execute when a message of this type is received.
 */
export function onMessage<T = any, R = any>(type: string, handler: MessageHandler<T, R>): void {
  if (!listeners[type]) {
    listeners[type] = [];
  }
  listeners[type].push(handler);
  console.debug(`[Messaging] Registered listener for: ${type}`);
}

// --- Central Message Listener (Typically run only in background/service worker) ---
// This single listener receives all messages and dispatches them to the correct handler
// registered via onMessage.
function setupCentralListener(): void {
  // @ts-ignore - Also ignore the type check for hasListener
  if (browser.runtime.onMessage.hasListener(handleIncomingMessage)) {
    console.warn('[Messaging] Central listener already attached.');
    return;
  }
  // @ts-ignore - Re-adding ignore due to persistent type error with async/sync dispatcher
  browser.runtime.onMessage.addListener(handleIncomingMessage);
  console.log('[Messaging] Central message listener attached.');
}

// The actual listener function added to browser.runtime.onMessage
function handleIncomingMessage(message: any, sender: Runtime.MessageSender, sendResponse: (response?: any) => void): boolean | undefined {
  const { type, data } = message || {}; // Restore destructuring
  
  if (!type || typeof type !== 'string') { // Restore type check
    console.warn('[Messaging] Received message without valid type:', message);
    return false;
  }

  console.debug(`[Messaging] Received: ${type}`, data, 'from:', sender.tab?.id || sender.id); // Restore log

  const handlers = listeners[type]; // Restore original lookup
  if (!handlers || handlers.length === 0) {
    console.debug(`[Messaging] No handlers registered for type "${type}"`); // Restore log
    return false; // Restore original return
  }

  // Restore original loop logic
  let isAsync = false;
  for (const handler of handlers) {
    try {
      const result = handler({ type, data }, sender);

      if (result instanceof Promise) {
        isAsync = true; // Restore setting isAsync
        result
          .then((response) => {
            console.debug(`[Messaging] Handler for "${type}" resolved:`, response);
            try { sendResponse(response); } catch (e) { console.warn(`[Messaging] Failed to send async response for "${type}":`, e); }
          })
          .catch((error: any) => {
            console.error(`[Messaging] Async handler for "${type}" rejected:`, error);
            try { sendResponse({ error: error?.message || 'Handler failed' }); } catch (e) { console.warn(`[Messaging] Failed to send async error response for "${type}":`, e); }
          });
        // IMPORTANT: Return true immediately as we are handling the response asynchronously.
        return true;
      } else if (result !== undefined) {
        console.debug(`[Messaging] Handler for "${type}" returned sync:`, result);
        sendResponse(result);
        return false; // Return false as we handled it synchronously.
      } 
      // If handler returned undefined, continue loop
    } catch (error: any) {
      console.error(`[Messaging] Sync handler for "${type}" threw error:`, error);
      try { sendResponse({ error: error?.message || 'Handler failed' }); } catch (e) { console.warn(`[Messaging] Failed to send sync error response for "${type}":`, e); }
      return false; // Return false as we handled sync error.
    }
  }

  // If loop finished without returning true/false, return based on isAsync
  return isAsync; // Original logic: returns true if any handler *was* async
}

// Call this once, typically when the background script starts.
// Avoid calling this in content scripts or UI components unless you have a specific reason.
// setupCentralListener(); // Don't auto-setup here, let background script import and call it.

export { setupCentralListener }; // Export the setup function 