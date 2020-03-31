const chalk = require("chalk");
const Webpack = require("webpack");
const { spawn } = require("child_process");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.base.config");

process.env.NODE_ENV = "development";

const electronLog = (data, color) => {
  const log = data.toString();
  if (/[0-9A-z]+/.test(log)) {
    console.log(chalk[color](log));
  }
};

const startRender = () => {
  return new Promise((reslove, reject) => {
    const compiler = Webpack(webpackConfig);
    const server = new WebpackDevServer(compiler, webpackConfig.devServer);

    server.listen(8080, "127.0.0.1", () => {
      console.log("Starting server on http://localhost:8080");
      reslove();
    });
  });
};

const startElectron = () => {
  const electronProcess = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "electron"]);
  electronProcess.stdout.on("data", data => {
    electronLog(data, "blue");
  });
  electronProcess.stderr.on("data", data => {
    electronLog(data, "red");
  });

  electronProcess.on("close", () => {
    process.exit();
  });
};

startRender().then(() => {
  startElectron();
});
