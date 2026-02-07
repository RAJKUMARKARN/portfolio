import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Split large vendor chunks so they load in parallel
    rollupOptions: {
      output: {
        manualChunks: {
          // Spline runtime (~3MB) gets its own chunk - only loaded when 3D scene is needed
          spline: ['@splinetool/react-spline', '@splinetool/runtime'],
          // React core in its own chunk (cached across navigations)
          react: ['react', 'react-dom'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
