/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TsconfigPaths = require('tsconfig-paths-webpack-plugin');

const tsConfigFile = path.join(__dirname, '../tsconfig.json');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsconfigPaths({
          configFile: tsConfigFile,
        }),
      ],
    },
    watchOptions: {
      ignored: ['node_modules', 'dist', '.cache', 'coverage', '.docz'],
    },
  });
};
