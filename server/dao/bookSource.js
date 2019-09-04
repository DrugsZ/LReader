const bookDb = require("./bookDb");

exports.initBookSource = () =>
  bookDb.defaults({
    bookSources: [],
  });

exports.getBookSources = () => bookDb.get("bookSources").values();

module.exports = exports;
