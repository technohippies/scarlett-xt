import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
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
  vite: () => ({
    plugins: [tailwindcss()], // Only include tailwind plugin here
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }),
  manifest: {
    default_locale: "en", // Keep default locale
    // Add the background script definition
    background: {
      service_worker: "background.ts",
    },
    // Define the browser action (popup)
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
    // Add the options UI configuration
    options_ui: {
      page: "settings.html",
      open_in_tab: true // Recommended for a welcome/settings page
    },
    // Add the new model selection page (can also be accessed directly if needed)
    // We might change how navigation works later, but define it for now
    // "model-selection": {
    //   "page": "model-selection.html",
    //   "open_in_tab": true
    // },
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
    web_accessible_resources: [
      {
        resources: ['/electric-sql/*'], // Keep this for PGlite dynamic import
        matches: ['<all_urls>'],
      },
      // Add other web_accessible_resources if needed
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
