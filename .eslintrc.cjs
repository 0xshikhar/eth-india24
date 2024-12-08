module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'xo/browser',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  rules: {
    indent: 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
