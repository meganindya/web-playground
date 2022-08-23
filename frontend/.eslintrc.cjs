/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
        '../.eslintrc.js'
    ],

    env: {
        'vue/setup-compiler-macros': true
    },

    rules: {
        'max-len': 'off',
        'vue/max-len': [
            'warn',
            {
                code: 100,
                template: 100,
                tabWidth: 2,
                comments: 100,
                ignorePattern: '',
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true
            }
        ]
    },

    overrides: [
        {
            files: [
                'cypress/integration/**.spec.{js,ts,jsx,tsx}',
                'cypress/plugins/**.{js,ts,jsx,tsx}'
            ],
            extends: ['plugin:cypress/recommended']
        }
    ]
};
