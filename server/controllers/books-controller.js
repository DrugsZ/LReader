exports.list = (req, res) => {
  res.send("这是书籍列表");
};

exports.addbooks = (req, res) => {
  res.send("你要加一本书?");
};

module.exports = exports;
