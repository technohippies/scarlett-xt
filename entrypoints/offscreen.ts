/// <reference types="webextension-polyfill" />

// Removed explicit polyfill import, relying on global types + directive

import browser, { type Runtime } from 'webextension-polyfill'; // Needed for getURL
// Import the schema content as a raw string
import dbSchemaSql from '../utils/dbSchema.sql?raw'; // Use relative path
// Restore @webext-core/messaging imports
import { onMessage, type ProtocolMap, type DbExecRequest, type DbQueryRequest } from '../utils/messaging'; 

// Log immediately when the script starts executing
console.log('[Offscreen Script] Top-level execution start.'); 

// Assume defineUnlistedScript is globally available in this context
export default defineUnlistedScript(() => {
  console.log('[Offscreen Script] defineUnlistedScript callback executing.');

  // Use 'any' for PGlite types with dynamic import
  let db: any = null;
  let dbReadyPromise: Promise<any> | null = null;

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
        const pgliteModuleUrl = browser.runtime.getURL('electric-sql/index.js'); // Correct path for PGlite module import
        console.log(`[Offscreen initDb] Dynamically importing PGlite from ${pgliteModuleUrl}`);
        const pgliteModule = await import(/* @vite-ignore */ pgliteModuleUrl);
        const PGlite = (pgliteModule.PGlite || pgliteModule.default);
        if (!PGlite) throw new Error("PGlite class not found in dynamic import");
        console.log("[Offscreen initDb] Dynamically imported PGlite class.");
        const instance = new PGlite('idb://scarlett-wxt-db');
        console.log("[Offscreen initDb] PGlite instance created, awaiting ready...");
        await instance.ready;
        console.log('[Offscreen initDb] PGlite instance ready.');
        
        // --- Apply Schema Directly After Ready --- 
        console.log('[Offscreen initDb] Applying database schema...');
        await instance.exec(dbSchemaSql); // PGlite exec takes no params
        console.log('[Offscreen initDb] Database schema applied successfully.');
        // ------------------------------------------

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

  // --- Restore @webext-core/messaging listeners --- 
  console.log('[Offscreen Script] Setting up @webext-core/messaging listeners...');

  // Listener for dbExec messages
  onMessage('dbExec', async (message) => {
    console.log('[Offscreen onMessage(dbExec)] Received:', message);
    // Note: message.data should only contain { sql } as params are not supported by PGlite exec
    const { sql } = message.data as DbExecRequest; // Type assertion for clarity
    try {
      const dbInstance = await initDb();
      console.log(`[Offscreen onMessage(dbExec)] Executing SQL: ${sql}`);
      // PGlite exec might return { rowsModified: number } or void
      const result = await dbInstance.exec(sql); // Pass only SQL
      console.log('[Offscreen onMessage(dbExec)] Execution successful, result:', result);
      return result; // Return the result (or void)
    } catch (error: any) {
      console.error('[Offscreen onMessage(dbExec)] Error executing SQL:', error);
      // Re-throw the error so the messaging library sends it back
      throw new Error(`DB exec failed: ${error.message || String(error)}`); 
    }
  });
  console.log('[Offscreen Script] dbExec listener attached.');

  // Listener for dbQuery messages
  onMessage('dbQuery', async (message) => {
    console.log('[Offscreen onMessage(dbQuery)] Received:', message);
    const { sql, params } = message.data as DbQueryRequest; // Type assertion
    try {
      const dbInstance = await initDb();
      console.log(`[Offscreen onMessage(dbQuery)] Executing SQL: ${sql} with params:`, params);
      const result = await dbInstance.query(sql, params || []); // Pass SQL and params
      console.log('[Offscreen onMessage(dbQuery)] Execution successful, result:', result);
      return result; // Return the result (rows, etc.)
    } catch (error: any) {
      console.error('[Offscreen onMessage(dbQuery)] Error executing SQL:', error);
      // Re-throw the error
      throw new Error(`DB query failed: ${error.message || String(error)}`);
    }
  });
  console.log('[Offscreen Script] dbQuery listener attached.');


  // Optional: Kick off DB init proactively, or let the first message trigger it.
  initDb().catch(e => console.error("[Offscreen Script] Proactive initDb failed:", e)); 

  console.log('[Offscreen Script] Setup complete.');
}); 