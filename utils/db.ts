/// <reference types="webextension-polyfill" />
/// <reference types="chrome" /> 

import { Mutex } from 'async-mutex';
import browser from 'webextension-polyfill';
import { sendMessage } from './messaging'; 

const OFFSCREEN_DOCUMENT_PATH = 'offscreen.html';
let creatingPromise: Promise<void> | null = null;
const creationMutex = new Mutex();

// Function to check if the offscreen document exists and create it if not
async function ensureOffscreenDocument() {
  // Use a mutex to prevent multiple concurrent creation attempts
  const release = await creationMutex.acquire();
  try {
    // Check if the document already exists.
     const existingContexts = await browser.runtime.getContexts({
        // @ts-ignore - ContextType might be missing OFFSCREEN_DOCUMENT in older types
        contextTypes: ['OFFSCREEN_DOCUMENT' as browser.Runtime.ContextType],
        documentUrls: [browser.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)],
      });

    if (existingContexts.length > 0) {
      // console.log('[DB Util] Offscreen document already exists.'); // Less verbose
      return; // Already exists, we're good.
    }

    // If creation is already in progress, wait for it to complete.
    if (creatingPromise) {
      console.log('[DB Util] Waiting for existing offscreen document creation...');
      await creatingPromise;
      return;
    }

    console.log('[DB Util] Creating offscreen document...');
    creatingPromise = chrome.offscreen.createDocument({ // Use native chrome API
      url: OFFSCREEN_DOCUMENT_PATH,
      reasons: ['DOM_PARSER' as chrome.offscreen.Reason], 
      justification: 'Provides PGlite database operations.',
    });

    try {
      await creatingPromise;
      console.log('[DB Util] Offscreen document created successfully.');
    } catch (error: any) {
      console.error('[DB Util] Error creating offscreen document:', error);
      // Double-check if it exists now, maybe creation succeeded despite error?
      const contextsAfterError = await browser.runtime.getContexts({
         // @ts-ignore
         contextTypes: ['OFFSCREEN_DOCUMENT' as browser.Runtime.ContextType],
         documentUrls: [browser.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)],
       });
       if (contextsAfterError.length === 0) {
         // Only throw if it truly failed and doesn't exist
         throw new Error(`Offscreen document creation failed: ${error.message}`);
       }
        console.warn('[DB Util] Offscreen document existed despite creation error/race condition.');
    } finally {
      // Reset the promise whether it succeeded or failed
      creatingPromise = null; 
    }
  } finally {
    // Release the mutex
    release();
  }
}

// Export functions that mirror PGlite methods via @webext-core/messaging
export async function execDb(sql: string): Promise<any> {
  await ensureOffscreenDocument();
  // console.log('[DB Util] Sending dbExec message:', { sql }); // Less verbose
  // PGlite exec doesn't support params, so we only send sql
  return sendMessage('dbExec', { sql }); 
}

export async function queryDb(sql: string, params?: any[]): Promise<any> {
  await ensureOffscreenDocument();
  // console.log('[DB Util] Sending dbQuery message:', { sql, params }); // Less verbose
  return sendMessage('dbQuery', { sql, params: params || [] }); 
}

// Schema is initialized directly in offscreen.ts
// export async function initializeSchema() { ... } 