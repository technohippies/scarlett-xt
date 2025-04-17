import type { GroqConfig } from '../llmService';
import type { LLMChatProvider, ProviderStreamChatRequest } from './types';
import type { OllamaStreamChunk } from '../../../utils/messaging'; // Use the shared chunk type

// --- Groq Chat Implementation --- 

async function streamGroqChat(request: ProviderStreamChatRequest): Promise<void> {
    const { prompt, history = [], config, sendChunk } = request;
    const groqConfig = config as GroqConfig; // Type assertion

    const model = groqConfig.chatModel;
    const apiKey = groqConfig.apiKey;
    // Use v1 completions endpoint
    const apiUrl = "https://api.groq.com/openai/v1/chat/completions"; 

    console.log(`[groqProvider] Sending chat request to ${apiUrl} with model ${model}`);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            messages: [...history, { role: 'user', content: prompt }],
            stream: true
            // Optional: Add temperature, max_tokens, etc. if needed later
        }),
    });

     if (!response.ok || !response.body) {
        const errorBody = await response.text().catch(() => "Failed to read error body");
        throw new Error(`Groq API error (${response.status}): ${errorBody}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let done = false;

    // Groq uses the same Server-Sent Events (SSE) format as OpenAI/OpenRouter
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
                     console.log("[groqProvider] Stream finished.");
                     done = true; 
                     break; 
                }
                 try {
                    const chunk = JSON.parse(dataContent);
                    const content = chunk.choices?.[0]?.delta?.content;
                    if (content) {
                        sendChunk({ status: 'chunk', content: content });
                    }
                    // TODO: Extract Groq usage stats if needed (check API docs)
                } catch (e) {
                     console.error("[groqProvider] Failed to parse stream chunk:", dataContent, e);
                }
            }
        }
    }
    if (buffer.trim()) { 
        console.warn("[groqProvider] Stream ended with unprocessed buffer:", buffer);
    }
}

// Export the provider object adhering to the interface
export const groqProvider: LLMChatProvider = {
    streamChat: streamGroqChat,
    // Groq does not currently have embedding models
}; 