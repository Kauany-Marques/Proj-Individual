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
// esse vai pro id canva 3
function verGrafico2(idUsuario) {
    var instrucaoSql = `SELECT u.nome, SUM(a.pontuacaoUsuario) AS totalPontos
        FROM usuario u
        JOIN acertos a ON u.idUsuario = a.fkUsuario
        GROUP BY u.nome
        ORDER BY totalPontos DESC
        LIMIT 7
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// comparar a dificuldade dos quizzes
// radar

function media_acertos_quiz1(idUsuario) {

    var instrucaoSql = `
    SELECT u.idUsuario, u.nome, q.nome, SUM(a.pontuacaoUsuario) AS pontuacaoTotal1
        FROM acertos a JOIN usuario u on a.fkUsuario = u.idUsuario
        JOIN quiz q ON a.fkQuiz = q.idQuiz 
        where idUsuario = ${idUsuario} and idQuiz = 1
        GROUP BY u.idUsuario, u.nome, q.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function media_acertos_quiz2(idUsuario) {

    var instrucaoSql = `
    SELECT u.idUsuario, u.nome, q.nome, SUM(a.pontuacaoUsuario) AS pontuacaoTotal2
        FROM acertos a JOIN usuario u on a.fkUsuario = u.idUsuario
        JOIN quiz q ON a.fkQuiz = q.idQuiz 
        where idUsuario = ${idUsuario} and idQuiz = 2
        GROUP BY u.idUsuario, u.nome, q.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function media_acertos_quiz3(idUsuario) {

    var instrucaoSql = `
    SELECT u.idUsuario, u.nome, q.nome, SUM(a.pontuacaoUsuario) AS pontuacaoTotal3
        FROM acertos a JOIN usuario u on a.fkUsuario = u.idUsuario
        JOIN quiz q ON a.fkQuiz = q.idQuiz 
        where idUsuario = ${idUsuario} and idQuiz = 3
        GROUP BY u.idUsuario, u.nome, q.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verGrafico1,
    verGrafico2,
    media_acertos_quiz1,
    media_acertos_quiz2,
    media_acertos_quiz3,
};