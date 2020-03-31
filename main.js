const { app, BrowserWindow } = require("electron");

let win = null;

const isDEV = process.env.NODE_ENV === "development";
const createWin = () => {
  if (isDEV) {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL("http://127.0.0.1:8080/");
    win.webContents.openDevTools();
  }
};
app.on("ready", createWin);
