const express = require("express");
const bodyParser = require("body-parser");
const { books } = require("./route");
const applyMiddlewareAboutWebpack = require("../webpack/compiler");

class Server {
  constructor() {
    this.app = express();
    if (process.env.NODE_ENV !== "production") {
      applyMiddlewareAboutWebpack(this.app);
    }
    this.injectRoutes();
    this.app.use(bodyParser.urlencoded({ extended: true })); // 通常 POST 内容的格式是 application/x-www-form-urlencoded

    this.app.listen(3000, () => {
      console.log("App is running on http://127.0.0.1:3000/");
    });
  }

  // injectMiddleware() {}

  injectRoutes() {
    const { app } = this;
    app.use("/books", books);
  }
}

const app = new Server();
