import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      imports: [
        // 'vue',
        // 'vue-router',
      ],
      dts: false,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [NaiveUiResolver(), ElementPlusResolver()],
      dts: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 单纯为了控制台不报错 scss
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
