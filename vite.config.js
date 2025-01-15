import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.png', '**/*.gif', '**/*.jpeg']
})
