/// <reference types="webextension-polyfill" />
/// <reference types="chrome" /> 

import { Mutex } from 'async-mutex';
import browser from 'webextension-polyfill';
import dbSchemaSql from './dbSchema.sql?raw';

const OFFSCREEN_DOCUMENT_PATH = '/offscreen.html';
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
      reasons: [chrome.offscreen.Reason.DOM_PARSER], 
      justification: 'Manages PGlite database instance.',
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

// Helper function to send a message *natively* to the offscreen document
async function sendMessageToOffscreen<T = any>(message: any): Promise<T> {
  // Ensure the document exists before sending the message.
  await ensureOffscreenDocument(); 
  console.log('[DB Util] Sending message natively to offscreen:', message);
  
  // Use native chrome.runtime.sendMessage for offscreen communication.
  const response: { status?: string; error?: string; data?: T } = 
    await chrome.runtime.sendMessage({ 
      target: 'offscreen', // Add target for the listener in offscreen.ts
      ...message,
    });

  console.log('[DB Util] Received response from offscreen:', response);
  if (response?.status === 'error') {
    throw new Error(`[DB Util] Offscreen operation failed: ${response.error || 'Unknown error'}`);
  }
  if (response?.status !== 'success') {
    // Handle cases where status might be missing or different
    throw new Error('[DB Util] Unknown or invalid response status from offscreen document.');
  }
  // Response is successful, return the data.
  return response.data as T; 
}

// Export functions that mirror PGlite methods via messaging
export async function execDb(sql: string, params?: any[]): Promise<any> { // Allow optional params for exec
  console.log('[DB Util] execDb called');
  return sendMessageToOffscreen({ type: 'exec', sql, params }); // Forward params if provided
}

export async function queryDb(sql: string, params: any[] = []): Promise<any> {
  console.log('[DB Util] queryDb called');
  return sendMessageToOffscreen({ type: 'query', sql, params });
}

// --- Schema Initialization --- 
export async function initializeSchema() {
  console.log('[DB Util] Executing full schema initialization via offscreen...');
  try {
    // Send the imported schema string to the offscreen document for execution
    await execDb(dbSchemaSql); 
    console.log('[DB Util] Schema initialization command sent successfully.');
  } catch (error) {
    console.error('[DB Util] Failed to send schema initialization command:', error);
    // Potentially retry or handle specific errors (e.g., DB already initialized)
    throw error; // Re-throw to indicate failure
  }
} 