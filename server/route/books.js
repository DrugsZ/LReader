const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  console.log("request from list");
  res.send("这是书籍列表");
});

router.post("/addbooks", (req, res) => {
  res.send("你要加一本书?");
});

module.exports = router;
