/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts'

export default defineConfig({
  test: {
    environment: 'happy-dom', 
  },
  plugins: [vue()], //, dts()
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
