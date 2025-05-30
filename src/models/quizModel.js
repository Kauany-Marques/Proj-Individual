var database = require("../database/config")

function finalizar(pontos) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
      INSERT INTO acertos VALUES ('deafult', ${pontos}', 'default');

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

function verGrafico1(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
    dataPontuacao,
    pontuacaoUsuario FROM acertos WHERE fkUsuario = ${idUsuario}
    AND fkQuiz = 1
    ORDER BY idAcerto DESC LIMIT ${limite_linhas}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verGrafico2(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
    dataPontuacao,
    pontuacaoUsuario FROM acertos WHERE fkUsuario = ${idUsuario}
    AND fkQuiz = 2
    ORDER BY idAcerto DESC LIMIT ${limite_linhas}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verGrafico3(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
    dataPontuacao,
    pontuacaoUsuario FROM acertos WHERE fkUsuario = ${idUsuario}
    AND fkQuiz = 3
    ORDER BY idAcerto DESC LIMIT ${limite_linhas}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   finalizar,
   verGrafico1,
   verGrafico2,
   verGrafico3
};