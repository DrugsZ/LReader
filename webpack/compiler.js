const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-Hot-middleware"); // eslint-disable-line import/no-extraneous-dependencies
const history = require("connect-history-api-fallback");
const webpackConfig = require("../build/webpack.base.config");

const compiler = webpack(webpackConfig);
const webpacDevInstance = webpackDevMiddleware(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
  },
});

const historyInstance = history();

const webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

module.exports = {
  webpacDevInstance,
  historyInstance,
  webpackHotMiddlewareInstance,
};
