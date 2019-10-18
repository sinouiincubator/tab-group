module.exports = ({ config }) => {
  const babelConfig = require('babel-preset-ts-lib/dev')();

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: babelConfig,
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
