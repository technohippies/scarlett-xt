import { defineExtensionMessaging } from '@webext-core/messaging';
// Remove potentially incorrect/unneeded import
// import type { LLMUserConfig } from '../services/llmService'; 
// Remove conflicting self-import
// import type { OllamaStreamChunk } from './messaging'; 

// Define/Import required types
// TODO: Ensure these types are correctly defined or imported if they exist elsewhere
export type OllamaStreamChunkStatus = 'chunk' | 'done' | 'error' | 'override_granted';
export type OllamaStreamChunk = {
  model: string;
  created_at: string;
  response?: string; // Optional: content chunk
  message?: { // Optional: final message structure (check actual Ollama API)
    role: string;
    content: string;
  };
  done: boolean; // Indicates completion
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
  // Add status and error fields for our internal handling
  status?: 'streaming' | 'complete' | 'error';
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
  // Add other fields if the background sends more
}

interface GetOllamaModelsResponse {
  success: boolean;
  models?: OllamaModel[];
  error?: string;
}

// Define the overall protocol map for type safety
export interface ProtocolMap {
  // Message from Popup -> Background to trigger clipping
  clipPage: (data: ClipData) => Promise<void>; // Assuming background doesn't directly return data here

  // Message from UI -> Background to get available Ollama models
  getOllamaModels: (data: GetOllamaModelsRequest) => Promise<GetOllamaModelsResponse>;

  // == DB Operations (UI/Background -> Offscreen) ==
  // Execute SQL (no return value expected beyond success/error)
  dbExec: (data: DbExecRequest) => Promise<{ rowsModified?: number } | void>; // PGlite exec might return rowsModified

  // Query SQL (returns rows)
  dbQuery: (data: DbQueryRequest) => Promise<any>; // Keep result type flexible for now

  // == Chat Messages ==
  ollamaChatRequest: (data: OllamaChatRequest) => Promise<{ received: boolean }>;
  ollamaResponse: OllamaStreamChunk;
  getChatHistory: (data: { sessionId?: number | 'current' }) => Promise<ChatMessage[]>;
  addSystemMessage: { content: string };

  // == Flashcard Generation ==
  generateFlashcardContent: { text: string };

  // New type for translation
  translateText: { text: string; targetLanguage: string };

  // New types for streamOllamaRequest and saveConfiguration
  streamOllamaRequest: { prompt: string; history: ChatMessage[]; config: any }; // Use any for config if type import fails
  saveConfiguration: { configJson: string };
  loadConfiguration: null;
  queryDb: { query: string; params?: any[] };
  GET_SELECTED_TEXT: null;
}

// Type for the message structure
export interface Message<T extends keyof ProtocolMap> {
  type: T;
  data: ProtocolMap[T];
}

// Utility function to send typed messages
export async function sendMessage<T extends keyof ProtocolMap>(
  type: T,
  data: ProtocolMap[T]
): Promise<any> { // Consider refining the Promise return type if possible
  try {
    const response = await browser.runtime.sendMessage({ type, data });
    // Handle potential errors returned structurally from the background
    if (response?.status === 'error') {
      console.error(`Error received from background for message type ${type}:`, response.message, response.error);
      // Re-throw or return a specific error structure
      throw new Error(response.message || 'Background script reported an error');
    }
    return response;
  } catch (error) {
    console.error(`Error sending message type ${type}:`, error);
    throw error; // Re-throw the error for the caller to handle
  }
}

// Create the typed messaging instance
const messagingInstance = defineExtensionMessaging<ProtocolMap>();

// Export the specific methods from the instance
export const onMessage = messagingInstance.onMessage;

// REMOVE conflicting re-export
// export type { ProtocolMap }; 