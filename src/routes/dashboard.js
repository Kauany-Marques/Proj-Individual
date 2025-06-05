var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/verGrafico1/:idUsuario", function (req, res) {
    dashboardController.verGrafico1(req, res);
});

router.get("/verGrafico2/:idUsuario", function (req, res) {
    dashboardController.verGrafico2(req, res);
});


router.get("/media_acertos_quiz1/:idUsuario", function (req, res) {
    dashboardController.media_acertos_quiz1(req, res);
});
router.get("/media_acertos_quiz2/:idUsuario", function (req, res) {
    dashboardController.media_acertos_quiz2(req, res);
});
router.get("/media_acertos_quiz3/:idUsuario", function (req, res) {
    dashboardController.media_acertos_quiz3(req, res);
});

module.exports = router;