import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/toast.ts',
      formats: ['es', 'umd'],
      name: 'PalmToast',
      fileName: (format) => `toast.${format === 'es' ? 'mjs' : 'umd.js'}`,
    },
  },
  server: {
    open: './demo/index.html',
  },
})
