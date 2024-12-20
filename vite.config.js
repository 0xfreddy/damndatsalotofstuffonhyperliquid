import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this import to resolve paths

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias setup for '@' to map to 'src'
    },
  },
});
