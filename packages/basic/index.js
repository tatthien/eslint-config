module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'curly': ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],

    'no-unused-vars': 'warn',
  },
}
