import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  root: resolve(__dirname),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 3000
  },
  plugins: [react()]

})
