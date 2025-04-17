// src/services/llmService.ts

import { queryDb } from '../../utils/db'; // To load config
import { sendMessage, OllamaStreamChunk } from '../../utils/messaging'; // For streaming responses back
import type { LLMChatProvider, ProviderStreamChatRequest, LLMEmbeddingProvider, ProviderEmbeddingRequest } from './providers/types';

// --- Configuration Types ---

// Reuse ChatMessage from messaging.ts if suitable, or redefine if needed
import type { ChatMessage } from '../../utils/messaging';

export type LLMProvider = 'ollama' | 'openrouter' | 'groq' | 'venice'; // Add venice

// Base configuration structure (you might store this as JSON in the DB)
export interface LLMConfigBase {
  provider: LLMProvider;
  chatModel: string;
  embeddingModel?: string; // Optional, might not be needed for all providers or separate config
}

export interface OllamaConfig extends LLMConfigBase {
  provider: 'ollama';
  endpoint: string; // e.g., http://localhost:11434
  // embeddingModel is required for local Ollama embedding
  embeddingModel: string;
}

export interface OpenRouterConfig extends LLMConfigBase {
  provider: 'openrouter';
  apiKey: string;
  // OpenRouter might use specific model identifiers different from Ollama
  // Embedding model might be implicit or a specific one if they offer it
}

// Add GroqConfig
export interface GroqConfig extends LLMConfigBase {
  provider: 'groq';
  apiKey: string;
  // Groq doesn't currently offer embedding models
  embeddingModel?: undefined; 
}

// Add VeniceConfig (even if empty for now)
export interface VeniceConfig extends LLMConfigBase {
  provider: 'venice';
  apiKey?: undefined; // No API key needed
  embeddingModel?: undefined;
  // Add wallet address or other relevant fields later
}

export type LLMUserConfig = OllamaConfig | OpenRouterConfig | GroqConfig | VeniceConfig; // Union type

// --- Service Argument Types ---

export interface StreamChatRequest {
  prompt: string;
  history?: ChatMessage[];
  config: LLMUserConfig; // Pass the loaded config
}

export interface EmbeddingRequest {
  content: string[] | string; // Allow single string or array
  config: LLMUserConfig;
}

// --- Service Response Types ---

// For chat, we stream OllamaStreamChunk via sendMessage
// For embeddings, we return the vectors directly
export interface EmbeddingResponse {
  embeddings: number[][]; // Array of embedding vectors
}


// --- Service Interface (Conceptual - implementation follows) ---

/**
 * Loads the user's LLM configuration from the database.
 */
export async function loadUserConfig(): Promise<LLMUserConfig | null> {
  console.log('[llmService] Loading user configuration...');
  try {
    const sql = 'SELECT config_json FROM user_configuration WHERE id = 1;';
    const result = await queryDb(sql);
    if (result?.rows?.[0]?.config_json) {
      const config = JSON.parse(result.rows[0].config_json);
      console.log('[llmService] Loaded config:', config);
      // Basic validation
      if (!config.provider || !config.chatModel) throw new Error("Config missing provider/chatModel");
      if (config.provider === 'ollama' && (!config.endpoint || !config.embeddingModel)) throw new Error("Ollama config missing endpoint/embeddingModel");
      if (config.provider === 'openrouter' && !config.apiKey) throw new Error("OpenRouter config missing apiKey");
      if (config.provider === 'groq' && !config.apiKey) throw new Error("Groq config missing apiKey");
      return config as LLMUserConfig;
    } 
    console.log('[llmService] No configuration found.');
    return null;
  } catch (error) {
    console.error('[llmService] Error loading or validating configuration:', error);
    return null;
  }
}


/**
 * Handles streaming chat responses from the configured LLM provider.
 * Sends chunks back via sendMessage('ollamaResponse', chunk).
 */
export async function streamChatResponse(request: StreamChatRequest): Promise<void> {
  const { config } = request;

  const sendChunkCallback = (chunk: OllamaStreamChunk): void => {
     sendMessage('ollamaResponse', chunk)
       .catch(e => console.error(`[llmService] Failed to relay chunk:`, e));
  };

  if (!config) {
    console.error("[llmService] streamChatResponse called with null config.");
    sendChunkCallback({ status: 'error', error: 'LLM configuration is missing.' });
    return;
  }

  console.log(`[llmService] Routing chat stream for provider: ${config.provider}`);

  try {
    let providerModule: LLMChatProvider;

    // Use switch statement for provider routing
    switch (config.provider) {
      case 'ollama': { // Use block scope for imports
        const { ollamaProvider } = await import('./providers/ollama');
        providerModule = ollamaProvider;
        break; // Exit switch
      }
      case 'openrouter': {
        const { openRouterProvider } = await import('./providers/openrouter');
        providerModule = openRouterProvider;
        break; // Exit switch
      }
      default: {
        console.error("[llmService] Unsupported provider found in config");
        sendChunkCallback({ status: 'error', error: "Unsupported LLM provider" });
        return; // Exit function
      }
    }

    // Call the provider's method (providerModule is guaranteed to be assigned)
    await providerModule.streamChat({ ...request, sendChunk: sendChunkCallback });

  } catch (error: any) {
     console.error(`[llmService] Error during chat stream routing or execution:`, error);
     sendChunkCallback({ status: 'error', error: `LLM Service Error: ${error.message || String(error)}` });
  }
}

/**
 * Gets embeddings for the given content using the configured provider.
 */
export async function getEmbeddings(request: EmbeddingRequest): Promise<EmbeddingResponse> {
   const { config } = request;

   if (!config) {
      console.error("[llmService] getEmbeddings called with null config.");
      throw new Error('LLM configuration is missing.');
   }

   console.log(`[llmService] Routing embeddings request for provider: ${config.provider}`);

   try {
       let providerModule: LLMEmbeddingProvider;

       // Use switch statement for provider routing
       switch (config.provider) {
         case 'ollama': {
           const { ollamaProvider } = await import('./providers/ollama');
           if (!('getEmbeddings' in ollamaProvider)) throw new Error('Ollama provider does not support getEmbeddings');
           providerModule = ollamaProvider as LLMEmbeddingProvider;
           break;
         }
         case 'openrouter':
           throw new Error(`${config.provider} embeddings not yet implemented.`);
         default: {
           console.error("[llmService] Unsupported provider for embeddings");
           throw new Error("Unsupported LLM provider for embeddings");
         }
       }

       // Call the provider's method (providerModule is guaranteed to be assigned if not thrown)
       return await providerModule.getEmbeddings(request);

   } catch (error: any) {
        console.error(`[llmService] Error during embedding routing or execution:`, error);
        throw new Error(`Embedding Service Error: ${error.message || String(error)}`);
   }
}

// Remove old provider implementations 