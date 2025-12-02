import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'   // official Vite plugin for Tailwind v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // <- เรียกเป็นฟังก์ชันแบบนี้
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
