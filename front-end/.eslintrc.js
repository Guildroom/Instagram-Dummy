module.exports = {
  env: {
    es6: true
  },
  extends: [
    'standard',
    'plugin:sonarjs/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'sonarjs'
  ],
  rules: {
    'sonarjs/cognitive-complexity': 'error'
  }
}
