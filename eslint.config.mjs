import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parserOptions: {
    ecmaVersion: 'latest', 
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
   
  },
});