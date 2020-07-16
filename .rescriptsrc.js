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
              'store': './src/store',
            },
          },
        ],
      ],
    },
  ],
]