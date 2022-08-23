module.exports = {
    root: true,

    env: {
        node: true
    },

    parserOptions: {
        ecmaVersion: 2020
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'semi': ['error', 'always'],
        'prefer-const': ['off'],
        'max-len': [
            'warn',
            {
                code: 100,
                ignoreTrailingComments: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
                ignoreComments: true
            }
        ],
        'no-duplicate-case': 'error',
        'no-irregular-whitespace': 'warn'
    },

    extends: ['eslint:recommended']
};
