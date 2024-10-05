import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import { createHtmlPlugin } from 'vite-plugin-html'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    // vueDevTools(),
    // docs: https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md
    createHtmlPlugin({
      minify: false,
      entry: 'src/main.js',
      template: 'index.html',
      inject: {
        data: {
          title: pkg.name,
          injectScript: [
            `<script src="https://unpkg.com/vconsole@3.15.1/dist/vconsole.min.js"></script>`
            // `<script src="/hello.js"></script>`
          ].join('\n')
        }
      }
    })
  ]
})
