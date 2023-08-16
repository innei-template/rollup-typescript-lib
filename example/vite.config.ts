import { resolve } from 'path'
import unoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { presetAttributify, presetWind } from 'unocss'

export default defineConfig({
  base: '',
  plugins: [
    unoCSS({
      presets: [
        presetWind({
          dark: 'media',
        }),
        presetAttributify(),
      ],
    }),
    tsconfigPaths({
      projects: [resolve(__dirname, './tsconfig.json')],
    }),
  ],
  // root: resolve(__dirname, './example'),
  optimizeDeps: {
    include: ['my-awesome-lib'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
      },
    },
  },
})
