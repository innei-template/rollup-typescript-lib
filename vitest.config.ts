import tsPath from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    include: ['src/__tests__/**/*.(spec|test).ts'],
  },
  plugins: [tsPath()],
})
