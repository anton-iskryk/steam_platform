module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@mate-academy/eslint-config-react',
    // 'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
};
