// Gráfico G1 - fetch + chart.js
function buscarDadosG1(idUsuario){
fetch(`/dashboard/verGrafico1/${idUsuario}`, {
    method: "GET"
    
}) .then(function(response){if(response.ok){
    response.json().then(function(resultado){
    console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
    plotarGraficoUm(resultado);
    })
}
else{
console.log("Nenhum dado foi encontrado. Deu erro")
}
}).catch(function(erro){
    console.log("Erro ao obter dados")

})
}

function plotarGraficoUm(resultado){
var labels = []
var acertos = []
for(var i = 0; i < resultado.length; i++){
labels.push(resultado[i].Data.split("T")[0])
acertos.push(Number(resultado[i].totalAcertos))
}

const config = {
type: "line",
data: {
    labels: labels,
    datasets: [{
    label: "Acertos",
    data: acertos,
    borderColor: 'rgba(75, 192, 213, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderWidth: 2,
    tension: 0.3
    }]

}, options: {responsive:false}

}
const ctx = document.getElementById("canva1").getContext("2d")
// atualiza o gráfico com f5

window.chart = new Chart(ctx, config)
}

  

// Gráfico 2

function buscarDadosG2(idUsuario){
fetch(`/dashboard/verGrafico2/${idUsuario}`, {
    method: "GET"
    
}) .then(function(response){if(response.ok){
    response.json().then(function(resultado){
    console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
    plotarGraficoDois(resultado);
    })
}
else{
console.log("Nenhum dado foi encontrado. Deu erro")
}
}).catch(function(erro){
    console.log("Erro ao obter dados")

})
}

function plotarGraficoDois(resultado){
var labels = []
var acertos = []
for(var i = 0; i < resultado.length; i++){
labels.push(resultado[i].nome)
acertos.push(Number(resultado[i].totalPontos))
}

const config2 = {
type: "bar",
data: {
    labels: labels,
    datasets: [{
    label: labels[0],
    data: acertos,
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    borderWidth: 2,
    tension: 0.3
    },
    {
    label: labels[1],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    },
    {
    label: labels[2],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    },
    {
    label: labels[3],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    }
]

}, options: {responsive:false}

}
const ctx2 = document.getElementById("canva2").getContext("2d")
// atualiza o gráfico com f5

window.chart = new Chart(ctx2, config2)
}


// Gráfico 3
function buscarDadosG3(idUsuario){
fetch(`/dashboard/verGrafico3/${idUsuario}`, {
    method: "GET"
    
}) .then(function(response){if(response.ok){
    response.json().then(function(resultado){
    console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
    plotarGraficoDois(resultado);
    })
}
else{
console.log("Nenhum dado foi encontrado. Deu erro")
}
}).catch(function(erro){
    console.log("Erro ao obter dados")

})
}


function plotarGraficoDois(resultado){
var labels = []
var acertos = []
for(var i = 0; i < resultado.length; i++){
labels.push(resultado[i].nome)
acertos.push(Number(resultado[i].totalPontos))
}

const config2 = {
type: "bar",
data: {
    labels: labels,
    datasets: [{
    label: labels[0],
    data: acertos,
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    borderWidth: 2,
    tension: 0.3
    },
    {
    label: labels[1],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    },
    {
    label: labels[2],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    },
    {
    label: labels[3],
    borderColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    backgroundColor: ['rgba(75, 192, 213, 1)', 'green', 'red', '#dcdcdc'],
    }
]

}, options: {responsive:false}

}
const ctx2 = document.getElementById("canva2").getContext("2d")
// atualiza o gráfico com f5

window.chart = new Chart(ctx2, config2)
}



// KPI 1 - PORCENTAGEM DE ACERTOS
