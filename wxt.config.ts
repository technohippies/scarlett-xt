import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
// Removed path import
// import PgliteFilesModule from './modules/pglite-files.ts.disabled'; // Keep module commented/disabled

// See https://wxt.dev/api/config.html
export default defineConfig({
  // modules: ["@wxt-dev/module-react"], // Removed framework module
  vite: () => ({
    plugins: [tailwindcss()], // Only include tailwind plugin here
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }),
  manifest: {
    permissions: [
      "storage",
      "offscreen",
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
    startUrls: ["https://x.com"],
  },
});
