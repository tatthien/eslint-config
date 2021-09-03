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
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],

    'no-unused-vars': 'warn',
  },
}
