module.exports = {
    root: true,

    env: {
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
    },

    rules: {
        'semi': ['error', 'always'],
        'prefer-const': ['off'],
        'max-len': [
            'warn',
            {
                code: 100,
                ignoreTrailingComments: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-duplicate-case': 'error',
        'no-irregular-whitespace': 'warn',
        'no-mixed-spaces-and-tabs': 'error',
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-use-before-define': ['error', 'nofunc'],
    },

    extends: ['eslint:recommended'],

    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
            rules: {
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
                '@typescript-eslint/ban-ts-comment': 'warn',
                'comma-dangle': 'off',
                '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
            },
        },
    ],
};
