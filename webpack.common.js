const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const cleanPlugin = new CleanWebpackPlugin(['dist']);
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
const definePlugin = new webpack.DefinePlugin(envKeys);

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true',
        options: { presets: ['env', 'react', 'stage-2'] },
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=5000&mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=5000',
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    cleanPlugin,
    definePlugin,
  ],
  target: 'web',
};
