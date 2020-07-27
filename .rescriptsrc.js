module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              'components': './src/components',
              'data': './src/data',
              'svg': './src/data/SVG',
              'store': './src/store',
              'pages': './src/pages',
              'layouts': './src/layouts',
              'mod': './src/modules',
              'utils': './src/utils',
            },
          },
        ],
      ],
    },
  ],
  [
    'use-eslint-config',
    {
      extends: ['airbnb'], // 'airbnb' || 'react-app' or any other config
    },
  ],
]