import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ai-products-store-/',  // GitHub Pages subfolder
  server: {
    port: 5174,
    host: true
  }
});
