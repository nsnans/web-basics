module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
  },
  globals: {
    document: true,
    localStorage: true,
    chrome: true,
  },
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'max-len': 'off',
    // 禁止使用 var
    'no-var': 'error',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-return': 'off',
    'no-extend-native': 'off',
    'no-throw-literal': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': 'off',
    'guard-for-in': 'off',
    'no-lonely-if': 'off',
    'no-shadow': 'off',
    'prefer-const': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-loop-func': 'off',
    'arrow-body-style': 'off',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
  },
}
