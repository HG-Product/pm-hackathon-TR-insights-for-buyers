import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  // Relative paths so a zipped `dist/` opens correctly from any folder and works on static hosts.
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'persona-it-directors': resolve(__dirname, 'persona-it-directors.html'),
        'persona-cto': resolve(__dirname, 'persona-cto.html'),
        'persona-business-owners': resolve(__dirname, 'persona-business-owners.html'),
        'persona-managers': resolve(__dirname, 'persona-managers.html'),
        'persona-sales': resolve(__dirname, 'persona-sales.html'),
        'persona-executives': resolve(__dirname, 'persona-executives.html'),
        'persona-operations': resolve(__dirname, 'persona-operations.html'),
        'persona-remote': resolve(__dirname, 'persona-remote.html'),
        'question-zoom-cost-value': resolve(__dirname, 'question-zoom-cost-value.html'),
        'question-zoom-reliability': resolve(__dirname, 'question-zoom-reliability.html'),
        'competitive-intelligence': resolve(__dirname, 'competitive-intelligence.html'),
        'geo-dashboard': resolve(__dirname, 'geo-dashboard.html'),
        'monitoring-dashboard': resolve(__dirname, 'monitoring-dashboard.html'),
      }
    }
  }
})
