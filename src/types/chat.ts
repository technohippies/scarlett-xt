/** Represents a basic text chat message */
export interface ChatMessage {
  id: string | number; // Unique identifier
  role: 'user' | 'assistant'; // Sender role
  content: string; // Message text content
  isError?: boolean; // Optional flag for error messages
}

// We can expand this later with discriminated unions for other message types
// like bookmarks or flashcards if needed. 