var quizModel = require("../models/quizModel");


function finalizar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz,html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var pontos = req.body.respostasCorretasServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Pontuação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.finalizar(pontos,fkQuiz,fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




module.exports = {
   finalizar
}