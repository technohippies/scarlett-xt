import browser from 'webextension-polyfill';
import { onMessage, sendMessage, setupCentralListener } from '../lib/messaging';

console.log('Background script loaded.');

// --- Offscreen Document Management ---
const OFFSCREEN_DOCUMENT_PATH = '/offscreen.html'; // Path to your offscreen document HTML

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
interface ClipData {
  title: string;
  url: string;
  tags?: string[]; // Add optional tags array
}

// Define the structure for Ollama API response
interface OllamaTag {
  name: string;
  // other properties like modified_at, size, digest etc. are ignored for now
}

interface OllamaTagsResponse {
  models: OllamaTag[];
}

// defineBackground is globally available here thanks to WXT
export default defineBackground(() => {
  console.log('WXT Background defined');

  // --- Setup the central message listener --- 
  // This allows `onMessage` calls below to work.
  setupCentralListener();

  // --- Listener for clipping requests from popup ---
  onMessage<ClipData>('clipPage', async (message) => {
    console.log('Background: Received clipPage message', message.data);

    const { title, url, tags } = message.data; // Destructure tags

    if (!title || !url) {
      console.error('Background: Invalid clip data received.');
      return; // Or send an error response
    }

    // Ensure the offscreen document is running before attempting to send message
    try {
      await setupOffscreenDocument();
    } catch (error) {
      console.error('[Background] Failed to setup offscreen document:', error);
      browser.notifications.create(`clip-offscreen-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Clipping Error',
          message: `Failed to initialize the database service. Error: ${error instanceof Error ? error.message : String(error)}`,
          priority: 1
      });
      return; // Stop processing if offscreen setup failed
    }

    // Prepare SQL to insert into the clips table
    // Using ON CONFLICT DO NOTHING because the URL is unique
    // TODO: Update schema/insert if tags need to be saved
    const sql = `
      INSERT INTO clips (title, url)
      VALUES ($1, $2)
      ON CONFLICT (url) DO NOTHING;
    `;
    const params = [title, url]; // Tags are not currently saved

    console.log('Background: Sending exec command to offscreen for clipping...');
    try {
      // Send message to the offscreen document to execute the SQL
      const response = await sendMessage('exec', 
        {
           // Specify the target for the message (important if offscreen.ts checks it)
           // target: 'offscreen', // Removed as offscreen listener doesn't check
           sql: sql, 
           params: params 
        }
      );
      console.log('Background: Offscreen exec response:', response);
      
      // Optionally, notify the content script or update UI based on the response
      if (response?.status === 'success') {
        console.log(`Background: Successfully clipped ${url}`);
        // Maybe send a notification?
        browser.notifications.create(`clip-success-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'), // Ensure icon path is correct
          title: 'Bookmark Saved', // Updated title
          message: `Saved: ${title}`,
          priority: 0
        });
      } else {
         console.error('Background: Offscreen document failed to execute clip SQL:', response?.error);
         // Handle error - maybe notify user?
         browser.notifications.create(`clip-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Bookmark Saving Failed', // Updated title
          message: `Could not save ${title}. Error: ${response?.error || 'Unknown reason'}`,
          priority: 1
        });
      }

    } catch (error) {
      console.error('Background: Error sending message to offscreen document:', error);
       browser.notifications.create(`clip-comm-error-${Date.now()}`, {
          type: 'basic',
          iconUrl: browser.runtime.getURL('/icon/128.png'),
          title: 'Bookmark Saving Error', // Updated title
          message: `Failed to communicate with the database service. Is the offscreen document running?`,
          priority: 1
        });
    }
  });

  // --- Listener to fetch Ollama models ---
  onMessage<{ endpoint: string }, { success: boolean; models?: {id: string, name: string}[]; error?: string }>(
    'getOllamaModels',
    async (message) => {
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
        const data: OllamaTagsResponse = await response.json();
        // Transform the response into the Model[] format
        const models = data.models.map(tag => ({ id: tag.name, name: tag.name }));
        console.log('Background: Successfully fetched Ollama models:', models);
        return { success: true, models: models };
      } catch (error: any) { // Catch any type of error
        console.error('Background: Error fetching Ollama models:', error);
        return { success: false, error: error.message || 'Unknown error fetching models.' };
      }
    }
  );

  // --- Add other background listeners here (e.g., alarms, other messages) ---

  // --- Listener for install/update events ---
  browser.runtime.onInstalled.addListener(async (details) => {
    console.log('Extension installed:', details);

    // Check if the reason for the event is the initial installation
    if (details.reason === 'install') {
      console.log('Performing first-time setup...');
      // Initialize offscreen document on first install as well
      setupOffscreenDocument().catch(error => {
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