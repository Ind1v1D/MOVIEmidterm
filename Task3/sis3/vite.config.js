import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built assets work when GitHub Pages serves the
  // app from a subpath: https://ind1v1d.github.io/React-uni/Task3/sis3/
  base: "./",
  plugins: [react()],
})
