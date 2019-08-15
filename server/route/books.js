const express = require("express");
const books = require("../controllers/books-controller");

const router = express.Router();

router.get("/list", books.list);

router.post("/addbooks", books.addbooks);

module.exports = router;
