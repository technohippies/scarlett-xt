/// <reference types="webextension-polyfill" />
/// <reference types="chrome" /> 

import { Mutex } from 'async-mutex';
import browser from 'webextension-polyfill';
import { sendMessage } from './messaging'; 
import { State, createEmptyCard, Card as FSRSCard } from 'ts-fsrs';
import { Bookmark, Flashcard, ChatMessageDb, ChatHistoryItem } from '../src/types/db'; // Import DB types

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

// --- Database Interaction Functions ---

/**
 * Saves a bookmark to the database.
 * 
 * @param bookmarkData Partial bookmark data (url is required)
 * @returns The created Bookmark object with its ID
 */
export async function createBookmark(bookmarkData: Pick<Bookmark, 'url'> & Partial<Omit<Bookmark, 'id' | 'saved_at'> >): Promise<Bookmark> {
    const sql = `
        INSERT INTO bookmarks (url, title, tags, embedding)
        VALUES ($1, $2, $3, $4)
        RETURNING id, url, title, saved_at, tags, embedding;
    `;
    // Embedding should now be string | null
    const params = [
        bookmarkData.url,
        bookmarkData.title ?? null,
        bookmarkData.tags ?? null,
        bookmarkData.embedding ?? null 
    ];
    const result = await queryDb(sql, params);
    if (!result?.rows?.[0]) throw new Error("Failed to create bookmark");
    return result.rows[0] as Bookmark;
}

/**
 * Saves a flashcard to the database, initializing FSRS state.
 * 
 * @param flashcardData Data for the new flashcard (excluding FSRS state and id/created_at)
 * @param now The current date/time for initializing FSRS state
 * @returns The created Flashcard object with its ID and initial FSRS state
 */
export async function createFlashcard(flashcardData: Omit<Flashcard, 'id' | 'created_at' | keyof FSRSCard | 'due' | 'state' | 'last_review'>, now: Date = new Date()): Promise<Flashcard> {
    // Get initial FSRS state using ts-fsrs
    const initialCardState = createEmptyCard(now);
    // Get the string representation of the state enum
    const stateString = State[initialCardState.state]; 

    const sql = `
        INSERT INTO flashcards (
            type, front, back, cloze_text, source_url, source_highlight, 
            source_language, target_language, context, tags, 
            due, stability, difficulty, elapsed_days, scheduled_days, 
            reps, lapses, state, last_review
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        RETURNING *; 
    `;
    
    const params = [
        flashcardData.type,
        flashcardData.front ?? null,
        flashcardData.back ?? null,
        flashcardData.cloze_text ?? null,
        flashcardData.source_url ?? null,
        flashcardData.source_highlight ?? null,
        flashcardData.source_language ?? null,
        flashcardData.target_language ?? null,
        flashcardData.context ?? null,
        flashcardData.tags ?? null,
        // FSRS initial state:
        initialCardState.due.toISOString(), // Store as ISO string
        initialCardState.stability,
        initialCardState.difficulty,
        initialCardState.elapsed_days,
        initialCardState.scheduled_days,
        initialCardState.reps,
        initialCardState.lapses,
        stateString, // Use the string representation of the state
        initialCardState.last_review?.toISOString() ?? null // Store as ISO string or null
    ];

    const result = await queryDb(sql, params);
    if (!result?.rows?.[0]) throw new Error("Failed to create flashcard");
    // Ensure the returned state is correctly typed if needed elsewhere immediately,
    // although reading from DB later should yield the string.
    const savedFlashcard = result.rows[0] as Flashcard;
    // PGlite might return the numeric enum value if the column type affinity is integer,
    // but since it's TEXT, it should return the string we inserted.
    // If issues arise, manually cast here: savedFlashcard.state = State[savedFlashcard.state as number] as unknown as State;
    return savedFlashcard;
}

/**
 * Saves a chat message to the database.
 * 
 * @param messageData The chat message data
 * @returns The created ChatMessageDb object with its ID and timestamp
 */
export async function createChatMessage(messageData: Omit<ChatMessageDb, 'id' | 'timestamp'>): Promise<ChatMessageDb> {
    const sql = `
        INSERT INTO chat_messages (role, content, bookmark_id, flashcard_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const params = [
        messageData.role,
        messageData.content ?? null,
        messageData.bookmark_id ?? null,
        messageData.flashcard_id ?? null
    ];
    const result = await queryDb(sql, params);
    if (!result?.rows?.[0]) throw new Error("Failed to create chat message");
    return result.rows[0] as ChatMessageDb;
}

/**
 * Retrieves the chat history, joining bookmarks and flashcards.
 * 
 * @param limit Maximum number of messages to retrieve (optional)
 * @returns An array of ChatHistoryItem objects
 */
export async function getChatHistory(limit?: number): Promise<ChatHistoryItem[]> {
    // Construct the query to fetch messages and join related data
    const sql = `
        SELECT 
            m.*, 
            b.id as bookmark_id_joined, b.url as bookmark_url, b.title as bookmark_title, b.saved_at as bookmark_saved_at, b.tags as bookmark_tags, b.embedding as bookmark_embedding, 
            f.id as flashcard_id_joined, f.* -- Select all flashcard fields
        FROM chat_messages m
        LEFT JOIN bookmarks b ON m.bookmark_id = b.id
        LEFT JOIN flashcards f ON m.flashcard_id = f.id
        ORDER BY m.timestamp DESC
        ${limit ? 'LIMIT ?' : ''}
    `;
    const params = limit ? [limit] : [];
    const result = await queryDb(sql, params);

    if (!result?.rows) return [];

    // Map the raw rows to the ChatHistoryItem union type
    return result.rows.map((row: any): ChatHistoryItem => {
        const message: ChatMessageDb = {
            id: row.id,
            role: row.role,
            content: row.content,
            bookmark_id: row.bookmark_id,
            flashcard_id: row.flashcard_id,
            timestamp: row.timestamp,
        };

        if (row.role === 'bookmark' && row.bookmark_id_joined) {
            const bookmark: Bookmark = {
                id: row.bookmark_id_joined,
                url: row.bookmark_url,
                title: row.bookmark_title,
                saved_at: row.bookmark_saved_at,
                tags: row.bookmark_tags,
                embedding: row.bookmark_embedding, // Again, assuming blob handling
            };
            return { type: 'bookmark', message, bookmark };
        } else if (row.role === 'flashcard' && row.flashcard_id_joined) {
             // Map all flashcard fields from the row (prefix f.)
             const flashcard: Flashcard = {
                 id: row.id_1, // Adjust alias based on pglite output if needed
                 type: row.type,
                 front: row.front,
                 back: row.back,
                 cloze_text: row.cloze_text,
                 source_url: row.source_url,
                 source_highlight: row.source_highlight,
                 source_language: row.source_language,
                 target_language: row.target_language,
                 context: row.context,
                 tags: row.tags_1, // Adjust alias
                 created_at: row.created_at,
                 due: row.due,
                 stability: row.stability,
                 difficulty: row.difficulty,
                 elapsed_days: row.elapsed_days,
                 scheduled_days: row.scheduled_days,
                 reps: row.reps,
                 lapses: row.lapses,
                 state: row.state as State,
                 last_review: row.last_review,
             };
            return { type: 'flashcard', message, flashcard };
        } else {
            return { type: 'message', data: message };
        }
    }).reverse(); // Reverse back to chronological order
}

/**
 * Retrieves flashcards due for review.
 * 
 * @param now The current date/time to compare against the due date
 * @returns An array of due Flashcard objects
 */
export async function getDueFlashcards(now: Date = new Date()): Promise<Flashcard[]> {
    const sql = `
        SELECT * FROM flashcards
        WHERE due <= ?
        ORDER BY due ASC;
    `;
    const params = [now.toISOString()];
    const result = await queryDb(sql, params);
    return (result?.rows || []) as Flashcard[];
}

// Future functions (updateFlashcardState, deleteBookmark, etc.) can be added here.

// Schema is initialized directly in offscreen.ts
// export async function initializeSchema() { ... } 