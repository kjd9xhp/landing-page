import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'antd-vendor': ['antd']
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd']
  }
})
