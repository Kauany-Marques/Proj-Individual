// function buscarDadosG1(){
// fetch(`/dashboard/verGrafico1/${idUsuario}`)
//   .then(res => {
//     if (!res.ok) throw new Error("Erro ao buscar dados do gráfico 1");
//     return res.json();
//   })
//   .then(dados => {
//     if (!dados.length) {
//       alert("Não há dados para exibir no gráfico.");
//       return;
//     })}

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
if(window.chart){
window.chart.destroy()
}
window.chart = new Chart(ctx, config)
}

  

//     const labels  = dados.map(r => `${r.data} - ${r.quiz}`);
//     const valores = dados.map(r => r.totalAcertos);

//     const ctx = document.getElementById('grafico1').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels,
//         datasets: [{
//           label: 'Total de acertos',
//           data: valores,
//           backgroundColor: 'rgba(54, 162, 235, 0.6)',
//           borderColor:   'rgba(54, 162, 235, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,  
//         scales: {
//           y: { beginAtZero: true }
//         }
//       }
//     });
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Erro ao carregar gráfico 1.");
//   });
