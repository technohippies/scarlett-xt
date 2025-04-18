-- Enable pgvector extension if not already enabled
CREATE EXTENSION IF NOT EXISTS vector;

-- Remove old tables if they exist
DROP TABLE IF EXISTS clips;
DROP TABLE IF EXISTS test_items;

-- Table for bookmarks
CREATE TABLE IF NOT EXISTS bookmarks (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    url TEXT NOT NULL UNIQUE, -- Keep URL unique for bookmarks
    title TEXT,             -- Page title
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tags TEXT NULL,         -- Comma-separated tags or JSON array
    embedding TEXT NULL -- Temporarily change to TEXT to avoid vector type error
    -- embedding vector(1024) NULL -- Use vector type (adjust dimension if needed)
);

-- Table for flashcards
CREATE TABLE IF NOT EXISTS flashcards (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    type TEXT NOT NULL CHECK(type IN ('front_back', 'cloze')), -- 'front_back' or 'cloze'
    front TEXT NULL,        -- Front content (for front_back type)
    back TEXT NULL,         -- Back content (for front_back type)
    cloze_text TEXT NULL,   -- Text with cloze deletion (for cloze type)
    source_url TEXT,        -- URL of the page where the card was generated
    source_highlight TEXT,  -- The original highlighted text
    source_language TEXT NULL, -- e.g., 'en'
    target_language TEXT NULL, -- e.g., 'zh-CN' for translation cards
    context TEXT NULL,      -- Optional surrounding text for context
    tags TEXT NULL,         -- Comma-separated tags or JSON array
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- FSRS related fields (initialized with defaults based on ts-fsrs Card type)
    due TIMESTAMP,          -- Next review date (Consider setting default to created_at)
    stability REAL DEFAULT 0,
    difficulty REAL DEFAULT 0,
    elapsed_days INTEGER DEFAULT 0,
    scheduled_days INTEGER DEFAULT 0,
    reps INTEGER DEFAULT 0,
    lapses INTEGER DEFAULT 0,
    state TEXT CHECK(state IN ('New', 'Learning', 'Review', 'Relearning')) DEFAULT 'New', -- From ts-fsrs State enum
    last_review TIMESTAMP NULL
);

-- Table for chat messages (including references to bookmarks/flashcards)
CREATE TABLE IF NOT EXISTS chat_messages (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    role TEXT NOT NULL CHECK(role IN ('user', 'assistant', 'system', 'bookmark', 'flashcard')), -- Added 'bookmark', 'flashcard' roles
    content TEXT NULL, -- Text content for user/assistant/system messages
    embedding vector(768) NULL, -- Add vector embedding column (adjust dimension as needed)
    bookmark_id INTEGER NULL REFERENCES bookmarks(id) ON DELETE SET NULL, -- Link to a bookmark if role='bookmark'
    flashcard_id INTEGER NULL REFERENCES flashcards(id) ON DELETE SET NULL, -- Link to a flashcard if role='flashcard'
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- thread_id INTEGER -- Placeholder for future threading
);

-- Table for storing user LLM/Provider configuration (single row)
CREATE TABLE IF NOT EXISTS user_configuration (
    id INTEGER PRIMARY KEY DEFAULT 1, -- Ensure only one row
    config_json TEXT NOT NULL,
    api_key TEXT NULL, -- Add nullable column for API keys (e.g., OpenRouter)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Index for faster flashcard lookups by due date
CREATE INDEX IF NOT EXISTS idx_flashcards_due ON flashcards(due);

-- Optional: Index for chat message timestamps
CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages(timestamp);

-- Optional: Index for vector similarity search on chat messages
CREATE INDEX IF NOT EXISTS idx_chat_messages_embedding ON chat_messages USING hnsw (embedding vector_cosine_ops);

-- Optional: Index for vector similarity search on bookmarks -- Temporarily disabled
-- CREATE INDEX IF NOT EXISTS idx_bookmarks_embedding ON bookmarks USING hnsw (embedding vector_cosine_ops);