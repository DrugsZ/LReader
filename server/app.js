const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// const cookieParser = require("cookie-parser");
const { books, isinit } = require("./route");
// const applyMiddlewareAboutWebpack = require("../webpack/compiler");

class Server {
  constructor() {
    this.app = express();
    this.injectMiddleware();
    // if (process.env.NODE_ENV !== "production") {
    //   applyMiddlewareAboutWebpack(this.app);
    // }
    this.injectRoutes();
    this.app.use(bodyParser.urlencoded({ extended: true })); // 通常 POST 内容的格式是 application/x-www-form-urlencoded

    this.app.listen(3000, () => {
      console.log("App is running on http://127.0.0.1:3000/");
    });
  }

  injectMiddleware() {
    const { app } = this;
    // app.use(cookieParser("sessiontest"));
    app.use(
      session({
        secret: "sessiontest", // 与cookieParser中的一致
        resave: true,
        saveUninitialized: true,
      }),
    );
  }

  injectRoutes() {
    const { app } = this;
    app.use("/api/books", books);
    app.use("/api/isinit", isinit);
  }
}

const app = new Server();
