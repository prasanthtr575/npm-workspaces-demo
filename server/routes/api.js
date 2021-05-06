var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({ message: "Hello, testing workapce", status: "success" })
  );
});

module.exports = router;
