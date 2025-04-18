import browser from 'webextension-polyfill';
import { onMessage, sendMessage } from '../utils/messaging';
import { loadUserConfig, streamChatResponse, generateFlashcardContentFromText, translateText } from '../src/services/llmService';
import { createFlashcard, createChatMessage } from '../utils/db';
import { defineBackground } from 'wxt/utils/define-background';

console.log('Background script loaded.');

// --- Offscreen Document Management ---
const OFFSCREEN_DOCUMENT_PATH = 'offscreen/index.html'; // Path to your offscreen document HTML

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

// defineBackground is globally available here thanks to WXT
console.log('Background script setup starting...');

// --- Start Background Logic (Wrapped in defineBackground) ---
export default defineBackground(() => {
  console.log('WXT Background defined (using wxt/utils/define-background)');

  // --- Listener for clipping requests from popup ---
  onMessage('clipPage', async (message) => {
    console.log('Background: Received clipPage message', message.data);
    if (!message.data) {
      console.error("Background: clipPage message received without data.");
      return;
    }
    const { title, url } = message.data;

    const sql = `INSERT INTO clips (title, url) VALUES (?, ?);`;
    const params = [title, url];

    console.log('Background: Sending dbExec message to offscreen for clipping...');
    try {
      const dbResult = await sendMessage('dbExec', { sql: sql, params: params });
      console.log('Background: Offscreen dbExec response:', dbResult);

      console.log(`Background: Successfully clipped ${url}`);
      browser.notifications.create(`clip-success-${Date.now()}`, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('/icon/128.png'),
        title: 'Bookmark Saved',
        message: `Saved: ${title}`,
        priority: 0
      });
    } catch (error: any) {
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
    console.log('[Background] Received getOllamaModels message', message.data);
    if (!message.data || !message.data.endpoint) {
      console.error("[Background] getOllamaModels message missing endpoint.");
      sendMessage('getOllamaModelsResult', { endpoint: undefined, success: false, error: 'No endpoint received' })
          .catch((e: any) => console.error('[Background] Failed to send error:', e));
      return;
    }
    const { endpoint } = message.data;
    const responseTarget = 'getOllamaModelsResult';

    const fetchUrl = `${endpoint}/api/tags`;
    console.log(`[Background] Attempting to fetch models from: ${fetchUrl}`);
    try {
      const fetchOptions = { method: 'GET', headers: { 'Accept': 'application/json' } };
      const response = await fetch(fetchUrl, fetchOptions);
      
      if (!response.ok) {
         let errorBody = '[Could not read error body]';
         try { errorBody = await response.text(); } catch {}
         console.error(`[Background] Fetch failed: Status ${response.status}. Body:`, errorBody);
         throw new Error(`Failed to fetch Ollama models: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json(); 
      const models = Array.isArray(responseData?.models) ? responseData.models.map((tag: { name: string }) => ({ id: tag.name, name: tag.name })) : [];
      console.log('[Background] Successfully fetched Ollama models:', models);
      sendMessage(responseTarget, { endpoint, success: true, models: models })
        .catch((e: any) => console.error(`[Background] Failed to send ${responseTarget} success:`, e));

    } catch (error: any) {
      console.error('[Background] Error during fetch operation:', error);
      let errorMessage = (error instanceof Error) ? error.message : 'Unknown error fetching models.';
      if (errorMessage.includes('Failed to fetch')) {
        errorMessage += ". Ensure Ollama is running and reachable, and check extension host permissions.";
      }
      sendMessage(responseTarget, { endpoint, success: false, error: errorMessage })
        .catch((e: any) => console.error(`[Background] Failed to send ${responseTarget} error:`, e));
    }
  });

  // --- Listener for Chat Requests ---
  onMessage('ollamaChatRequest', async (message) => {
    console.log('Background: Received ollamaChatRequest', message.data);
    if (!message.data || !message.data.prompt) {
      console.error("Background: ollamaChatRequest message missing prompt.");
      return;
    }
    const { prompt, history } = message.data;

    const config = await loadUserConfig();
    if (!config) {
      console.error("Background: Cannot process chat request, user config not found.");
      sendMessage('ollamaResponse', {
        model: 'unknown',
        created_at: new Date().toISOString(),
        status: 'error',
        error: "LLM configuration not found. Please set it up in the settings."
      }).catch((e: any) => console.error("Failed to send config error message:", e));
      return;
    }

    try {
      await streamChatResponse({ prompt, history: history || [], config });
      console.log("Background: streamChatResponse processing initiated.");
    } catch (streamError: any) {
      console.error("[Background] Error invoking streamChatResponse:", streamError);
      sendMessage('ollamaResponse', {
        model: config.chatModel || 'unknown',
        created_at: new Date().toISOString(),
        status: 'error',
        error: streamError instanceof Error ? streamError.message : "Error during streaming"
      }).catch((e: any) => console.error("Failed to send stream error message:", e));
    }
  });

  // --- Listener for Flashcard Content Generation ---
  onMessage('generateFlashcardContent', async (message) => {
    console.log('[Background] Received generateFlashcardContent message', message.data);
    const responseTarget = 'flashcardGenerationResult';
    if (!message.data || !message.data.text) { 
      console.error('[Background] No text provided for flashcard generation.');
      sendMessage(responseTarget, { data: null, error: 'No text provided' })
        .catch((e: any) => console.error("Failed to send error result:", e));
      return;
    }
    const { text } = message.data;

    try {
      const result = await generateFlashcardContentFromText(text);
      console.log('[Background] Received result from llmService:', result);

      await new Promise(resolve => setTimeout(resolve, 50));
      console.log('[Background] Attempting to send flashcard result after delay...');

      sendMessage(responseTarget, { data: result, error: undefined })
        .catch((e: any) => console.error("Failed to send flashcard result:", e));
    } catch (error: any) {
      console.error('[Background] Error during flashcard generation:', error);
      sendMessage(responseTarget, { data: null, error: error.message || 'Unknown error during generation' })
        .catch((e: any) => console.error("Failed to send error result:", e));
    }
  });

  // --- Listener for Chat History Requests ---
  // ... (placeholder)

  // +++ NEW LISTENER for getPageInfo +++
  onMessage('getPageInfo', async () => {
    console.log('[Background] Received getPageInfo request.');
    try {
      const tabs = await browser.tabs.query({ active: true, currentWindow: true });
      const currentTab = tabs[0];
      if (currentTab && currentTab.url && currentTab.title) {
        console.log("[Background] Sending page info:", { title: currentTab.title, url: currentTab.url });
        return { title: currentTab.title, url: currentTab.url };
      } else {
        console.warn("[Background] Could not get active tab info.");
        return null;
      }
    } catch (error: any) {
      console.error("[Background] Error getting page info:", error);
      return null;
    }
  });

  // --- Listener for getSelectedText ---
  onMessage('getSelectedText', async () => {
    console.log('[Background] Received getSelectedText request (from UI).');
    try {
      const tabs = await browser.tabs.query({ active: true, currentWindow: true });
      const currentTab = tabs[0];
      if (!currentTab || !currentTab.id) {
        console.warn("[Background] Could not get active tab ID for script injection.");
        return null;
      }
      const tabId = currentTab.id;

      let needsInjection = true;
      try {
         // Ping check remains the same
         const response = await browser.tabs.sendMessage(tabId, { type: 'ping' }); 
         if (response && (response as any).pong) {
            needsInjection = false;
         }
      } catch (e: any) {
         console.log("[Background] Ping failed: Content script likely not injected or inaccessible.");
      }

      if (needsInjection) {
        console.log(`[Background] Injecting content script into tab ${tabId}...`);
        try {
            await browser.scripting.executeScript({
                target: { tabId: tabId }, // Use tabId variable
                files: ['content-scripts/content.js'],
            });
            console.log(`[Background] Content script injected.`);
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (injectionError: any) {
            console.error(`[Background] Failed to inject content script into tab ${tabId}:`, injectionError);
            return null;
        }
      }

      // Use the typed sendMessage to communicate with the content script
      console.log(`[Background] Sending _requestSelectionFromContentScript message to tab ${tabId}...`);
      // Pass undefined as data (since request is void) and specify tabId
      const selection = await sendMessage('_requestSelectionFromContentScript', undefined, { tabId }); 
      console.log("[Background] Received selection from content script via sendMessage:", selection);
      // selection structure is { text: string } | null from ProtocolMap
      return selection && typeof selection.text === 'string' ? { text: selection.text } : null;

    } catch (error: any) {
      console.error("[Background] Error in getSelectedText handler:", error);
       if (error.message?.includes("Could not establish connection")) {
         console.warn("[Background] Connection error likely means the content script wasn't ready or page is restricted.");
       } else if (error.message?.includes("No matching message handler")) {
         console.warn("[Background] 'No matching message handler' likely means the content script is not injected or listening correctly for _requestSelectionFromContentScript.");
       } else if (error.message?.includes("[messaging]")) { // Catch potential messaging format errors
         console.warn("[Background] Messaging format error during getSelectedText. Check ProtocolMap and listeners.", error);
       }
      return null;
    }
  });

  // +++ NEW LISTENER for translateText +++
  onMessage('translateText', async (message) => {
    console.log("[Background] Received translateText request", message.data);
    if (!message.data || !message.data.text || !message.data.targetLang) {
        console.error("Background: Missing text or target language for translation.");
        throw new Error("Missing text or target language for translation.");
    }
    const { text, targetLang } = message.data;
    try {
        const translated = await translateText(text, targetLang);
        if (translated === null) {
            console.error("[Background] Translation service returned null.");
            throw new Error("Translation failed or returned null.");
        }
        console.log("[Background] Translation successful:", translated);
        return translated;
    } catch (error: any) {
        console.error("[Background] Translation error:", error);
        throw new Error(error.message || "Translation failed");
    }
  });

  // +++ NEW LISTENER for saveFlashcardAndNotify +++
  onMessage('saveFlashcardAndNotify', async (message) => {
    console.log('[Background] Received saveFlashcardAndNotify request:', message.data);
    if (!message.data || !message.data.cardData) {
        console.error("Background: saveFlashcardAndNotify message received without cardData.");
        browser.notifications.create(`flashcard-save-error-${Date.now()}`, {
            type: 'basic',
            iconUrl: browser.runtime.getURL('/icon/128.png'),
            title: 'Flashcard Save Failed',
            message: `Error: Missing flashcard data.`,
            priority: 1
        });
        return null;
    }
    const { cardData } = message.data;

    try {
      const newFlashcard = await createFlashcard(cardData as any);
      console.log('[Background] Flashcard created in DB:', newFlashcard);

      await createChatMessage({ role: 'flashcard', flashcard_id: newFlashcard.id });
      console.log(`[Background] Associated chat message created for flashcard ID: ${newFlashcard.id}`);

      browser.notifications.create(`flashcard-save-success-${Date.now()}`, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('/icon/128.png'),
        title: 'Flashcard Saved',
        message: `Saved: ${cardData.front || 'Cloze Card'}`,
        priority: 0
      });
      return newFlashcard;

    } catch (error: any) {
      console.error('[Background] Error saving flashcard or creating chat message:', error);
      browser.notifications.create(`flashcard-save-error-${Date.now()}`, {
        type: 'basic',
        iconUrl: browser.runtime.getURL('/icon/128.png'),
        title: 'Flashcard Save Failed',
        message: `Error: ${error.message || 'Unknown error'}`,
        priority: 1
      });
      return null;
    }
  });

  // --- Listener to save user configuration ---
  onMessage('saveConfiguration', async (message) => {
    console.log('[Background] Received saveConfiguration request...'); // Log data reception
    if (!message.data || !message.data.configJson) {
      console.error("[Background] saveConfiguration message received without configJson.");
      // The protocol map expects Promise<void>, so we throw an error on failure
      // instead of returning an object.
      throw new Error("No configuration JSON string received.");
    }
    try {
      // Parse the JSON string to get the config object
      const configObject = JSON.parse(message.data.configJson);
      console.log('[Background] Parsed configuration object:', configObject);

      // Save the parsed object under the userConfig key
      await browser.storage.local.set({ userConfig: configObject });
      console.log('[Background] User configuration saved successfully.');
      // Promise<void> resolves implicitly on successful completion
    } catch (error: any) {
      console.error('[Background] Error saving user configuration:', error);
      // Throw the error to signal failure, as the return type is Promise<void>
      throw new Error(error.message || 'Unknown error saving config');
    }
  });

  // --- Add other background listeners here (e.g., alarms, other messages) ---

  // --- Listener for install/update events ---
  browser.runtime.onInstalled.addListener(async (details) => {
    console.log('Extension installed:', details);

    // Check if the reason for the event is the initial installation
    if (details.reason === 'install') {
      console.log('Performing first-time setup...');
      // Only need to ensure offscreen document exists. Schema is initialized within offscreen.ts.
      await setupOffscreenDocument().catch((error: any) => {
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
    } catch (error: any) {
      console.error('[Background] setupOffscreenDocument failed on startup:', error);
    }
  });

  console.log('Background script setup complete.');
}); 