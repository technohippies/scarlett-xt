/// <reference types="webextension-polyfill" />

// Removed explicit polyfill import, relying on global types + directive

import browser, { type Runtime } from 'webextension-polyfill'; // Needed for getURL, explicitly import Runtime type
// import { pipeline, PipelineType, Pipeline, ProgressCallback } from '@huggingface/transformers'; // Import pipeline and ProgressCallback
// Import the schema content as a raw string
import dbSchemaSql from '~/utils/dbSchema.sql?raw'; 

// Assume defineUnlistedScript is globally available in this context
export default defineUnlistedScript(() => {
  console.log('Offscreen script executing.');

  // Use 'any' for PGlite types with dynamic import
  let db: any = null;
  let dbReadyPromise: Promise<any> | null = null;
  // let vectorExtension: any = null; // To store the loaded vector extension

  // --- Remove Transformers.js Setup --- 
  // class EmbeddingPipelineSingleton { ... } // Removed
  // ---------------------------

  async function initDb() {
    if (db) return db;
    if (dbReadyPromise) return await dbReadyPromise;

    console.log('Offscreen: Initializing PGlite from /electric-sql/ via dynamic import...');
    dbReadyPromise = (async () => {
      try {
        // Construct the full URL for the dynamic import
        const pgliteModuleUrl = browser.runtime.getURL('/electric-sql/index.js');
        console.log(`Offscreen: Dynamically importing PGlite from ${pgliteModuleUrl}`);

        // Dynamically import PGlite class using the full URL
        const pgliteModule = await import(/* @vite-ignore */ pgliteModuleUrl);
        const PGlite = (pgliteModule.PGlite || pgliteModule.default);
        if (!PGlite) {
           throw new Error("PGlite class not found in /electric-sql/index.js");
        }
        console.log("Dynamically imported PGlite class.");

        // Remove dynamic import for pgvector extension
        // const vectorModule = await import(/* @vite-ignore */ '/electric-sql/vector/index.js');
        // vectorExtension = (vectorModule.vector || vectorModule.default);
        // if (!vectorExtension) {
        //   throw new Error("pgvector extension not found in /electric-sql/vector/index.js");
        // }
        // console.log("Dynamically imported pgvector extension.");

        // Instantiate WITHOUT vector extension
        const instance = new PGlite('idb://scarlett-wxt-db');
        console.log("PGlite instance created, awaiting ready...");
        
        await instance.ready;
        console.log('Offscreen: PGlite instance ready.');

        // --- Apply Schema After Ready --- 
        console.log('Offscreen: Applying database schema...');
        await instance.exec(dbSchemaSql);
        console.log('Offscreen: Database schema applied successfully.');
        // ----------------------------------

        // +++ Add Test Insert/Select +++
        try {
          console.log('Offscreen: Executing test INSERT...');
          const insertResult = await instance.exec("INSERT INTO test_items (name) VALUES ('Test Item 1');");
          console.log('Offscreen: Test INSERT result:', insertResult);

          console.log('Offscreen: Executing test SELECT...');
          const selectResult = await instance.query('SELECT * FROM test_items;');
          console.log('Offscreen: Test SELECT result:', selectResult);
        } catch (testError) {
          console.error('Offscreen: Test INSERT/SELECT failed:', testError);
        }
        // +++ End Test Insert/Select +++

        db = instance;
        return db;
      } catch (error) {
        console.error('Offscreen: PGlite initialization or schema application failed:', error);
        dbReadyPromise = null;
        throw error;
      }
    })();
    return await dbReadyPromise;
  }

  // Listener for messages from other extension parts
  // @ts-ignore - Suppressing persistent type error with async listener
  browser.runtime.onMessage.addListener(
    (message: any, sender: Runtime.MessageSender, sendResponse: (response?: any) => void) => {
    console.log('Offscreen: Received message:', message);

    if (message.target !== 'offscreen') {
      // Not for us, ignore. Return undefined/false implicitly.
      return; 
    }

    // DB Operations: These are asynchronous due to initDb and locks.
    if (message.type === 'exec' || message.type === 'query') {
      // Need to handle the response asynchronously.
      navigator.locks.request('pglite_db_lock', async (lock) => {
          console.log('Offscreen: Acquired DB lock');
          try {
              const dbInstance = await initDb();
              let result;
              if (message.type === 'exec') {
                  console.log(`Offscreen: Executing SQL in lock: ${message.sql}`)
                  result = await dbInstance.exec(message.sql);
              } else { // query
                  console.log(`Offscreen: Executing Query in lock: ${message.sql}`)
                  result = await dbInstance.query(message.sql, message.params);
              }
              console.log('Offscreen: DB operation successful');
              sendResponse({ status: 'success', data: result });
          } catch (error: any) {
              console.error('Offscreen: DB operation failed:', error);
              // Send error response even if DB op failed within async flow
              sendResponse({ status: 'error', error: error?.message || String(error) });
          } finally {
               console.log('Offscreen: Releasing DB lock');
          }
      }).catch(error => {
          // This catch runs *after* the listener has already returned true.
          // We should still inform the sender about the lock failure.
          console.error('Offscreen: Failed to acquire DB lock:', error);
          // Attempt to send response, might fail if sender context is gone.
          try {
              sendResponse({ status: 'error', error: `Failed to acquire DB lock: ${error?.message || String(error)}` });
          } catch (sendError) {
              console.error('Offscreen: Failed to send lock acquisition error response:', sendError);
          }
      });
      
      // IMPORTANT: Return true immediately to indicate async response handling.
      return true; 
    } 
    // Removed Embedding Operation case
    // else if (message.type === 'getEmbedding') { ... } // Removed
    // Handle unknown message types synchronously
    else {
      console.warn('Offscreen: Unknown message type received:', message.type);
      sendResponse({ status: 'error', error: 'Unknown message type' }); 
      // Return false or undefined implicitly for synchronous handling.
      return false;
    }
  });

  console.log('Offscreen: Message listener attached.');

  // Optional: Initialize DB on load, or wait for first message
  // initDb().catch(e => console.error("Initial DB init failed", e)); 
}); 