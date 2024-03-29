module.exports = api => {
  api.cache(true);

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
    ],
    plugins: [
      [
        'babel-plugin-root-import',
        { rootPathPrefix: '~/', rootPathSuffix: 'src' },
      ],
    ],
  };
};
