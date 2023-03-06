module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'space-before-function-paren': ['error', 'never'],
    'quote-props': 'off',
    'quotes': 'off',
    'spaced-comment': 'off',
    'no-multiple-empty-lines': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'comma-dangle': 'warn',
    'vue/singleline-html-element-content-newline': 'off',
    'semi': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1,
      'ignores': [],
      'indent': 'off'
    }]
    //'allowTemplateLiterals': true
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}


// Example of disabling eslint for a block of code:
/*eslint-disable */
/*eslint-enable */
