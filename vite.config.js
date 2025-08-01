import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ Important for Render deployment to resolve paths correctly
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
