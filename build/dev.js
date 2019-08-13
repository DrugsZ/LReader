process.env.NODE_ENV = "development";
// const { exec } = require("child_process");
const { exec } = require("child_process");
require("../server/app");

exec("electron .", (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
