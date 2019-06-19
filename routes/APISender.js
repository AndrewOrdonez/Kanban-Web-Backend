var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly 123 test");
});

module.exports = router;