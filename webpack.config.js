const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
<<<<<<< HEAD
        options: { presets: ['env', 'react'] },
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
=======
        options: { presets: ['env', 'react', 'stage-2'] },
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
<<<<<<< HEAD
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
=======
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=5000&mimetype=application/font-woff',
>>>>>>> ft(HeaderCard): Create the header card components
>>>>>>> ft(HeaderCard): Create the header card components
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
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin],
};
