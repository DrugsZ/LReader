const low = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("booksource.json");
const bookDb = low(adapter);

module.exports = bookDb;
