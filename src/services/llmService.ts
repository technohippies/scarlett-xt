// src/services/llmService.ts

import { queryDb } from '../../utils/db'; // To load config
import { sendMessage, OllamaStreamChunk } from '../../utils/messaging'; // For streaming responses back
import type { LLMProvider, LLMChatProvider, ProviderStreamChatRequest, LLMEmbeddingProvider } from './providers/types';

// Add provider imports
import { ollamaProvider } from './providers/ollama';
import { openRouterProvider } from './providers/openrouter';

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

// Add VeniceConfig (even if empty for now)
export interface VeniceConfig extends LLMConfigBase {
  provider: 'venice';
  apiKey?: undefined; // No API key needed
  embeddingModel?: undefined;
  // Add wallet address or other relevant fields later
}

export type LLMUserConfig = OllamaConfig | OpenRouterConfig | VeniceConfig; // Union type

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
let userConfigCache: LLMUserConfig | null = null;
export async function loadUserConfig(): Promise<LLMUserConfig | null> {
  if (userConfigCache) return userConfigCache;
  console.log('[llmService] Loading user configuration from DB...');
  try {
    const result = await queryDb('SELECT config_json FROM user_configuration WHERE id = 1;');
    if (result?.rows?.[0]?.config_json) {
      const config = JSON.parse(result.rows[0].config_json);
      console.log('[llmService] Loaded config:', config);
      userConfigCache = config; // Cache the loaded config
      return config;
    } else {
      console.warn('[llmService] No configuration found in database.');
      return null;
    }
  } catch (error) {
    console.error('[llmService] Error loading configuration:', error);
    return null;
  }
}


/**
 * Handles streaming chat responses from the configured LLM provider.
 * Sends chunks back via sendMessage('ollamaResponse', chunk).
 */
export async function streamChatResponse(request: { prompt: string; history: any[]; config: LLMUserConfig }): Promise<void> {
  const { prompt, history, config } = request;
  console.log(`[llmService] Routing chat stream for provider: ${config.provider}`);
  const provider = getProvider(config);
  if (!provider) {
    throw new Error(`Unsupported provider: ${config.provider}`);
  }
  if (!provider.streamChat) {
    throw new Error(`Provider ${config.provider} does not support streaming chat.`);
  }
  const providerRequest: ProviderStreamChatRequest = {
    prompt,
    history,
    config,
    sendChunk: (chunk) => {
      sendMessage('ollamaResponse', chunk).catch(e => console.error("Failed to send chunk to UI:", e));
    }
  };
  try {
    await provider.streamChat(providerRequest);
  } catch (error) {
    console.error(`[llmService] Error during streamChat for ${config.provider}:`, error);
    // Ensure the error object conforms to OllamaStreamChunk
    sendMessage('ollamaResponse', {
      status: 'error', // Correctly use the status field
      error: error instanceof Error ? error.message : String(error)
    }).catch(e => console.error("Failed to send error chunk to UI:", e));
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

// Helper function to create the prompt (Updated for Readability & Clarity)
function createFlashcardPrompt(selectedText: string, sourceUrl?: string): string {
    // Use a multi-line template literal for better readability
    let prompt = `
Generate two types of flashcards from the text below: a concise "Flashcard" (Front/Back) and a "Cloze" deletion card.

Text Selection:
"""
${selectedText}
"""
${sourceUrl ? `\\nSource URL (for context): ${sourceUrl}` : ''}

Instructions:

1.  **Flashcard (Front/Back):**
    *   Front: A short topic or concept (max 8 words).
    *   Back: A concise fact or definition related to the front (max 8 words).
    *   **IMPORTANT:** Do NOT include trailing punctuation. Back should ONLY contain the fact, no filler.

2.  **Cloze Card:**
    *   Create a single sentence using the main idea.
    *   Replace the single most *meaningful* keyword/phrase with {{c1::answer}}.
    *   **AVOID** deleting trivial words (the, is, a) or the obvious main subject.

3.  **Output Format:**
    *   Return ONLY a valid JSON object. No extra text, explanations, or markdown.
    *   Use this EXACT structure:
    \`\`\`json
    {
      "flashcard": { "front": "topic/concept", "back": "concise fact" },
      "cloze": { "text": "Sentence with {{c1::answer}} deletion." }
    }
    \`\`\`

Examples:

--- Example 1 ---
Input Text: "The Eiffel Tower, located in Paris, France, was completed in 1889."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "Eiffel Tower Location", "back": "Paris, France" },
  "cloze": { "text": "The Eiffel Tower, located in Paris, France, was completed in {{c1::1889}}" }
}
\`\`\`
(Flashcard: Good - concise topic/fact. Cloze: Good - specific detail deleted.)

--- Example 2 ---
Input Text: "Photosynthesis is the process used by plants to convert light energy into chemical energy."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "Photosynthesis", "back": "Converts light to chemical energy" },
  "cloze": { "text": "Photosynthesis is the process used by plants to convert {{c1::light energy}} into chemical energy" }
}
\`\`\`
(Flashcard: Good - concept/definition. Cloze: Good - key concept deleted.)

--- Example 3 ---
Input Text: "The Wachowskis wrote and directed the Matrix film series."
Output JSON:
\`\`\`json
{
  "flashcard": { "front": "The Matrix Directors", "back": "The Wachowskis" },
  "cloze": { "text": "The {{c1::Wachowskis}} wrote and directed the Matrix film series" }
}
\`\`\`
(Flashcard: Good - specific role. Cloze: Better - deleted the directors instead of the trivial 'Matrix'.)

--- Example 4 (Bad Examples) ---
Input Text: "React is a JavaScript library for building user interfaces."
Bad Flashcard Back: "React is a JS library for UIs." (Trailing period)
Bad Flashcard Back: "It is a library for building UIs" (Exceeds 8 words, filler)
Bad Cloze: "React is a JavaScript library for building {{c1::user interfaces}}" (Okay, but less ideal than deleting 'JavaScript library')
Bad Cloze: "{{c1::React}} is a JavaScript library for building user interfaces." (Trivial deletion of main subject)

Now, generate the flashcards for the provided text selection. Output ONLY the JSON object:
`;
    return prompt.trim(); // Trim leading/trailing whitespace from the template literal
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

// --- Helper Function to get Provider --- 
// (Assumes UserConfig has a provider field like 'ollama' or 'openrouter')
function getProvider(config: LLMUserConfig): LLMChatProvider | null {
    switch (config.provider) {
        case 'ollama':
            return ollamaProvider;
        case 'openrouter':
            return openRouterProvider;
        // Add cases for other providers like 'lmstudio', 'jan' if they have specific provider objects
        default:
            // Handle local providers that might share Ollama logic but have different IDs
            if ((config as any).endpoint) { 
                // If endpoint exists, assume it might be an Ollama-compatible API
                // TODO: Refine this logic if local providers need distinct handling
                console.warn(`[llmService] Using ollamaProvider for potentially compatible provider: ${config.provider}`);
                return ollamaProvider; 
            }
            console.error(`[llmService] Unsupported provider found in config: ${config.provider}`);
            return null;
    }
}

// --- Flashcard Generation Function (Updated to use Streaming) ---
export async function generateFlashcardContentFromText(text: string): Promise<{
    flashcard: { front: string; back: string };
    cloze: { text: string };
  } | null> {
    console.log("[llmService] Generating flashcard content for text:", text.substring(0, 50) + "...");
    const config = await loadUserConfig();
    if (!config) throw new Error("LLM configuration not found.");

    const provider = getProvider(config);
    if (!provider) throw new Error(`Unsupported provider: ${config.provider}`);

    // --- Use streamChat instead of chatCompletion ---
    if (!provider.streamChat) {
        console.error(`[llmService] Provider ${config.provider} does not support streaming chat. Cannot generate flashcards.`);
        return null;
    }

    const prompt = createFlashcardPrompt(text);
    let accumulatedContent = '';
    let streamError: string | null = null;

    console.log("[llmService] Sending flashcard generation prompt via streamChat...");

    try {
        // Create a promise that resolves when the stream finishes
        await new Promise<void>((resolve, reject) => {
            const providerRequest: ProviderStreamChatRequest = {
                prompt,
                config,
                history: [],
                sendChunk: (chunk) => {
                    if (chunk.status === 'chunk' && chunk.content) {
                        accumulatedContent += chunk.content;
                    } else if (chunk.status === 'error') {
                        console.error("[llmService flashcard stream] Received error chunk:", chunk.error);
                        streamError = chunk.error || 'Unknown streaming error';
                        // Don't reject immediately, let it finish to potentially capture partial content?
                        // Or reject here if errors should halt processing: reject(new Error(streamError)); 
                    } else if (chunk.status === 'done' || chunk.status === 'complete') {
                         console.log("[llmService flashcard stream] Stream finished.");
                         resolve(); // Resolve the promise when done
                    }
                }
            };
            // Initiate the stream
            provider.streamChat(providerRequest).catch(reject); // Reject promise on initial streamChat error
        });

        if (streamError) {
             console.error("[llmService] Flashcard stream completed with error:", streamError);
             // Potentially try parsing accumulatedContent anyway?
             // return null; // For now, return null if stream had errors
        }

        if (!accumulatedContent) {
             console.error("[llmService] Flashcard stream completed but accumulated content is empty.");
             return null;
        }

        // --- Parse the accumulated response as JSON ---
        console.log("[llmService] Received accumulated stream response for parsing:", accumulatedContent);
        try {
            const jsonMatch = accumulatedContent.match(/```json\s*([\s\S]*?)\s*```|({[\s\S]*})/);
            if (!jsonMatch || (!jsonMatch[1] && !jsonMatch[2])) {
                console.error("[llmService] Could not find JSON block in the accumulated stream response.");
                 // Fallback attempt
                 try {
                     const parsedJson = JSON.parse(accumulatedContent.trim());
                     if (parsedJson.flashcard?.front && parsedJson.flashcard?.back && parsedJson.cloze?.text) {
                         console.log("[llmService] Successfully parsed flashcard JSON from raw stream response (fallback).");
                         return parsedJson as { flashcard: { front: string; back: string }; cloze: { text: string } };
                     } else {
                         console.error("[llmService] Parsed fallback stream JSON lacks expected structure:", parsedJson);
                         return null;
                     }
                 } catch (fallbackError) {
                     console.error("[llmService] Failed to parse JSON directly from accumulated stream (fallback failed):", fallbackError);
                     return null;
                 }
            }

            const jsonString = jsonMatch[1] || jsonMatch[2];
            const parsedJson = JSON.parse(jsonString.trim());

            if (parsedJson.flashcard?.front && parsedJson.flashcard?.back && parsedJson.cloze?.text) {
                console.log("[llmService] Successfully parsed flashcard JSON from accumulated stream response.");
                return parsedJson as { flashcard: { front: string; back: string }; cloze: { text: string } };
            } else {
                console.error("[llmService] Parsed stream JSON lacks expected structure (flashcard/cloze):", parsedJson);
                return null;
            }
        } catch (parseError) {
            console.error("[llmService] Error parsing JSON from accumulated stream response:", parseError);
            console.error("--- Accumulated Raw Content ---");
            console.error(accumulatedContent);
            console.error("--- End Accumulated Raw Content ---");
            return null;
        }

    } catch (error) {
        console.error("[llmService] Error during flashcard generation stream setup or promise handling:", error);
        return null;
    }
}

// --- Translation Function ---

/**
 * Translates the given text to the target language using the configured LLM.
 */
export async function translateText(textToTranslate: string, targetLanguage: string): Promise<string | null> {
    console.log(`[llmService] Translating text to ${targetLanguage}: "${textToTranslate.substring(0, 50)}..."`);

    const config = await loadUserConfig();
    if (!config) {
        console.error("[llmService translateText] Cannot translate: LLM config not loaded.");
        return null;
    }

    const provider = getProvider(config);
    if (!provider?.chatCompletion) {
        console.error(`[llmService translateText] Provider ${config.provider} does not support 'chatCompletion'.`);
        return null;
    }

    // Simple translation prompt
    const prompt = `Translate the following text accurately to ${targetLanguage}. Output ONLY the translated text, nothing else:

Text to translate:
"""
${textToTranslate}
"""

Translated text:`;

    console.log(`[llmService translateText] Sending translation prompt to ${config.provider}...`);

    try {
        const response = await provider.chatCompletion({
            prompt: prompt,
            config: config,
            history: [], // No history needed
        });

        const translatedText = response?.message?.content?.trim();

        if (!translatedText) {
            console.error("[llmService translateText] LLM response was empty or invalid.");
            return null;
        }

        console.log("[llmService translateText] Received translation:", translatedText);
        return translatedText;

    } catch (error) {
        console.error("[llmService translateText] Error during translation LLM call:", error);
        return null;
    }
} 