/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    parser: '@typescript-eslint/parser',

    plugins: ['prettier', '@typescript-eslint'],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        '../.eslintrc.js',
    ],
};
