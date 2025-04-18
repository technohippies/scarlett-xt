/// <reference types="webextension-polyfill" />
import browser from 'webextension-polyfill'; // Needed for getURL
// Import the schema content as a raw string
import dbSchemaSql from '../../utils/dbSchema.sql?raw'; // Use relative path
// Restore @webext-core/messaging imports
import { onMessage, type DbExecRequest, type DbQueryRequest } from '../../utils/messaging';
// Import PGlite directly
import { PGlite } from '@electric-sql/pglite'; 
// import { vector } from '@electric-sql/pglite/vector'; // Keep vector import commented out if not used

// Log immediately when the script starts executing
console.log('[Offscreen Script] Top-level execution start.');

// Offscreen script logic starts here
console.log('[Offscreen Script] Top-level script execution.'); 

let db: PGlite | null = null; // Use the imported type
let dbReadyPromise: Promise<PGlite> | null = null; // Use the imported type

async function initDb(): Promise<PGlite> { // Specify return type
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
      // Initialize PGlite using the static import
      // Ensure data directory is unique if multiple extensions use PGlite
      // Using 'idb://' prefix stores it in IndexedDB
      const instance = new PGlite('idb://scarlett-wxt-db'/*, { 
            // extensions: { vector } // Pass the imported extension if needed
        }*/);

      console.log("[Offscreen initDb] PGlite instance created (NO vector ext), awaiting ready...");
      await instance.ready;
      console.log('[Offscreen initDb] PGlite instance ready.');

      // --- Apply Schema Directly After Ready ---
      console.log('[Offscreen initDb] Applying database schema START...');
      try {
         // Check if tables already exist to prevent errors on re-initialization
        const tablesExistQuery = `
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' AND table_name = 'user_configuration'
          );
        `;
        const checkResult = await instance.query<{ exists: boolean }>(tablesExistQuery);
        
        if (checkResult && checkResult.rows && checkResult.rows[0]?.exists === false) {
          console.log('[Offscreen initDb] Tables do not exist. Applying schema...');
          await instance.exec(dbSchemaSql); // Apply the full schema
          console.log('[Offscreen initDb] Applying database schema SUCCESS.');
        } else if (checkResult && checkResult.rows && checkResult.rows[0]?.exists === true) {
           console.log('[Offscreen initDb] Tables already exist. Skipping schema application.');
        } else {
           console.warn('[Offscreen initDb] Could not determine if tables exist. Attempting to apply schema anyway.');
           // Attempt applying schema but be aware it might fail if tables exist
           try {
             await instance.exec(dbSchemaSql); 
             console.log('[Offscreen initDb] Schema application attempted (may have failed if tables existed).');
           } catch (applyError: any) {
              if (applyError.message?.includes("already exists")) {
                 console.log('[Offscreen initDb] Schema application failed as expected (tables already exist).');
              } else {
                 throw applyError; // Re-throw unexpected schema errors
              }
           }
        }
      } catch (schemaError) {
        console.error('[Offscreen initDb] Error during schema check/application:', schemaError);
        // Re-throw or handle as appropriate, maybe prevent db assignment
        throw schemaError;
      }
      // ------------------------------------------

      db = instance;
      console.log('[Offscreen initDb] Initialization complete.');
      return db;
    } catch (error) {
      console.error('[Offscreen initDb] PGlite initialization or schema application failed:', error);
      dbReadyPromise = null; // Reset promise on failure
      db = null; // Reset db instance on failure
      throw error; // Propagate the error
    }
  })();
  return await dbReadyPromise;
}

// --- Restore @webext-core/messaging listeners ---
console.log('[Offscreen Script] Setting up @webext-core/messaging listeners...');

// Listener for dbExec messages
onMessage('dbExec', async (message) => {
  console.log('[Offscreen onMessage(dbExec)] Received:', message);
  // PGlite exec can take parameters, but often used for schema or simple statements
  // Let's assume params *could* be passed, though DbExecRequest might not define them
  // Correction: PGlite exec does NOT take params array. Only sql string.
  const { sql } = message.data as DbExecRequest; // Extract only sql
  try {
    const dbInstance = await initDb();
    console.log(`[Offscreen onMessage(dbExec)] Executing SQL: ${sql}`);
    // Call exec with only the SQL string
    const result = await dbInstance.exec(sql); 
    console.log('[Offscreen onMessage(dbExec)] Execution successful, result:', result);
    // exec might return rowsModified or void, return the result directly
    return result; 
  } catch (error: any) {
    console.error('[Offscreen onMessage(dbExec)] Error executing SQL:', error);
    throw new Error(`DB exec failed: ${error.message || String(error)}`);
  }
});
console.log('[Offscreen Script] dbExec listener attached.');

// Listener for dbQuery messages
onMessage('dbQuery', async (message): Promise<any[]> => { // Explicitly type return
  console.log('[Offscreen onMessage(dbQuery)] Received:', message);
  const { sql, params } = message.data as DbQueryRequest; 
  let dbInstance;
  try {
    dbInstance = await initDb();
    console.log('[Offscreen onMessage(dbQuery)] DB initialized.');
    console.log('[Offscreen onMessage(dbQuery)] Executing SQL:', sql);
    console.log('[Offscreen onMessage(dbQuery)] With PARAMS:', params ? JSON.stringify(params) : '[]');

    const result = await dbInstance.query(sql, params || []); 
    console.log('[Offscreen onMessage(dbQuery)] SQL execution successful, result rows:', result?.rows?.length);
    // Return only the rows array to match ProtocolMap signature
    return result.rows; 
  } catch (error: any) {
    console.error('[Offscreen onMessage(dbQuery)] Error executing SQL:', error);
    // Log the specific query that failed
    console.error(`[Offscreen onMessage(dbQuery)] Failed SQL: ${sql}`);
    console.error(`[Offscreen onMessage(dbQuery)] Failed PARAMS: ${JSON.stringify(params)}`);
    throw new Error(`DB query failed: ${error.message || String(error)}`);
  }
});
console.log('[Offscreen Script] dbQuery listener attached.');


// Kick off DB init proactively when the script loads.
// Handle potential errors here so they don't crash the script top-level.
initDb().catch(e => console.error("[Offscreen Script] Proactive initDb() failed:", e));

console.log('[Offscreen Script] Setup complete.'); 