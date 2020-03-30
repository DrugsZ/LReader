const { app, BrowserWindow } = require("electron");

let win = null;

app.on("ready", () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL("http://127.0.0.1:8080/");
});
