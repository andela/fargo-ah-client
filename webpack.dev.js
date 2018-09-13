const merge = require('webpack-merge');
const webpack = require('webpack');
const DotenvConfig = require('dotenv-webpack');
const common = require('./webpack.common');

const HMRPlugin = new webpack.HotModuleReplacementPlugin();


const config = {
  mode: 'development',
  devServer: {
    contentBase: './',
    historyApiFallback: true,
  },
  plugins: [HMRPlugin, new DotenvConfig()],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
    ],
  },
};

module.exports = merge(common, config);
