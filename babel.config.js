module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          { rootPathSuffix: '.', rootPathPrefix: '/' },
          { rootPathPrefix: './src/components', rootPathSuffix: '~/components/*' },
          { rootPathPrefix: './src/screens', rootPathSuffix: '~/screens/*' },
        ],
      },
    ],
  ],
};
