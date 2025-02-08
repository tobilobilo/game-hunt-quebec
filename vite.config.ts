import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/carnet-gaming-quebec/' : '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern",
        additionalData: `
          @use "/src/assets/styles/variables.scss" as *;
          @use "/src/assets/styles/mixins.scss" as *;
          @use "/src/assets/styles/fonts.scss" as *;
        `
      }
    }
  },
})
