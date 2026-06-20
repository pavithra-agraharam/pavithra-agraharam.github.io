import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (pavithra-agraharam.github.io) serves from root, so base = '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
