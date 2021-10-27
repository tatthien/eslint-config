module.exports = {
  extends: [
    '@tatthien/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/named': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
}
