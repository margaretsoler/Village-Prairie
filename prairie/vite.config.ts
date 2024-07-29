import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' if you need to access from other devices
    port: 3000,
    watch: {
      usePolling: true, // Use polling to watch for file changes
    },
    hmr: {
      protocol: 'ws', // Ensure WebSocket protocol is used for HMR
      host: 'localhost',
    },
  },
})
