const { isInit, setInitStatus } = require("../dao/user");
const { initBookSource } = require("../dao/bookSource");

const handleInitReq = (req, res, next) => {
  try {
    setInitStatus();
    initBookSource();
    res.status(200).json({
      isInit: Boolean(isInit),
      message: "",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleInitReq,
};
