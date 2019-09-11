const bookDb = require("./bookDb");

exports.initBookSource = () =>
  bookDb
    .defaults({
      bookSources: [],
    })
    .write();

exports.getBookSources = () => bookDb.get("bookSources").values();

module.exports = exports;
