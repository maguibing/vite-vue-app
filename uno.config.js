import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
})
