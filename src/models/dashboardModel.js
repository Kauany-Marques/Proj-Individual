// total de acertos por dia
var database = require("../database/config")

function verGrafico1(idUsuario) {
console.log(idUsuario)


    var instrucaoSql = `SELECT DATE(a.dataResposta) AS Data, q.nome AS Quiz, SUM(a.pontuacaoUsuario) AS totalAcertos
FROM acertos a
JOIN usuario u ON a.fkUsuario = u.idUsuario
JOIN quiz q ON a.fkQuiz = q.idQuiz
WHERE idUsuario = ${idUsuario}
GROUP BY DATE(a.dataResposta), q.nome
ORDER BY DATE(a.dataResposta) DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
//  ranking usuario com maior pontuação
function verGrafico2(idUsuario) {
    var instrucaoSql = `SELECT u.nome, SUM(a.pontuacaoUsuario) AS totalPontos
FROM usuario u
JOIN acertos a ON u.idUsuario = a.fkUsuario
GROUP BY u.nome
ORDER BY total_pontos DESC
LIMIT 7
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// comparar a dificuldade dos quizzes
function verGrafico3(idUsuario) {

    var instrucaoSql = `SELECT q.nome AS Quiz, AVG(a.pontuacaoUsuario) AS media_acertos
FROM quiz q
JOIN acertos a ON q.idQuiz = a.fkQuiz
GROUP BY q.nome
ORDER BY media_acertos ASC
LIMIT 7
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   verGrafico1,
   verGrafico2,
   verGrafico3
};