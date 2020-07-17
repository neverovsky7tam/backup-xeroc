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
              'templates': './src/templates',
              'utils': './src/utils',
            },
          },
        ],
      ],
    },
  ],
]