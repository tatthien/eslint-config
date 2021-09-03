module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@tatthien/eslint-config-ts'
  ],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off'
  }
}
