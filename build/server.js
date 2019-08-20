const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.base.config");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackConfig.devServer);

server.listen(8080, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:8080");
});
