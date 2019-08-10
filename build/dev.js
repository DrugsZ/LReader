// var cookieParser = require('cookie-parser');
const path = require("path");
const express = require("express");
const webpack = require("webpack");

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-Hot-middleware");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const webpackConfig = require("./webpack.base.config");

const app = express();

/** webpack middleware config, 在routes之前 */

const compiler = webpack(webpackConfig);
const webpacDevInstance = webpackDevMiddleware(compiler, {
  // public path should be the same with webpack config
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
  },
});

app.get("/test", (req, res) => {
  res.send("hahahah");
});
// attach to the compiler & the server
// 实现类似于historyApiFallback的功能
app.use(webpacDevInstance);
app.use(history());
app.use(webpacDevInstance);

app.use(webpackHotMiddleware(compiler));

// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); // 通常 POST 内容的格式是 application/x-www-form-urlencoded

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
