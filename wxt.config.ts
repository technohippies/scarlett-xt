import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
// Import searchRoot from vite
import { searchForWorkspaceRoot } from 'vite';
// Removed path import
// import PgliteFilesModule from './modules/pglite-files.ts.disabled'; // Keep module commented/disabled

// See https://wxt.dev/api/config.html
export default defineConfig({
  // srcDir: 'entrypoints', // Remove this - WXT defaults to ./entrypoints and this might cause path issues
  // modules: [
    // Add the React module explicitly
    // '/@wxt-dev/module-react', // <<< Remove this again
    // Uncomment i18n module if needed later
    // "@wxt-dev/i18n/module"
  // ], // Remove or comment out modules array if empty
  vite: (env) => ({
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
    // Remove server config allow section
    // server: {
    //   fs: {
    //     allow: [
    //       searchForWorkspaceRoot(process.cwd()),
    //     ],
    //   },
    // },
    // assetsInclude: ["**/*.wasm", "**/*.data"], // Keep commented out unless needed
  }),
  manifest: {
    // // Explicitly define entrypoints within manifest instead of relying solely on implicit discovery
    // // entrypoints: { // <<< REMOVED, reverting to options_ui
    // //   settings: {
    // //     // Points to entrypoints/settings/index.html
    // //     // WXT should automatically find entrypoints/settings/index.tsx
    // //     page: "settings.html", // Use the HTML filename here
    // //     options: {
    // //       // These options are typically used for options_ui pages
    // //       openInTab: true,
    // //       browserStyle: false, // Set to false if you are using custom styling (like Tailwind)
    // //     }
    // //   },
    // //   // Define other entrypoints like popup, background, newtab explicitly here if needed
    // //   // Example:
    // //   // popup: { page: "popup.html" },
    // //   // background: { background: true }, // Assuming background.ts exists in entrypoints/
    // //   // newtab: { page: "newtab.html" },
    // // },
    // // --- Add offscreen document definition --- 
    // offscreen: {
    //   // Points to entrypoints/offscreen/offscreen.html
    //   // WXT should bundle entrypoints/offscreen/offscreen.ts as its script
    //   page: "offscreen.html", 
    // },
    // // -----------------------------------------
    default_locale: "en", // Keep default locale
    // Add the background script definition (can be omitted if defined in entrypoints above)
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
