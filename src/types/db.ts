import { State } from 'ts-fsrs'; // Import the State enum from ts-fsrs

// Matches the 'bookmarks' table
export interface Bookmark {
  id: number;
  url: string;
  title?: string;
  saved_at: string; // ISO string format from DB
  tags?: string; // Comma-separated or JSON string
  embedding?: string | null; // Temporarily TEXT NULL in DB
}

// Matches the 'flashcards' table, integrating FSRS fields
export interface Flashcard {
  id: number;
  type: 'front_back' | 'cloze';
  front?: string;
  back?: string;
  cloze_text?: string;
  source_url?: string;
  source_highlight?: string;
  source_language?: string; // e.g., 'en'
  target_language?: string; // e.g., 'zh-CN'
  context?: string;
  tags?: string; // Comma-separated or JSON string
  created_at: string; // ISO string format

  // FSRS fields - directly map to ts-fsrs Card type where possible
  due: string; // ISO string format from DB (ts-fsrs uses Date)
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  state: State; // Use the imported State enum
  last_review?: string; // ISO string format from DB (ts-fsrs uses Date)
}

// Matches the 'chat_messages' table
export interface ChatMessageDb {
  id: number;
  role: 'user' | 'assistant' | 'system' | 'bookmark' | 'flashcard';
  content?: string; // Text content
  bookmark_id?: number; // FK to bookmarks
  flashcard_id?: number; // FK to flashcards
  timestamp: string; // ISO string format
  // thread_id?: number; // Future use
}

// Optional: A type for the combined chat view, resolving FKs
export type ChatHistoryItem = 
  | { type: 'message', data: ChatMessageDb } // Standard message
  | { type: 'bookmark', message: ChatMessageDb, bookmark: Bookmark } // Bookmark entry
  | { type: 'flashcard', message: ChatMessageDb, flashcard: Flashcard }; // Flashcard entry 