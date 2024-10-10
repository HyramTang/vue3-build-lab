import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

const { publicVars } = loadEnv({ prefixes: ['VUE_APP_'] })

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    template: './index.html'
  },
  source: {
    define: publicVars,
    // 指定入口文件
    entry: {
      index: './src/main.js'
    },
    alias: {
      '@': './src'
    }
  }
})
