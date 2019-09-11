const express = require("express");
const { initBookSource, getBookSources } = require("../controllers/bookSourceController");

const router = express.Router();

router.put("/init_list", initBookSource);

router.get("/list", getBookSources);

module.exports = router;
