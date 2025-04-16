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
  if (browser.runtime.onMessage.hasListener(handleIncomingMessage)) {
    console.warn('[Messaging] Central listener already attached.');
    return;
  }
  // @ts-ignore - Suppressing persistent type error with async listener
  browser.runtime.onMessage.addListener(handleIncomingMessage);
  console.log('[Messaging] Central message listener attached.');
}

// The actual listener function added to browser.runtime.onMessage
function handleIncomingMessage(message: any, sender: Runtime.MessageSender, sendResponse: (response?: any) => void): boolean | undefined {
  const { type, data } = message || {};

  if (!type || typeof type !== 'string') {
    console.warn('[Messaging] Received message without valid type:', message);
    // Cannot handle, return false for sync handling
    return false;
  }

  console.debug(`[Messaging] Received: ${type}`, data, 'from:', sender.tab?.id || sender.id);

  const handlers = listeners[type];
  if (!handlers || handlers.length === 0) {
    console.debug(`[Messaging] No handlers registered for type "${type}"`);
    // No handler, return false (or undefined) for sync handling
    // Allow other potential listeners (like in offscreen.ts) to handle it.
    return false;
  }

  let isAsync = false;
  // Execute all handlers for this type
  // Note: If multiple handlers exist, only the *first one* that returns
  // a value (or promise) will have its response sent back via sendResponse.
  // This matches the behavior of native browser.runtime.onMessage.
  for (const handler of handlers) {
    try {
      const result = handler({ type, data }, sender);

      // Check if the handler returns a Promise (is async)
      if (result instanceof Promise) {
        isAsync = true;
        result
          .then((response) => {
            console.debug(`[Messaging] Handler for "${type}" resolved:`, response);
            try {
              sendResponse(response);
            } catch (e) {
               // Handle error if the sending context is closed before response is ready
               console.warn(`[Messaging] Failed to send async response for "${type}":`, e);
            }
          })
          .catch((error: any) => {
            console.error(`[Messaging] Async handler for "${type}" rejected:`, error);
             try {
              // Optionally send back an error object on rejection
               sendResponse({ error: error?.message || 'Handler failed' });
             } catch (e) {
                console.warn(`[Messaging] Failed to send async error response for "${type}":`, e);
             }
          });
        // IMPORTANT: Return true immediately as we are handling the response asynchronously.
        return true;
      }
      // If it's a synchronous handler that returned a value
      else if (result !== undefined) {
        console.debug(`[Messaging] Handler for "${type}" returned sync:`, result);
        sendResponse(result);
        // Return false as we handled it synchronously.
        return false;
      }
      // If the handler returned undefined (void), continue to next handler or finish.
    } catch (error: any) {
      console.error(`[Messaging] Sync handler for "${type}" threw error:`, error);
      // Optionally send error back for sync errors too
       try {
           sendResponse({ error: error?.message || 'Handler failed' });
       } catch (e) {
           console.warn(`[Messaging] Failed to send sync error response for "${type}":`, e);
       }
      // Return false as we handled it synchronously (by catching the error).
      return false;
    }
  }

  // If we looped through all handlers and none handled the response asynchronously
  // or synchronously returned a value, return false/undefined.
  return false;
}

// Call this once, typically when the background script starts.
// Avoid calling this in content scripts or UI components unless you have a specific reason.
// setupCentralListener(); // Don't auto-setup here, let background script import and call it.

export { setupCentralListener }; // Export the setup function 