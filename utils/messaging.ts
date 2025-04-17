import { defineExtensionMessaging } from '@webext-core/messaging';

// Define/Import required types
// TODO: Ensure these types are correctly defined or imported if they exist elsewhere
export type OllamaStreamChunkStatus = 'chunk' | 'done' | 'error' | 'override_granted';
export type OllamaStreamChunk = 
    | { status: 'chunk'; content: string } 
    | { status: 'done'; stats: any } 
    | { status: 'error'; error: string } 
    | { status: 'override_granted'; content: string; domain: string; expiresAt: string };
export interface OllamaChatRequest {
    prompt: string;
    history?: { role: 'user' | 'assistant'; content: string }[]; 
}
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  id?: string; // Add optional ID used in ChatPage
  isError?: boolean; // Add optional flag for error messages
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
  generateFlashcardContent: (data: { text: string }) => Promise<{
    qa: { front: string; back: string };
    cloze: { text: string };
  } | null>; 
}

// Create the typed messaging instance
const messagingInstance = defineExtensionMessaging<ProtocolMap>();

// Export the specific methods from the instance
export const sendMessage = messagingInstance.sendMessage;
export const onMessage = messagingInstance.onMessage;

// REMOVE conflicting re-export
// export type { ProtocolMap }; 