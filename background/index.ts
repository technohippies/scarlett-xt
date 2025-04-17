import browser from 'webextension-polyfill';
import { setupContextMenus } from './contextMenus';
import { initializeDb, queryDb } from '../utils/db'; // Assuming this was correct

// Try relative path from src/background/ to src/services/
import {
  streamChatResponse,
  generateFlashcardContentFromText,
  getEmbeddings, // Assuming getEmbeddings is also used
  translateText // Import the new function
} from '../services/llmService'; 

// ... (database initialization, context menu setup)

// --- Message Listeners ---

browser.runtime.onMessage.addListener(async (message, sender) => {
  console.log('[background] Received message:', message.type, 'Data:', message.data);

  try {
    switch (message.type) {
      // ... (existing cases like 'streamOllamaRequest', 'generateFlashcardContent', 'queryDb', etc.)

      case 'generateFlashcardContent':
        if (!message.data?.text) throw new Error('Missing text for flashcard generation');
        return await generateFlashcardContentFromText(message.data.text);

      // --- Add New Case for Translation ---
      case 'translateText':
        if (!message.data?.text) throw new Error('Missing text for translation');
        if (!message.data?.targetLanguage) throw new Error('Missing target language for translation');
        return await translateText(message.data.text, message.data.targetLanguage);
        
      case 'getEmbeddings':
         if (!message.data?.content || !message.data?.config) throw new Error('Missing content or config for embeddings');
         // Ensure config is passed correctly if needed by getEmbeddings
         return await getEmbeddings({ content: message.data.content, config: message.data.config });

      // ... (other cases)

      default:
        console.warn(`[background] Unknown message type received: ${message.type}`);
        return { status: 'error', message: 'Unknown message type' };
    }
  } catch (error: any) {
    console.error(`[background] Error processing message ${message.type}:`, error);
    // Send back a structured error
    return {
      status: 'error',
      message: error.message || 'An unknown error occurred',
      error: error // Optionally include the full error
    };
  }
});

console.log('[background] Service worker started and message listener added.'); 