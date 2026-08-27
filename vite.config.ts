// Vite configuration for Crooked Pantry.
//
// This file keeps the app runnable in development and production with a
// mobile-first React + TypeScript setup. It intentionally avoids Node-only
// imports so the config stays simple and easy to type-check.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // React plugin for fast refresh in development and JSX/TSX transforms.
  plugins: [react()],

  // Serve on all local network interfaces so phones on the same Wi-Fi can
  // open the dev server and test device motion / shake behavior.
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: false,
  },

  // Preview server used after `npm run build` to test the production bundle
  // on a mobile device.
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
  },

  // Production build settings.
  build: {
    outDir: 'dist',
    target: 'es2020',
    sourcemap: false,
    cssMinify: true,
    assetsInlineLimit: 4096,
  },

  // Small developer ergonomics:
  // - Clear console on full page reload.
  // - Keep HMR working when the app is opened from another device.
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});