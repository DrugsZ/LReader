const { initBookSource, getBookSources } = require("../dao/bookSource");

exports.initBookSource = (req, res, next) => {
  try {
    const books = initBookSource();
    res.status(200).json({
      books,
      message: "",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookSources = (req, res, next) => {
  try {
    const bookSources = getBookSources();
    res.status(200).json({
      content: {
        bookSources,
      },
      message: "",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = exports;
