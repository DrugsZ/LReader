const { isInit, setInitStatus } = require("../dao/user");

const handleInitReq = (req, res) => {
  if (!isInit) {
    setInitStatus();
  }

  res.send(`create success`);
};

module.exports = {
  handleInitReq,
};
