import { defineExtensionMessaging } from '@webext-core/messaging';
// Remove potentially incorrect/unneeded import
// import type { LLMUserConfig } from '../services/llmService'; 
// Remove conflicting self-import
// import type { OllamaStreamChunk } from './messaging'; 
import type { Flashcard } from '../src/types/db'; // Added Flashcard import
// import type { DatabaseStats } from '../utils/db'; // REMOVED DatabaseStats import

// Define/Import required types
// TODO: Ensure these types are correctly defined or imported if they exist elsewhere
// export type OllamaStreamChunkStatus = 'chunk' | 'done' | 'error' | 'override_granted'; // Removed old status type

export type OllamaStreamChunk = {
  model?: string; // Make optional as not all chunks have it
  created_at?: string; // Make optional
  content?: string; // Content chunk from Ollama provider
  message?: { // Optional: final message structure (check actual Ollama API)
    role: string;
    content: string;
  };
  // done: boolean; // 'status' field replaces this
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
  stats?: { // Include stats from Ollama provider's done chunk
    model: string;
    created_at: string;
    total_duration?: number;
    load_duration?: number;
    prompt_eval_count?: number;
    prompt_eval_duration?: number;
    eval_count?: number;
    eval_duration?: number;
  };
  // Updated status field to reflect actual usage
  status: 'chunk' | 'complete' | 'error' | 'done'; 
  error?: string; 
};
export interface OllamaChatRequest {
    prompt: string;
    history?: { role: 'user' | 'assistant'; content: string }[]; 
}
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'bookmark' | 'flashcard'; // Added system/bookmark/flashcard
  content?: string;
  status?: 'pending' | 'streaming' | 'complete' | 'error';
  id?: number; // Optional ID from DB
  created_at?: string | number; // Optional timestamp
  bookmark_id?: number; // Optional ID if role is bookmark
  flashcard_id?: number; // Optional ID if role is flashcard
}

// Define ClipData type and export it
export interface ClipData {
  title: string;
  url: string;
  tags?: string[]; // Optional tags
}

// Define DB operation types
// EXPORT these interfaces
export interface DbExecRequest {
  sql: string;
  params?: any[]; // Optional params for exec
}

export interface DbQueryRequest {
  sql: string;
  params?: any[]; // Optional params for query
}

// Define input/output for getOllamaModels
interface GetOllamaModelsRequest {
  endpoint: string;
}

// Define the structure of a model returned by the background
interface OllamaModel {
  id: string;
  name: string;
}

// *** EXPORT this interface ***
export interface GetOllamaModelsResponse {
  success: boolean;
  models?: OllamaModel[];
  error?: string;
}

// Add PageInfo type if not defined elsewhere
export interface PageInfo { // Assuming this structure based on App.tsx usage
  title: string;
  url: string;
}

// Define the overall protocol map for type safety
export interface ProtocolMap {
  // Message from Popup -> Background to trigger clipping
  clipPage: (data: ClipData) => void; // Should return void if background handles notifications

  // Message from UI -> Background to get available Ollama models
  getOllamaModels: (data: { endpoint: string }) => void; // Request trigger
  getOllamaModelsResult: GetOllamaModelsResponse; // Response with models or error

  // == DB Operations (UI/Background -> Offscreen) ==
  dbExec: { data: DbExecRequest }; // Expect object containing request data
  dbQuery: { data: DbQueryRequest }; // Expect object containing request data

  // == Chat Messages ==
  ollamaChatRequest: (data: OllamaChatRequest) => void; // Request trigger (stream handled separately)
  ollamaResponse: OllamaStreamChunk; // Use the updated type
  getChatHistory: (data: { sessionId?: number | 'current' }) => Promise<ChatMessage[]>; // Direct request/response
  addSystemMessage: { content: string }; // Simple message

  // == Flashcard Generation ==
  generateFlashcardContent: (
    params: {
      text: string;
      sourceUrl: string | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
    }
  ) => void; // Fire and forget, result sent via flashcardGenerationResult
  flashcardGenerationResult: (
    result: { data: FlashcardGenerationResult; error?: string }
  ) => void;

  // == Translation ==
  translateText: (params: { text: string; targetLang: string }) => Promise<string>;

  // == Popup Data Requests ==
  getSelectedText: () => Promise<{ text: string } | null>; // Define expected return type
  getPageInfo: () => Promise<PageInfo | null>; // Define expected return type

  // == Internal Background <-> Content Script Communication ==
  _requestSelectionFromContentScript: () => Promise<{ text: string } | null>; // Message BG sends to CS

  // == Other existing types ==
  streamOllamaRequest: { prompt: string; history: ChatMessage[]; config: any };
  saveConfiguration: { configJson: string };
  loadConfiguration: null;
  queryDb: { query: string; params?: any[] };

  // New messages
  // getDatabaseStats: () => Promise<DatabaseStats>; // REMOVED this line

  // Message to save flashcard AND notify UI
  saveFlashcardAndNotify: (
    params: { cardData: Partial<Flashcard> } // Use Partial for now, refine later if needed
  ) => Promise<Flashcard | null>; // Returns the saved card or null on error

  // Internal notification message for UI updates
  _chatHistoryUpdated: () => void;
}

// Type for the message structure
export interface Message<T extends keyof ProtocolMap> {
  type: T;
  data: ProtocolMap[T];
}

// Create the typed messaging instance
const messagingInstance = defineExtensionMessaging<ProtocolMap>();

// Export the specific methods from the instance
export const onMessage = messagingInstance.onMessage;
export const sendMessage = messagingInstance.sendMessage;

// REMOVE conflicting re-export
// export type { ProtocolMap }; 

// *** EXPORT THIS TYPE ***
export type FlashcardGenerationResult = {
  flashcard: { front: string; back: string };
  cloze: { text: string };
} | null; 