module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      js: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
};
