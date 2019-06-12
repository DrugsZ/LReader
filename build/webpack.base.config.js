const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

console.log(__dirname);

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LReader',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,
    }),
    new CleanWebpackPlugin(),
  ],
};
