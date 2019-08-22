const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { books, isinit } = require("./route");

class Server {
  constructor() {
    this.app = express();
    this.injectMiddleware();
    this.injectRoutes();

    this.app.listen(3000, () => {
      console.log("App is running on http://127.0.0.1:3000/");
    });
  }

  injectMiddleware() {
    const { app } = this;
    // 设置session
    app.use(
      session({
        secret: "sessiontest",
        resave: true,
        saveUninitialized: true,
      }),
    );
    // 设置header
    app.all("*", (req, res, next) => {
      if (!req.xhr) {
        next();
        return;
      }
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Connection", "keep-alive");
      next();
    });
    // 参数解析
    this.app.use(bodyParser.json({ limit: "1mb" }));
    this.app.use(bodyParser.urlencoded({ extended: true })); // 通常 POST 内容的格式是 application/x-www-form-urlencoded
  }

  injectRoutes() {
    const { app } = this;
    app.use("/api/books", books);
    app.use("/api/isinit", isinit);
  }
}

const app = new Server();
