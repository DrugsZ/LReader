const webpack = require("webpack");
// import webpack from "webpack";
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-Hot-middleware"); // eslint-disable-line import/no-extraneous-dependencies
const history = require("connect-history-api-fallback");
const webpackConfig = require("../build/webpack.base.config");

const compiler = webpack(webpackConfig);
const webpacDevInstance = webpackDevMiddleware(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  logLevel: "silent",
  stats: {
    colors: true,
  },
});

const historyInstance = history();

const webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

function applyMiddlewareAboutWebpack(app) {
  // 实现类似于historyApiFallback的功能
  app.use(webpacDevInstance);
  app.use(historyInstance);
  app.use(webpacDevInstance);

  app.use(webpackHotMiddlewareInstance);
}

module.exports = applyMiddlewareAboutWebpack;
