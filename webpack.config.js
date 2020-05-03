const path = require("path");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './'
  },
  devtool: false,
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          subtitle: error.file || '',
        });
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('babelrc.js')
          }
        },
        exclude: /node_modules/
      }
    ]
  },
};
