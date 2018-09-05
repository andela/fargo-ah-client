const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanPlugin = new CleanWebpackPlugin(['dist']);
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

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
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'url-loader?limit=5000',
      // },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'src/img/[hash]-[name].[ext]',
          },
        }],

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
