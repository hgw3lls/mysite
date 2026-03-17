import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site URL base.
// Repository name inferred from this repo directory: `mysite`.
export default defineConfig({
  plugins: [react()],
  base: '/mysite/',
})
