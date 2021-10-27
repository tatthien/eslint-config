module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  rules: {
    // Import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // Common
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'curly': ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'no-unused-vars': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
