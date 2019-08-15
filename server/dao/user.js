const low = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

/**
 * 标记是否进行过初始化
 */
const isInit = db.get("isInit").value();

const setInitStatus = () => db.defaults({ isInit: true, user: {}, books: [] }).write();

module.exports = {
  isInit,
  setInitStatus,
};
