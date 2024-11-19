import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
  ],
})
