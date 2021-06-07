const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactServerWebpackPlugin = require('react-server-dom-webpack/plugin');

const root = path.resolve(__dirname, '..');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(root, './src/index.client.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.resolve(root, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(root, './dist'),
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'rsc-demo',
      template: path.join(root, 'public/index.html'),
      inject: true,
      scriptLoading: 'defer',
    }),
    new ReactServerWebpackPlugin({ isServer: false }),
  ],
};
