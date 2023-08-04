module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 1,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
