module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    strict: 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true},],
    'react/prefer-stateless-function': 0,
    "linebreak-style": 0,
  },
  plugins: ['react', 'jsx-ally', 'import'],
};
