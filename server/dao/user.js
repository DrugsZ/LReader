const db = require("./db");

/**
 * 标记是否进行过初始化
 */
const isInit = db.get("isInit").value();

const setInitStatus = () =>
  db
    .defaults({
      isInit: true,
      user: {},
      books: [],
    })
    .write();

module.exports = {
  isInit,
  setInitStatus,
};
