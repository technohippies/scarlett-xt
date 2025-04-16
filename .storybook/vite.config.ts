import { defineConfig } from "vite";
import { WxtVitest } from "wxt/testing";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // Add all the vite config from your wxt.config.ts, including the built-in
    // plugins and config WXT sets up automatically.
    // WxtVitest(), // Temporarily commented out
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
});
