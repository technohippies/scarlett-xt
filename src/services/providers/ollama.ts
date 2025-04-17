import { sendMessage, type OllamaStreamChunk } from '../../../utils/messaging';
import type { OllamaConfig, EmbeddingResponse } from '../llmService';
import type { LLMChatProvider, ProviderStreamChatRequest, LLMEmbeddingProvider, ProviderEmbeddingRequest, ProviderChatCompletionRequest, ChatCompletionResponse } from './types';

// --- Ollama Chat Implementation --- 

async function streamOllamaChat(request: ProviderStreamChatRequest): Promise<void> {
    const { prompt, history = [], config, sendChunk } = request;
    const ollamaConfig = config as OllamaConfig; // Type assertion

    const model = ollamaConfig.chatModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, ''); // Ensure no trailing slash
    const apiUrl = `${endpoint}/api/chat`; // Use Ollama API endpoint

    console.log(`[ollamaProvider] Sending chat request to ${apiUrl} with model ${model}`);

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
                    // Map Ollama's done structure
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
                    console.log("[ollamaProvider] Stream finished.", responseChunk.stats);
                }

                if (responseChunk) {
                   sendChunk(responseChunk); // Use the callback
                }

            } catch (e) {
                console.error("[ollamaProvider] Failed to parse Ollama stream chunk:", line, e);
            }
        }
    }
     if (buffer.trim()) {
         console.warn("[ollamaProvider] Stream ended with unprocessed buffer:", buffer);
     }
}

// --- Ollama Chat Completion (Non-Streaming) --- 

async function ollamaChatCompletion(request: ProviderChatCompletionRequest): Promise<ChatCompletionResponse | null> {
    const { prompt, history = [], config } = request;
    const ollamaConfig = config as OllamaConfig;

    const model = ollamaConfig.chatModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, '');
    const apiUrl = `${endpoint}/api/chat`;

    console.log(`[ollamaProvider] Sending NON-STREAMING chat request to ${apiUrl} with model ${model}`);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: model,
                messages: [...history, { role: 'user', content: prompt }],
                stream: false // Explicitly set stream to false
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text().catch(() => "Failed to read error body");
            console.error(`[ollamaProvider] Chat Completion API error (${response.status}): ${errorBody}`);
            return null; // Return null on API error
        }

        const result = await response.json();

        // Validate the response structure
        if (!result.message || typeof result.message.content !== 'string') {
             console.error("[ollamaProvider] Invalid response format from Ollama Chat API (non-streaming). 'message.content' not found or not a string.", result);
             return null;
        }

        console.log("[ollamaProvider] Received non-streaming response:", result);
        
        // Map to the standard ChatCompletionResponse format
        return {
            message: {
                role: 'assistant', // Assume role is assistant
                content: result.message.content,
            },
            usage: {
                 prompt_tokens: result.prompt_eval_count,
                 completion_tokens: result.eval_count,
                 // total_tokens: result.?, // Ollama might not provide total directly in non-stream
            }
            // Include other fields if needed
        };

    } catch (error) {
         console.error("[ollamaProvider] Network or parsing error during chat completion:", error);
         return null; // Return null on fetch/parse error
    }
}

// --- Ollama Embedding Implementation --- 

async function getOllamaEmbeddings(request: ProviderEmbeddingRequest): Promise<EmbeddingResponse> {
    const { content, config } = request;
    const ollamaConfig = config as OllamaConfig;

    if (!ollamaConfig.embeddingModel) { // Double check, though service layer should also check
         throw new Error("Ollama configuration missing required embeddingModel.");
    }

    const model = ollamaConfig.embeddingModel;
    const endpoint = ollamaConfig.endpoint.replace(/\/$/, '');
    const apiUrl = `${endpoint}/api/embeddings`;

    console.log(`[ollamaProvider] Requesting embeddings from ${apiUrl} with model ${model}`);

    if (Array.isArray(content)) {
         throw new Error("Ollama embedding currently only supports single string input in this implementation.");
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: model,
            prompt: content 
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

    return {
        embeddings: [result.embedding] 
    };
}

// Export the provider object adhering to the interfaces
export const ollamaProvider: LLMChatProvider & LLMEmbeddingProvider = {
    providerId: 'ollama',
    streamChat: streamOllamaChat,
    chatCompletion: ollamaChatCompletion,
    getEmbeddings: getOllamaEmbeddings,
}; 