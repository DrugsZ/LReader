const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src/main.tsx"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "my-first-webpack.bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: `${__dirname}../dist`,
    open: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
      },
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      CONFIG: path.resolve(`${__dirname}../src/config.json`),
    },
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
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LReader",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
    // new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
};
