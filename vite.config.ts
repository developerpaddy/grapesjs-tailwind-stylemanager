import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: 'src/main.js', // Entry point for the library
      name: 'GrapesjsTailwindSM', // Global variable name for UMD build
      fileName: (format) => `grapesjs-tailwind-sm.${format}.js`
    },
    rollupOptions: {
      external: ['grapesjs'], // Don't bundle GrapesJS, assume it's available
      output: {
        globals: {
          grapesjs: 'grapesjs' // Reference GrapesJS in the global scope
        }
      }
    }
  },
  server: {
    open: true, // Auto open browser in dev mode
    cors: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }
})