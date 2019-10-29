module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   'extends': [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   rules: {
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     // 不检测语句末尾的分号
//     'semi': ['off', 'always'],
//     // 强制缩进为2个空格
//     'indent': ['error', 2],
//     // 关闭函数名称跟括号之间的空格检测
//     'space-before-function-paren': 0,
//     // 忽略大括号内的空格
//     'object-curly-spacing': 0
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   }
// }