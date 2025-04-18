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

## ElectricSQL / PGlite Workaround

**Issue:** The WASM files required by `@electric-sql/pglite` are not correctly handled by WXT's default build process.

**Workaround:** Necessary `@electric-sql/pglite` files (JS, WASM, data, chunks, vector, worker) are manually copied into the `public/@electric-sql/pglite/` directory. This ensures they are included in the final extension build, although it bypasses standard dependency management for these specific files.

*(See original README notes below for the specific `cp` commands used).*

---

***Original Notes (for reference):***

*Storybook Manual Setup Steps (if `pnpm storybook` doesn't work initially):*
1. Create the `.storybook/vite.config.ts` file from this example
2. Install the vite builder: `pnpm i @storybook/builder-vite`
3. Run `storybook init` like usual: `pnpm dlx storybook@latest init`
4. Update `.storybook/main.ts` to use `./.storybook/vite.config.ts`:
   ```diff
   framework: {
     name: "@storybook/react-vite",
     options: {
   +   builder: {
   +     viteConfigPath: ".storybook/vite.config.ts",
   +   },
     },
   },
   ```

*ElectricSQL Manual Copy Commands:*
```sh
# Note: Paths were absolute in the original, adapt if necessary
TARGET_DIR="./public/@electric-sql/pglite"
SOURCE_DIR="./node_modules/@electric-sql/pglite"
mkdir -p "$TARGET_DIR"
cp "$SOURCE_DIR/index.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/postgres.wasm" "$TARGET_DIR/"
cp "$SOURCE_DIR/postgres.data" "$TARGET_DIR/"
cp "$SOURCE_DIR/chunk-*.js" "$TARGET_DIR/"
cp -R "$SOURCE_DIR/vector" "$TARGET_DIR/"
cp -R "$SOURCE_DIR/worker" "$TARGET_DIR/"
cp "$SOURCE_DIR/templating.js" "$TARGET_DIR/"
```
