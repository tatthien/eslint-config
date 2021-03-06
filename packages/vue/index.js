module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@tatthien/eslint-config-ts'
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off'
  }
}
