import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      // Multi-page build: the technology portfolio and the separate school page.
      input: {
        main: 'index.html',
        school: 'school.html'
      }
    }
  }
});
