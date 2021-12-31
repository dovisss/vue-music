module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 0,
    'space-before-function-paren': 0, //取消ESLint函数名空号前面加空格的规则校验
    'eol-last': 0, // 取消最后一个空行的规则校验
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
}
}

