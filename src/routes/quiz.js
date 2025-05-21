var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/jogar", function (req, res) {
    quizController.jogar(req, res);
});

module.exports = router;