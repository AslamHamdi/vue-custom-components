/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'happy-dom', 
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/plugin.ts', //path.resolve(__dirname, '/src/plugin.ts'),
      name: 'mindlensComponents'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
})
