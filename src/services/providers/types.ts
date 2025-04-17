import type { ChatMessage, OllamaStreamChunk } from '../../../utils/messaging';
import type { LLMUserConfig, EmbeddingResponse } from '../llmService'; // Correct relative path

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

// Defines the standard methods that each LLM provider module must implement
export interface LLMChatProvider {
  streamChat(request: ProviderStreamChatRequest): Promise<void>;
  // Add getEmbeddings later if needed
  // getEmbeddings?(request: ProviderEmbeddingRequest): Promise<EmbeddingResponse>;
}

export interface LLMEmbeddingProvider {
   getEmbeddings(request: ProviderEmbeddingRequest): Promise<EmbeddingResponse>;
} 