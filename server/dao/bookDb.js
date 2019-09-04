const low = require("lowdb");

const FileAsync = require("lowdb/adapters/FileAsync");

const adapter = new FileAsync("booksource.json");
const bookDb = low(adapter);

module.exports = bookDb;
