const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src/App.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js|\.ts|\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LReader",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
};
