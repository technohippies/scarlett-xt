// src/services/llmService.ts

import { queryDb } from '../../utils/db'; // To load config
import { sendMessage, OllamaStreamChunk } from '../../utils/messaging'; // For streaming responses back
import type { LLMProvider, LLMChatProvider, ProviderStreamChatRequest, LLMEmbeddingProvider, ProviderEmbeddingRequest } from './providers/types';

// --- Configuration Types ---

// Reuse ChatMessage from messaging.ts if suitable, or redefine if needed
import type { ChatMessage } from '../../utils/messaging';

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

// --- New Flashcard Generation Function ---

// Define the expected structure of the JSON response from the LLM
interface FlashcardGenerationResponse {
  frontBack: {
    front: string;
    back: string;
  };
  cloze: {
    text: string;
  };
}

// Helper function to create the prompt
function createFlashcardPrompt(selectedText: string, sourceUrl?: string): string {
    // Base prompt structure
    let prompt = `Given the following text selection, generate two types of flashcards: a concise front/back pair and a cloze deletion card. The goal is efficient learning.\n\nText Selection:\n\"${selectedText}\"`;

    if (sourceUrl) {
        prompt += `\nSource URL (for context): ${sourceUrl}`;
    }

    prompt += `\n\nInstructions:\n1.  **Front/Back Card:** Create a very concise term/definition pair. Identify the core concept or relationship. Avoid full questions. Prefer short phrases.\n2.  **Cloze Card:** Create a single sentence incorporating the main idea of the text selection. Replace the single most important keyword or phrase with [...]. Do not use markdown for the cloze brackets.\n3.  **Output Format:** Return ONLY a valid JSON object matching this EXACT structure (no extra text, explanations, or markdown formatting):\n    \`\`\`json\n    {\n      \"frontBack\": { \"front\": \"concise front text\", \"back\": \"concise back text\" },\n      \"cloze\": { \"text\": \"Sentence with [...] cloze deletion.\" }\n    }\n    \`\`\`\n\nExamples:\n\nInput Text: \"The Eiffel Tower, located in Paris, France, was completed in 1889.\"\nOutput JSON:\n\`\`\`json\n{\n  \"frontBack\": { \"front\": \"Eiffel Tower Location\", \"back\": \"Paris, France\" },\n  \"cloze\": { \"text\": \"The Eiffel Tower, located in Paris, France, was completed in [...].\" }\n}\n\`\`\`\n\nInput Text: \"Photosynthesis is the process used by plants to convert light energy into chemical energy.\"\nOutput JSON:\n\`\`\`json\n{\n  \"frontBack\": { \"front\": \"Photosynthesis\", \"back\": \"Plant process converting light to chemical energy\" },\n  \"cloze\": { \"text\": \"[...] is the process used by plants to convert light energy into chemical energy.\" }\n}\n\`\`\`\n\nInput Text: \"React is a JavaScript library for building user interfaces.\"\nOutput JSON:\n\`\`\`json\n{\n  \"frontBack\": { \"front\": \"React\", \"back\": \"JS library for UIs\" },\n  \"cloze\": { \"text\": \"React is a JavaScript library for building [...].\" }\n}\n\`\`\`\n\nNow, generate the flashcards for the provided text selection. Output JSON:\n`;
    return prompt;
}

/**
 * Generates a front/back and cloze flashcard pair from selected text using the configured LLM.
 */
export async function generateFlashcardPair(selectedText: string, sourceUrl?: string): Promise<FlashcardGenerationResponse | null> {
    console.log(`[llmService] Generating flashcard pair for text: \"${selectedText.substring(0, 50)}...\"`);

    const config = await loadUserConfig();
    if (!config) {
        console.error("[llmService generateFlashcardPair] Cannot generate flashcards: LLM config not loaded.");
        return null;
    }

    const prompt = createFlashcardPrompt(selectedText, sourceUrl);
    let providerModule: LLMChatProvider | null = null;

    // Find the provider module (similar to streamChatResponse)
    try {
        switch (config.provider) {
            case 'ollama': {
                const { ollamaProvider } = await import('./providers/ollama');
                providerModule = ollamaProvider;
                break;
            }
            case 'openrouter': {
                // Assuming OpenRouter provider exists and implements chatCompletion
                // const { openRouterProvider } = await import('./providers/openrouter');
                // providerModule = openRouterProvider;
                console.warn("OpenRouter flashcard generation not yet implemented.");
                return null;
            }
            // Add other providers if they support chatCompletion
            default: {
                console.error("[llmService generateFlashcardPair] Unsupported provider for non-streaming chat:", config.provider);
                return null;
            }
        }

        if (!providerModule?.chatCompletion) {
            console.error(`[llmService generateFlashcardPair] Provider ${config.provider} does not support the required 'chatCompletion' method.`);
            return null;
        }

        // Make the non-streaming chat request
        console.log("[llmService generateFlashcardPair] Sending request to provider chatCompletion...");
        const response = await providerModule.chatCompletion({
            prompt: prompt,
            config: config,
            history: [], // No history needed for this specific task
        });

        if (!response?.message?.content) {
            console.error("[llmService generateFlashcardPair] LLM response was empty or invalid.");
            return null;
        }

        // Attempt to parse the JSON from the response content
        try {
            // Clean potential markdown code fences
            const cleanedContent = response.message.content.replace(/```json\\n?|```/g, '').trim();
            const parsedJson = JSON.parse(cleanedContent);
            
            // Basic validation of the parsed structure
            if (parsedJson.frontBack?.front && parsedJson.frontBack?.back && parsedJson.cloze?.text) {
                 console.log("[llmService generateFlashcardPair] Successfully parsed flashcard JSON:", parsedJson);
                 return parsedJson as FlashcardGenerationResponse;
            } else {
                 console.error("[llmService generateFlashcardPair] Parsed JSON lacks expected structure:", parsedJson);
                 return null;
            }
        } catch (parseError) {
            console.error("[llmService generateFlashcardPair] Failed to parse JSON from LLM response:", parseError, "Raw content:", response.message.content);
            return null;
        }

    } catch (error) {
        console.error("[llmService generateFlashcardPair] Error during flashcard generation:", error);
        return null;
    }
} 