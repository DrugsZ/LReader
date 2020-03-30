const Webpack = require("webpack");
const { exec } = require("child_process");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.base.config");

process.env.NODE_ENV = "development";

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackConfig.devServer);

server.listen(8080, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:8080");
});

exec("electron .", (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
