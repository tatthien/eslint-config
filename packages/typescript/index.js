module.exports = {
  extends: [
    '@tatthien/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/named': 'off',

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
}
