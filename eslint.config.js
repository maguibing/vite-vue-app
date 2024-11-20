import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  stylistic: true,
  formatters: true,
  rules: {
    'n/prefer-global/process': 'off',
    'no-undef': 'error',
    'no-fallthrough': 'off',
    'vue/block-order': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/no-unused-refs': 'off',
    // 'antfu/top-level-function': 'off'
  },
})
