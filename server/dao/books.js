const db = require("./db");

exports.getBooks = () => db.get("books").values();

exports.addbooks = books =>
  db
    .get("books")
    .push(books)
    .write();

module.exports = exports;
