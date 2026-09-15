import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { BASE } from './base.config.mjs'

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [react()],
})
