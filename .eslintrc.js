module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  rules: {
    'linebreak-style': 0,
    // 'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/order': 'off',
    'react/sort-comp': 'off',
    'lines-between-class-members': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'react/no-access-state-in-setstate': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'object-shorthand': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'no-param-reassign': 'off',
  },
};
