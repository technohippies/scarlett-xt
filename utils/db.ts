/// <reference types="webextension-polyfill" />
/// <reference types="chrome" /> 

import { Mutex } from 'async-mutex';
import browser from 'webextension-polyfill';
import { sendMessage } from './messaging'; // Import typed sendMessage

// Import the schema content as a raw string
import dbSchemaSql from './dbSchema.sql?raw'; // Ensure correct path

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
      console.log('[DB Util] Offscreen document already exists.');
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
      // Use a valid reason - DOM_PARSER is often sufficient if you don't need audio/etc.
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

// Export functions that mirror PGlite methods via messaging
export async function execDb(sql: string, params?: any[]): Promise<any> {
  await ensureOffscreenDocument();
  console.log('[DB Util] Sending dbExec message:', { sql, params });
  // Use the typed sendMessage with the specific protocol message
  return sendMessage('dbExec', { sql, params }); 
}

export async function queryDb(sql: string, params?: any[]): Promise<any> {
  await ensureOffscreenDocument();
  console.log('[DB Util] Sending dbQuery message:', { sql, params });
  // Use the typed sendMessage with the specific protocol message
  return sendMessage('dbQuery', { sql, params }); 
}

// --- Schema Initialization --- 
export async function initializeSchema() {
  console.log('[DB Util] Executing full schema initialization via offscreen...');
  try {
    // Use the refactored execDb function
    await execDb(dbSchemaSql); // No params needed for schema
    console.log('[DB Util] Schema initialization command sent successfully.');
  } catch (error) {
    console.error('[DB Util] Failed to send schema initialization command:', error);
    // Potentially retry or handle specific errors (e.g., DB already initialized)
    throw error; // Re-throw to indicate failure
  }
} 