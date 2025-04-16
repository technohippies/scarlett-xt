/// <reference types="webextension-polyfill" />

// Removed explicit polyfill import, relying on global types + directive

import browser, { type Runtime } from 'webextension-polyfill'; // Needed for getURL, explicitly import Runtime type
// import { pipeline, PipelineType, Pipeline, ProgressCallback } from '@huggingface/transformers'; // Import pipeline and ProgressCallback
// Import the schema content as a raw string
import dbSchemaSql from '../utils/dbSchema.sql?raw'; // Use relative path

// Log immediately when the script starts executing
console.log('[Offscreen Script] Top-level execution start.'); 

// Assume defineUnlistedScript is globally available in this context
export default defineUnlistedScript(() => {
  console.log('[Offscreen Script] defineUnlistedScript callback executing.');

  // Use 'any' for PGlite types with dynamic import
  let db: any = null;
  let dbReadyPromise: Promise<any> | null = null;
  // let vectorExtension: any = null; // To store the loaded vector extension

  // --- Remove Transformers.js Setup --- 
  // class EmbeddingPipelineSingleton { ... } // Removed
  // ---------------------------

  async function initDb() {
    // Add logging at the start of initDb
    console.log('[Offscreen initDb] Called.'); 
    if (db) {
      console.log('[Offscreen initDb] DB instance already exists.');
      return db;
    }
    if (dbReadyPromise) {
      console.log('[Offscreen initDb] Waiting for existing DB ready promise.');
      return await dbReadyPromise;
    }

    console.log('[Offscreen initDb] Initializing PGlite...');
    dbReadyPromise = (async () => {
      try {
        const pgliteModuleUrl = browser.runtime.getURL('/electric-sql/index.js');
        console.log(`[Offscreen initDb] Dynamically importing PGlite from ${pgliteModuleUrl}`);
        const pgliteModule = await import(/* @vite-ignore */ pgliteModuleUrl);
        const PGlite = (pgliteModule.PGlite || pgliteModule.default);
        if (!PGlite) throw new Error("PGlite class not found");
        console.log("[Offscreen initDb] Dynamically imported PGlite class.");

        const instance = new PGlite('idb://scarlett-wxt-db');
        console.log("[Offscreen initDb] PGlite instance created, awaiting ready...");
        await instance.ready;
        console.log('[Offscreen initDb] PGlite instance ready.');

        console.log('[Offscreen initDb] Applying database schema...');
        await instance.exec(dbSchemaSql);
        console.log('[Offscreen initDb] Database schema applied successfully.');
        
        db = instance;
        console.log('[Offscreen initDb] Initialization complete.');
        return db;
      } catch (error) {
        console.error('[Offscreen initDb] PGlite initialization or schema application failed:', error);
        dbReadyPromise = null; 
        throw error;
      }
    })();
    return await dbReadyPromise;
  }

  // Use NATIVE chrome.runtime.onMessage listener here
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Log immediately upon receiving any message via the native listener
    console.log('[Offscreen Native Listener] Message received (inside addListener):', message);

    // REMOVED target check - Assume messages arriving here are intended for offscreen
    // console.log('[Offscreen Native Listener] Checking message target:', message?.target);
    // if (message.target !== 'offscreen') {
    //   console.log('[Offscreen Native Listener] Message target is NOT \'offscreen\', returning false.');
    //   return false; 
    // }

    // Log that we are processing (since target check is removed)
    console.log('[Offscreen Native Listener] Processing message...');

    if (message.type === 'exec' || message.type === 'query') {
      console.log(`[Offscreen Native Listener] Handling type: ${message.type}`); 
      navigator.locks.request('pglite_db_lock', async (lock) => {
          console.log('[Offscreen Native Listener] Acquired DB lock');
          try {
              // Log before initializing DB
              console.log('[Offscreen Native Listener] Calling initDb...');
              const dbInstance = await initDb();
              // Log after initializing DB
              console.log('[Offscreen Native Listener] initDb returned, proceeding with DB operation.');
              let result;
              if (message.type === 'exec') {
                  console.log(`[Offscreen Native Listener] Executing SQL: ${message.sql}`, message.params);
                  result = await dbInstance.exec(message.sql, message.params || []); 
              } else { // query
                  console.log(`[Offscreen Native Listener] Executing Query: ${message.sql}`, message.params);
                  result = await dbInstance.query(message.sql, message.params);
              }
              // Log before sending response
              console.log('[Offscreen Native Listener] DB operation successful, sending success response.', {data: result});
              sendResponse({ status: 'success', data: result });
          } catch (error: any) {
              // Log before sending error response
              console.error('[Offscreen Native Listener] DB operation failed, sending error response:', error);
              sendResponse({ status: 'error', error: error?.message || String(error) });
          } finally {
               console.log('[Offscreen Native Listener] Releasing DB lock');
          }
      }).catch(error => {
          console.error('[Offscreen Native Listener] Failed to acquire DB lock:', error);
          try {
              // Log before sending lock error response
              console.log('[Offscreen Native Listener] Sending lock acquisition error response.');
              sendResponse({ status: 'error', error: `Failed to acquire DB lock: ${error?.message || String(error)}` });
          } catch (sendError) {
              console.error('[Offscreen Native Listener] Failed to send lock acquisition error response:', sendError);
          }
      });
      
      return true; 
    } else {
      console.warn('[Offscreen Native Listener] Unknown message type received:', message.type);
      sendResponse({ status: 'error', error: 'Unknown message type' }); 
      return false;
    }
  });

  // Log after listener is attached
  console.log('[Offscreen Script] Native Message listener attached.');

  // Optional: Kick off DB init proactively, logging any errors.
  initDb().catch(e => console.error("[Offscreen Script] Proactive initDb failed:", e)); 
}); 