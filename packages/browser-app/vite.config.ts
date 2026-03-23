import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    // cssInjectedByJs MUST come before federation — otherwise remote CSS doesn't load in shell
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: ({ fileName }: { fileName: string }) =>
        fileName.includes('__federation_expose_'),
    }),
    federation({
      name: 'seh_study',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/components/Dashboard.tsx',
        './Settings': './src/pages/Settings.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.3.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.0' },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: '^2.0.0' },
        'react-redux': { singleton: true, requiredVersion: '^9.0.0' },
        '@carbon/react': { singleton: true, requiredVersion: '^1.67.0' } as any,
      },
    }),
  ],
  server: { port: 3030 },
  preview: { port: 3030 },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
