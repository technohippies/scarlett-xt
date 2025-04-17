import browser from 'webextension-polyfill';
import { onMessage, sendMessage, type ProtocolMap, OllamaStreamChunk } from '~/utils/messaging';
import { loadUserConfig, streamChatResponse } from '../src/services/llmService'; // Use relative path for LLM service import

console.log('Background script loaded.');

// --- Offscreen Document Management ---
const OFFSCREEN_DOCUMENT_PATH = 'offscreen.html'; // Path to your offscreen document HTML

async function hasOffscreenDocument(): Promise<boolean> {
  // Check if the document is already open.
  // @ts-ignore - clients is available but may show TS error
  const existingContexts = await browser.runtime.getContexts({
    // @ts-ignore - ContextType might be missing OFFSCREEN_DOCUMENT in older types
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [browser.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)] 
  });
  return existingContexts.length > 0;
}

async function setupOffscreenDocument() {
  if (!(await hasOffscreenDocument())) {
    console.log('[Background] Creating offscreen document...');
    // @ts-ignore - browser.offscreen may not be in older types
    await browser.offscreen.createDocument({
      url: OFFSCREEN_DOCUMENT_PATH, 
      // Use a valid reason - LOCAL_STORAGE is common if not using others like AUDIO_PLAYBACK
      // @ts-ignore - browser.offscreen may not be in older types
      reasons: [browser.offscreen.Reason.LOCAL_STORAGE], 
      justification: 'Database operations using PGlite',
    });
     console.log('[Background] Offscreen document created.');
  } else {
     console.log('[Background] Offscreen document already exists.');
  }
}

// Setup offscreen document on background script startup
// MOVED the direct call from here to browser.runtime.onStartup listener below
// console.log('[Background] Temporarily skipped initial offscreen setup call for testing.');

// Define the structure of the data expected from the clipper popup
/*
interface ClipData {
  title: string;
  url: string;
  tags?: string[]; // Add optional tags array
}
*/

// Define the structure for Ollama API response
/*
interface OllamaTag {
  name: string;
  // other properties like modified_at, size, digest etc. are ignored for now
}

interface OllamaTagsResponse {
  models: OllamaTag[];
}
*/

// defineBackground is globally available here thanks to WXT
export default defineBackground(() => {
  console.log('WXT Background defined');

  // --- Setup the central message listener --- 
  // This allows `onMessage` calls below to work.
  // setupCentralListener();

  // --- Listener for clipping requests from popup ---
  onMessage('clipPage', async (message) => {
    console.log('Background: Received clipPage message', message.data);
    const { title, url /*, tags */ } = message.data; // Destructure imported ClipData

    const sql = `INSERT INTO clips (title, url) VALUES (?, ?);`;
    const params = [title, url]; 

    console.log('Background: Sending dbExec message to offscreen for clipping...');
    try {
      // Use the NEW dbExec message type
      const dbResult = await sendMessage('dbExec', { sql: sql, params: params });
      console.log('Background: Offscreen dbExec response:', dbResult);
      
      // Notify success (no need to check status in response, error would throw)
      console.log(`Background: Successfully clipped ${url}`);
      browser.notifications.create(`clip-success-${Date.now()}`, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('/icon/128.png'), 
        title: 'Bookmark Saved',
        message: `Saved: ${title}`,
        priority: 0
      });

    } catch (error) {
      // Errors from sendMessage or the offscreen handler will be caught here
      console.error('Background: Error executing clip via offscreen:', error);
       browser.notifications.create(`clip-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Bookmark Saving Failed', 
          message: `Could not save ${title}. Error: ${error instanceof Error ? error.message : String(error)}`,
          priority: 1
        });
    }
  });

  // --- Listener to fetch Ollama models ---
  onMessage('getOllamaModels', async (message) => {
    console.log('Background: Received getOllamaModels message', message.data);
    const { endpoint } = message.data;
    if (!endpoint) {
      return { success: false, error: 'Ollama endpoint not provided.' };
    }

    try {
      const response = await fetch(`${endpoint}/api/tags`);
      if (!response.ok) {
        throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
      }
      // Assuming OllamaTagsResponse is defined elsewhere or implicitly typed
      const data = await response.json(); 
      const models = data.models.map((tag: { name: string }) => ({ id: tag.name, name: tag.name }));
      console.log('Background: Successfully fetched Ollama models:', models);
      return { success: true, models: models };
    } catch (error: any) { // Catch any type of error
      console.error('Background: Error fetching Ollama models:', error);
      return { success: false, error: error.message || 'Unknown error fetching models.' };
    }
  });

  // --- Listener for Chat Requests ---
  onMessage('ollamaChatRequest', async (message) => {
    console.log('Background: Received ollamaChatRequest', message.data);
    const { prompt, history } = message.data;

    // Load config first
    const config = await loadUserConfig();
    if (!config) {
      console.error("Background: Cannot process chat request, user config not found.");
       sendMessage('ollamaResponse', {
         status: 'error',
         error: "LLM configuration not found. Please set it up in the settings."
       }).catch(e => console.error("Failed to send config error message:", e));
      throw new Error("LLM configuration not found.");
    }
 
    // Pass to the llmService to handle provider logic and streaming
    streamChatResponse({ prompt, history: history || [], config }); 
    console.log("Background: streamChatResponse initiated (streaming runs in background).");
    
    // Return success acknowledgement
    return { received: true };
  });

  // --- Listener for Chat History Requests ---

  // --- Add other background listeners here (e.g., alarms, other messages) ---

  // --- Listener for install/update events ---
  browser.runtime.onInstalled.addListener(async (details) => {
    console.log('Extension installed:', details);

    // Check if the reason for the event is the initial installation
    if (details.reason === 'install') {
      console.log('Performing first-time setup...');
      // Only need to ensure offscreen document exists. Schema is initialized within offscreen.ts.
      await setupOffscreenDocument().catch(error => {
        console.error('[Background] Initial setupOffscreenDocument failed on install:', error);
      });

      // Construct the URL for the onboarding page
      const url = browser.runtime.getURL('onboarding.html');

      // Open the onboarding page in a new tab
      await browser.tabs.create({
        url: url,
        active: true,
      });

      console.log(`Opened onboarding page: ${url}`);
    } else if (details.reason === 'update') {
      // Optional: Handle updates, e.g., show notifications or migrate data
      console.log(`[Background] Updated from ${details.previousVersion} to ${browser.runtime.getManifest().version}`);
      // Uncomment to open settings on update:
      // try {
      //   await browser.runtime.openOptionsPage();
      // } catch (error) {
      //  console.error('[Background] Error opening settings page on update:', error);
      // }
    }
  });

  // --- Listener for browser startup ---
  // Use onStartup to ensure the offscreen document is ready when the browser starts
  browser.runtime.onStartup.addListener(async () => {
    console.log('[Background] Browser startup detected. Setting up offscreen document...');
    try {
      await setupOffscreenDocument();
      console.log('[Background] Offscreen document setup complete on startup.');
    } catch (error) {
      console.error('[Background] setupOffscreenDocument failed on startup:', error);
    }
  });

  console.log('Background script setup complete.');
}); 