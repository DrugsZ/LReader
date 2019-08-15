const express = require("express");
const { handleInitReq } = require("../controllers/init-controller");

const router = express.Router();

router.get("/", handleInitReq);

module.exports = router;
