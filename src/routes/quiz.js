var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/finalizar", function (req, res) {
    quizController.finalizar(req, res);
});

router.get("/verGrafico1/:idUsuario", function (req, res) {
    quizController.verGrafico1(req, res);
});

router.get("/verGrafico2/:idUsuario", function (req, res) {
    quizController.verGrafico2(req, res);
});

router.get("/verGrafico3/:idUsuario", function (req, res) {
    quizController.verGrafico3(req, res);
});

module.exports = router;