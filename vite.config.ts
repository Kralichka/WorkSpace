import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Генерировать manifest для отладки
    manifest: true,
    // Оптимизация chunk'ов
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['axios', 'lodash']
        }
      }
    }
  },
  resolve: {
    alias: {
      'date-fns/locale/ru': path.resolve(__dirname, 'node_modules/date-fns/locale/ru'),
    },
  },
  //   server: {
  //   host: '0.0.0.0',  // Добавьте это
  //   port: 5173,
  //   strictPort: true,
  //   watch: {
  //     usePolling: true  // Для Docker
  //   }
  // }
})
