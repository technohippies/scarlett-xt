// Types related to model settings

// Structure for storing user configuration for LLM providers
export interface UserConfig {
  provider: string; // e.g., 'ollama', 'openrouter', 'groq', 'lmstudio', 'jan'
  endpoint?: string; // Required for local providers like ollama
  baseUrl?: string; // Added: Base URL for the API (esp. local)
  apiKey?: string; // Required for cloud providers like openrouter, groq
  model?: string; // Added: Generic model name
  chatModel?: string | null; // Kept for potential specific use
  embeddingModel?: string | null;
  htmlMarkdownModel?: string | null;
  enabled?: boolean; // Added: Whether the provider is active
  // Add other provider-specific settings as needed
}

// Generic structure for a model returned by an API or defined locally
export interface Model {
  id: string;
  name: string;
} 