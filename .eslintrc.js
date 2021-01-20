module.exports = {
  extends: 'eslint-config-wesbos/typescript.js',
  rules: {
    'prefer-const': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'no-use-before-define': 0,
    'lines-between-class-members': 0,
    'import/no-mutable-exports': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
