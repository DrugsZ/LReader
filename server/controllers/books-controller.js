const { getBooks, addbooks } = require("../dao/books");

exports.list = (req, res, next) => {
  try {
    const books = getBooks();
    res.status(200).json({
      books,
      message: "",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.addbooks = (req, res, next) => {
  const { books } = req.body;
  if (books) {
    addbooks(books);
    res.status(200).json({
      message: "添加成功",
      success: true,
    });
  } else {
    next(`must have books`);
  }
};

module.exports = exports;
