import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@style':'/src/style.js',
      '@assets':'/src/assets',
      '@constants':'/src/constants'
      
    }
  }
});
