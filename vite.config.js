import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',
  // Avoid bundling native fsevents module in the browser build
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  ssr: {
    external: ['fsevents'],
  },
})
