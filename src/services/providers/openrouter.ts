import { sendMessage, type OllamaStreamChunk } from '../../../utils/messaging';
import type { OpenRouterConfig } from '../llmService';
import type { LLMChatProvider, ProviderStreamChatRequest } from './types';

// --- OpenRouter Chat Implementation --- 

async function streamOpenRouterChat(request: ProviderStreamChatRequest): Promise<void> {
    const { prompt, history = [], config, sendChunk } = request;
    const openRouterConfig = config as OpenRouterConfig; // Type assertion

    const model = openRouterConfig.chatModel;
    const apiKey = openRouterConfig.apiKey;
    const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

    console.log(`[openRouterProvider] Sending chat request to ${apiUrl} with model ${model}`);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            // TODO: Consider adding these headers if desired
            // 'HTTP-Referer': '', // YOUR_SITE_URL
            // 'X-Title': '', // YOUR_SITE_NAME
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
        done = readerDone;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const dataContent = line.substring(6).trim();
                if (dataContent === '[DONE]') {
                     sendChunk({ status: 'done', stats: {} }); // Send simple done message
                     console.log("[openRouterProvider] Stream finished.");
                     done = true; // Ensure outer loop terminates
                     break; // Exit inner loop
                }
                 try {
                    const chunk = JSON.parse(dataContent);
                    const content = chunk.choices?.[0]?.delta?.content;
                    if (content) {
                        sendChunk({ status: 'chunk', content: content });
                    }
                    // TODO: Extract usage stats if needed?
                } catch (e) {
                     console.error("[openRouterProvider] Failed to parse stream chunk:", dataContent, e);
                }
            }
        }
    }
    if (buffer.trim()) { 
        console.warn("[openRouterProvider] Stream ended with unprocessed buffer:", buffer);
    }
}

// Export the provider object adhering to the interface
export const openRouterProvider: LLMChatProvider = {
    streamChat: streamOpenRouterChat,
    // No getEmbeddings for OpenRouter in this example yet
}; 