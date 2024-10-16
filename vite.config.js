// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any aliases you need here
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        // Add any output configurations if needed
      },
    },
  },
});