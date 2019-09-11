const { getBookSources } = require("../dao/bookSource");

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
