import browser from 'webextension-polyfill';
import { onMessage, sendMessage, type ProtocolMap, OllamaStreamChunk } from '~/utils/messaging';
import { loadUserConfig, streamChatResponse, generateFlashcardContentFromText } from '../src/services/llmService'; // Use relative path for LLM service import

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
    const { title, url } = message.data; // Destructure imported ClipData

    const sql = `INSERT INTO clips (title, url) VALUES (?, ?);`;
    const params = [title, url];

    console.log('Background: Sending dbExec message to offscreen for clipping...');
    try {
      // Match the ProtocolMap definition: { data: DbExecRequest }
      const dbResult = await sendMessage('dbExec', { data: { sql: sql, params: params } });
      console.log('Background: Offscreen dbExec response:', dbResult);

      // Notify success
      console.log(`Background: Successfully clipped ${url}`);
      browser.notifications.create(`clip-success-${Date.now()}`, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('/icon/128.png'), 
        title: 'Bookmark Saved',
        message: `Saved: ${title}`,
        priority: 0
      });
    } catch (error) {
      console.error('Background: Error executing clip via offscreen:', error);
      browser.notifications.create(`clip-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Bookmark Saving Failed', 
          message: `Could not save ${title}. Error: ${error instanceof Error ? error.message : String(error)}`,
          priority: 1
        });
    }
    // Handler returns void implicitly
  });

  // --- Listener to fetch Ollama models ---
  onMessage('getOllamaModels', async (message) => {
    console.log('[Background] Received getOllamaModels message', message.data);
    const { endpoint } = message.data;
    const responseTarget = 'getOllamaModelsResult'; // Target for the response message

    if (!endpoint) {
      console.error('[Background] Error: Ollama endpoint not provided.');
      sendMessage(responseTarget, { success: false, error: 'Ollama endpoint not provided.' })
          .catch(e => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
      return;
    }

    const fetchUrl = `${endpoint}/api/tags`;
    console.log(`[Background] Attempting to fetch models from: ${fetchUrl}`);
    try {
      const fetchOptions = { method: 'GET', headers: { 'Accept': 'application/json' } };
      console.log('[Background] Fetch options:', fetchOptions);
      const response = await fetch(fetchUrl, fetchOptions);
      console.log(`[Background] Fetch response status: ${response.status}, OK: ${response.ok}`);

      if (!response.ok) {
        let errorBody = '[Could not read error body]';
        try { errorBody = await response.text(); } catch {}
        console.error(`[Background] Fetch failed: Status ${response.status}. Body:`, errorBody);
        throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json(); 
      // Ensure data.models exists and is an array before mapping
      const models = Array.isArray(data?.models) ? data.models.map((tag: { name: string }) => ({ id: tag.name, name: tag.name })) : [];
      console.log('[Background] Successfully fetched Ollama models:', models);
      sendMessage(responseTarget, { success: true, models: models })
        .catch(e => console.error(`[Background] Failed to send ${responseTarget} success:`, e));

    } catch (error: any) { 
      console.error('[Background] Error during fetch operation:', error);
      let errorMessage = (error instanceof Error) ? error.message : 'Unknown error fetching models.';
      // Add specific check for permission-like errors if possible (difficult without seeing the exact error)
      if (errorMessage.includes('Failed to fetch')) { // Generic fetch failure often indicates network/permission issues
          errorMessage += ". Ensure Ollama is running and reachable, and check extension host permissions.";
      }
      sendMessage(responseTarget, { success: false, error: errorMessage })
        .catch(e => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
    }
    // Handler returns void implicitly
  });

  // --- Listener for Chat Requests ---
  onMessage('ollamaChatRequest', async (message) => {
    console.log('Background: Received ollamaChatRequest', message.data);
    const { prompt, history } = message.data;

    const config = await loadUserConfig();
    if (!config) {
      console.error("Background: Cannot process chat request, user config not found.");
       sendMessage('ollamaResponse', {
         model: 'unknown',
         created_at: new Date().toISOString(),
         done: true,
         status: 'error',
         error: "LLM configuration not found. Please set it up in the settings."
       }).catch(e => console.error("Failed to send config error message:", e));
      return; // Handler returns void
    }
 
    try {
      // Assuming streamChatResponse handles sending chunks via sendMessage('ollamaResponse', ...)
      await streamChatResponse({ prompt, history: history || [], config }); 
      console.log("Background: streamChatResponse processing initiated.");
    } catch (streamError) {
        // streamChatResponse should ideally handle its own errors and send error chunks,
        // but we can log a fallback here.
        console.error("[Background] Error invoking streamChatResponse:", streamError);
        // Optionally send a final error chunk if streamChatResponse didn't
         sendMessage('ollamaResponse', {
           model: config.chatModel || 'unknown',
           created_at: new Date().toISOString(),
           done: true,
           status: 'error',
           error: streamError instanceof Error ? streamError.message : "Error during streaming"
         }).catch(e => console.error("Failed to send stream error message:", e));
    }
    // Handler returns void implicitly
  });

  // --- Listener for Flashcard Content Generation ---
  onMessage('generateFlashcardContent', async (message) => {
    console.log('[Background] Received generateFlashcardContent message', message.data);
    const { text } = message.data;
    const responseTarget = 'flashcardGenerationResult'; // Target for the response
    
    if (!text) {
      console.error('[Background] No text provided for flashcard generation.');
      sendMessage(responseTarget, null).catch(e => console.error("Failed to send null result:", e));
      return; // Handler returns void
    }

    try {
        const result = await generateFlashcardContentFromText(text);
        console.log('[Background] Received result from llmService:', result);
        sendMessage(responseTarget, result)
          .catch(e => console.error("Failed to send flashcard result:", e));
    } catch (error) {
        console.error('[Background] Error during flashcard generation:', error);
        sendMessage(responseTarget, null)
          .catch(e => console.error("Failed to send error result:", e));
    }
    // Handler returns void implicitly
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