import type { ChatMessage, OllamaStreamChunk } from '../../../utils/messaging';
import type { LLMUserConfig, EmbeddingResponse } from '../llmService'; // Correct relative path

// Define the LLMProvider type here
export type LLMProvider = 'ollama' | 'openrouter' | 'groq' | 'venice'; 

// Interface defining the arguments for a chat stream request to a provider
export interface ProviderStreamChatRequest {
  prompt: string;
  history?: ChatMessage[];
  config: LLMUserConfig; // Provider needs the full config
  // Callback function to send data chunks back to the main service/background
  sendChunk: (chunk: OllamaStreamChunk) => void; 
}

// Interface defining the arguments for an embedding request to a provider
export interface ProviderEmbeddingRequest {
  content: string[] | string;
  config: LLMUserConfig;
}

// Define the structure for a single chat completion response
// (Mirrors typical non-streaming API responses)
export interface ChatCompletionResponse {
  // Usually includes the full message content
  message: { 
    role: 'assistant';
    content: string;
  };
  // May include usage stats, finish reason, etc.
  usage?: { 
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  };
  // Other provider-specific fields...
  [key: string]: any;
}

// Define the arguments for a non-streaming request
export interface ProviderChatCompletionRequest {
  prompt: string;
  history?: ChatMessage[];
  config: LLMUserConfig;
  // Add any other necessary options, like temperature etc.
}

// --- Provider Interfaces ---

/** Basic interface for any LLM provider */
export interface LLMProviderBase {
  providerId: LLMProvider; // e.g., 'ollama', 'openrouter'
}

/** Interface for providers supporting streaming chat */
export interface LLMChatProvider extends LLMProviderBase {
  streamChat: (request: ProviderStreamChatRequest) => Promise<void>;
  // Add the optional non-streaming method
  chatCompletion?: (request: ProviderChatCompletionRequest) => Promise<ChatCompletionResponse | null>; 
}

export interface LLMEmbeddingProvider {
   getEmbeddings(request: ProviderEmbeddingRequest): Promise<EmbeddingResponse>;
} 