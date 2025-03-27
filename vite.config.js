import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/movieapp",
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});