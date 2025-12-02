import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// IMPORTANT:
// - Set `base` to your repo name if deploying to GitHub Pages:
//   base: '/<REPO-NAME>/'
// - Replace <REPO-NAME> below before building/deploying.
export default defineConfig({
  base: '/my-react-app/', 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
