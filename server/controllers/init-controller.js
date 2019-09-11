const { isInit, setInitStatus } = require("../dao/user");
const { initBookSource } = require("../dao/bookSource");



const handleInitReq = (req, res) => {
  initBookSource();
  res.status(200).json({
    isInit: Boolean(isInit),
    message: "",
    success: true,
  });
};

module.exports = {
  handleInitReq,
};
