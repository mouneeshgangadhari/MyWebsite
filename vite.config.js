import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-toastify']
  },
  resolve: {
    alias: {
      "@": "/src", // Define alias for easier imports
    },
  },
});
