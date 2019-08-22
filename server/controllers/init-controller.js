const { isInit, setInitStatus } = require("../dao/user");

const handleInitReq = (req, res) => {
  res.status(200).json({
    isInit: Boolean(isInit),
    message: "",
    success: true,
  });
};

module.exports = {
  handleInitReq,
};
