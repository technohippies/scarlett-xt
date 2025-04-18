import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [tailwindcss()], // Only include tailwind plugin here
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Add optimizeDeps exclude for pglite
    optimizeDeps: {
      exclude: ['@electric-sql/pglite'],
    },
  }),
  manifest: {
    default_locale: "en", // Keep default locale
    background: {
      service_worker: "background.ts",
    },
    // Define the browser action (popup) (can be omitted if defined in entrypoints above)
    action: {
      // default_title is often inferred from popup.html <title> by WXT, but can be set explicitly
      // default_title: "Scarlett Clipper",
      default_popup: "popup.html", // Points to the entrypoint
      default_icon: { // Define the icon sizes here
        16: "/icon/16.png",
        32: "/icon/32.png",
        48: "/icon/48.png",
        128: "/icon/128.png"
      }
    },
    options_ui: { // <<< REINSTATED
      page: "settings.html",
      open_in_tab: true
    },
    chrome_url_overrides: {
      newtab: "newtab.html" // Point to our newtab entrypoint
    },
    permissions: [
      "storage",
      "offscreen",
      "tabs",
      "notifications",
      // Add any other permissions your extension needs back here
    ],
    // --- Add Optional Host Permissions ---
    optional_host_permissions: [
      // Common local LLM endpoints
      "http://localhost:11434/*", // Ollama default
      "http://localhost:1234/*", // LM Studio default
      "http://localhost:8080/*", // Llama.cpp server default
      "http://127.0.0.1:*/",     // Allow other loopback ports
      // Add any other specific local endpoints you might support
    ],
    // --- Optional: Add Optional Permissions ---
    optional_permissions: [
      "history",
    //   "activeTab", // Uncomment if needed later
    //   "alarms"
    ],
    web_accessible_resources: [
      // Remove the specific entry for pglite wasm/data files
      // {
      //   resources: [
      //     "/postgres.wasm", 
      //     "/postgres.data"
      //   ],
      //   matches: ["<all_urls>"], 
      // },
      // Keep other necessary resources if any
      // {
      //   resources: ['assets/*'],
      //   matches: ['<all_urls>']
      // }
    ],
    // Add back other manifest sections like side_panel, action, commands if needed
    content_security_policy: { // Keep CSP for WASM
      extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'; worker-src 'self';",
    },
  },
  webExt: { // Keep startUrls if desired for development
    startUrls: ["https://example.com"],
  },
});
