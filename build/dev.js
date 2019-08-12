const express = require("express");
const { exec } = require("child_process");
const bodyParser = require("body-parser");
const { webpacDevInstance, historyInstance, webpackHotMiddlewareInstance } = require("../webpack/compiler");

const app = express();

// attach to the compiler & the server
// 实现类似于historyApiFallback的功能
app.use(webpacDevInstance);
app.use(historyInstance);
app.use(webpacDevInstance);

app.use(webpackHotMiddlewareInstance);

exec("electron .", (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); // 通常 POST 内容的格式是 application/x-www-form-urlencoded

app.listen(3000, () => {
  console.log("App is running on http://127.0.0.1:3000/");
});
