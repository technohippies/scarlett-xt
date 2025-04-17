// src/services/llmService.ts

import { queryDb } from '../../utils/db'; // To load config
import { sendMessage, OllamaStreamChunk } from '../../utils/messaging'; // For streaming responses back

// --- Configuration Types ---

// Reuse ChatMessage from messaging.ts if suitable, or redefine if needed
import type { ChatMessage } from '../../utils/messaging';

export type LLMProvider = 'ollama' | 'openrouter'; // Add other providers later

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

export type LLMUserConfig = OllamaConfig | OpenRouterConfig; // Union type

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
      // TODO: Add validation here to ensure config matches LLMUserConfig shape
      return config as LLMUserConfig;
    }
    console.log('[llmService] No configuration found.');
    return null;
  } catch (error) {
    console.error('[llmService] Error loading configuration:', error);
    return null;
  }
}


/**
 * Handles streaming chat responses from the configured LLM provider.
 * Sends chunks back via sendMessage('ollamaResponse', chunk).
 */
export async function streamChatResponse(request: StreamChatRequest): Promise<void> {
  const { config } = request;
  console.log(`[llmService] Starting chat stream for provider: ${config.provider}`);

  try {
    if (config.provider === 'ollama') {
      await streamOllamaChat(request);
    } else if (config.provider === 'openrouter') {
      await streamOpenRouterChat(request);
    } else {
      // Ensure config has a provider property before accessing it in the error message
      const provider = (config as any)?.provider ?? 'unknown';
      throw new Error(`Unsupported LLM provider: ${provider}`);
    }
  } catch (error: any) {
     console.error(`[llmService] Error during chat stream:`, error);
     // Send error back to UI
     sendMessage('ollamaResponse', {
       status: 'error',
       error: `LLM Service Error: ${error.message || String(error)}`
     }).catch(e => console.error("Failed to send error message:", e));
  }
}

/**
 * Gets embeddings for the given content using the configured provider.
 */
export async function getEmbeddings(request: EmbeddingRequest): Promise<EmbeddingResponse> {
   const { config } = request;
   console.log(`[llmService] Getting embeddings for provider: ${config.provider}`);

   if (config.provider === 'ollama') {
       if (!config.embeddingModel) {
            throw new Error("Ollama configuration missing required embeddingModel.");
       }
       return getOllamaEmbeddings(request);
   } else if (config.provider === 'openrouter') {
       // return getOpenRouterEmbeddings(request); // Implement later
       throw new Error("OpenRouter embeddings not yet implemented.");
   } else {
      // Ensure config has a provider property before accessing it in the error message
       const provider = (config as any)?.provider ?? 'unknown';
       throw new Error(`Unsupported LLM provider for embeddings: ${provider}`);
   }
}


// --- Provider-Specific Implementations (Private Helpers) ---

async function streamOllamaChat(request: StreamChatRequest): Promise<void> {
    const { prompt, history = [], config } = request;
    const ollamaConfig = config as OllamaConfig; // Type assertion

    const model = ollamaConfig.chatModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, ''); // Ensure no trailing slash
    const apiUrl = `${endpoint}/api/chat`; // Use Ollama API endpoint

    console.log(`[llmService/Ollama] Sending chat request to ${apiUrl} with model ${model}`);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: model,
            messages: [...history, { role: 'user', content: prompt }],
            stream: true
        }),
    });

    if (!response.ok || !response.body) {
        const errorBody = await response.text().catch(() => "Failed to read error body");
        throw new Error(`Ollama API error (${response.status}): ${errorBody}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep incomplete line

        for (const line of lines) {
            if (line.trim() === '') continue;
            try {
                const chunk = JSON.parse(line);
                let responseChunk: OllamaStreamChunk | null = null;

                if (chunk.message?.content) {
                    responseChunk = { status: 'chunk', content: chunk.message.content };
                } else if (chunk.done) {
                    // Map Ollama's done structure to our OllamaStreamChunk['done']
                    responseChunk = {
                        status: 'done',
                        stats: {
                            model: chunk.model,
                            created_at: chunk.created_at,
                            total_duration: chunk.total_duration,
                            load_duration: chunk.load_duration,
                            prompt_eval_count: chunk.prompt_eval_count,
                            prompt_eval_duration: chunk.prompt_eval_duration,
                            eval_count: chunk.eval_count,
                            eval_duration: chunk.eval_duration,
                        }
                    };
                    console.log("[llmService/Ollama] Stream finished.", responseChunk.stats);
                }

                if (responseChunk) {
                    sendMessage('ollamaResponse', responseChunk).catch(e => console.error("Failed to send Ollama chunk:", e));
                }

            } catch (e) {
                console.error("[llmService/Ollama] Failed to parse Ollama stream chunk:", line, e);
                // Decide if we should send an error message back or just log
            }
        }
    }
     // Handle any remaining buffer content (though Ollama usually ends with a 'done' chunk)
     if (buffer.trim()) {
         console.warn("[llmService/Ollama] Stream ended with unprocessed buffer:", buffer);
     }
}

async function streamOpenRouterChat(request: StreamChatRequest): Promise<void> {
    const { prompt, history = [], config } = request;
    const openRouterConfig = config as OpenRouterConfig; // Type assertion

    const model = openRouterConfig.chatModel;
    const apiKey = openRouterConfig.apiKey;
    const apiUrl = "https://openrouter.ai/api/v1/chat/completions"; // Standard OpenRouter endpoint

    console.log(`[llmService/OpenRouter] Sending chat request to ${apiUrl} with model ${model}`);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
             // Optional: Add custom headers like HTTP Referer, X-Title if needed
             // 'HTTP-Referer': 'YOUR_SITE_URL',
             // 'X-Title': 'YOUR_SITE_NAME',
        },
        body: JSON.stringify({
            model: model,
            messages: [...history, { role: 'user', content: prompt }],
            stream: true
        }),
    });

     if (!response.ok || !response.body) {
        const errorBody = await response.text().catch(() => "Failed to read error body");
        throw new Error(`OpenRouter API error (${response.status}): ${errorBody}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let done = false;

    // OpenRouter uses Server-Sent Events (SSE) format
    while (!done) {
        const { done: readerDone, value } = await reader.read();
        done = readerDone; // Update loop condition

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep incomplete line

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const dataContent = line.substring(6).trim();
                if (dataContent === '[DONE]') {
                     sendMessage('ollamaResponse', { status: 'done', stats: {} }) // Send simple done message
                       .catch(e => console.error("Failed to send OpenRouter done message:", e));
                     console.log("[llmService/OpenRouter] Stream finished.");
                     break; // Exit inner loop on [DONE]
                }
                 try {
                    const chunk = JSON.parse(dataContent);
                    const content = chunk.choices?.[0]?.delta?.content;
                    if (content) {
                         sendMessage('ollamaResponse', { status: 'chunk', content: content })
                           .catch(e => console.error("Failed to send OpenRouter chunk:", e));
                    }
                     // TODO: Extract OpenRouter usage stats if needed from the stream or final non-streamed response
                } catch (e) {
                     console.error("[llmService/OpenRouter] Failed to parse OpenRouter stream chunk:", dataContent, e);
                }
            }
        }
         if (done && buffer.trim()) { // Handle any remaining buffer after stream closes
             console.warn("[llmService/OpenRouter] Stream ended with unprocessed buffer:", buffer);
         }
    }
}


async function getOllamaEmbeddings(request: EmbeddingRequest): Promise<EmbeddingResponse> {
    const { content, config } = request;
    const ollamaConfig = config as OllamaConfig;

    const model = ollamaConfig.embeddingModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, '');
    const apiUrl = `${endpoint}/api/embeddings`;

    console.log(`[llmService/OllamaEmbed] Requesting embeddings from ${apiUrl} with model ${model}`);

    // Ollama expects a single 'prompt' string, even for multiple embeddings?
    // Let's assume we need to handle arrays by joining or sending one by one.
    // For now, let's require a single string input for simplicity, or throw if array.
    // Or, check Ollama docs - maybe it handles arrays? Assuming single string for now.
    if (Array.isArray(content)) {
         throw new Error("Ollama embedding currently only supports single string input in this implementation.");
         // Or loop and make multiple requests?
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: model,
            prompt: content // Send the single string
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text().catch(() => "Failed to read error body");
        throw new Error(`Ollama Embeddings API error (${response.status}): ${errorBody}`);
    }

    const result = await response.json();

    if (!result.embedding || !Array.isArray(result.embedding)) {
         throw new Error("Invalid response format from Ollama Embeddings API. 'embedding' array not found.");
    }

    // Ollama returns a single embedding vector for the prompt
    return {
        embeddings: [result.embedding] // Wrap in an outer array to match EmbeddingResponse type
    };
}

// TODO: Implement getOpenRouterEmbeddings if needed 