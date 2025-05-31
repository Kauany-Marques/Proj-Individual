
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
   verGrafico1,
   verGrafico2,
   verGrafico3
};