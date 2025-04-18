# Scarlett AI: Tutor, Lifecoach, Friend.

[English](README.md) | [简体中文](README.zh.md)
---

Enhance learning, focus, and digital well-being wih Scarlett.

**Features:**
*   **LLM Integration:** Supports Ollama, OpenRouter, and Venice backends.
*   **Web Clipping:** Generate flashcards and cloze deletions from web text for memory and language learning.
*   **Bookmarks:** Save links with context and perform semantic search.
*   **Browser History Analysis:** Categorize browsing activity (addictive, distracting, productive, neutral).
*   **Focus Tracking:** Monitor context switching during work sessions.

**In Progress:**
*   In-browser FSRS flashcard system.
*   Improved chat interface and capabilities.
*   Syncing support for Anki, Obsidian, AnyNote.
*   Secure cloud backup via Lit Protocol.

## Setup

1.  Install dependencies:
    ```sh
    pnpm install
    ```

## Development

*   **Chrome:** Run the development server and load the `dist/` directory as an unpacked extension.
    ```sh
    pnpm dev
    ```
*   **Firefox:** Run the development server for Firefox and load the `dist/` directory as a temporary add-on.
    ```sh
    pnpm dev:firefox
    ```

## Building

*   **Chrome:** Create a production build in the `.output/chrome-mv3` directory.
    ```sh
    pnpm build
    ```
*   **Firefox:** Create a production build in the `.output/firefox-mv3` directory.
    ```sh
    pnpm build:firefox
    ```

## Packaging

*   **Chrome:** Create a zip file for the Chrome Web Store in `.output/chrome-mv3.zip`.
    ```sh
    pnpm zip
    ```
*   **Firefox:** Create a zip file for Firefox Add-ons in `.output/firefox-mv3.zip`.
    ```sh
    pnpm zip:firefox
    ```

## Storybook

Develop and test UI components in isolation using Storybook.

```sh
pnpm storybook
```

*(Optional: See original README notes below regarding manual Storybook setup if needed).*
