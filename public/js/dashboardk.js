// Gráfico G1 - Linha (acertos por data)
function buscarDadosG1(idUsuario) {
    fetch(`/dashboard/verGrafico1/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                plotarGraficoUm(resultado);
            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}

function plotarGraficoUm(resultado) {
    var labels = [];
    var acertos = [];
    for (var i = 0; i < resultado.length; i++) {
        const dataBruta = resultado[i].Data;
        const dataObjeto = new Date(dataBruta);
        console.log(dataObjeto)

        const dataFormatada = dataObjeto.toLocaleString("pt-BR",{
            day: "2-digit",
            month: "2-digit",
        })

        labels.push(dataFormatada);
        acertos.push(Number(resultado[i].totalAcertos));
    }

    const config = {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Acertos",
                data: acertos,
                borderColor: "black",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: "pink",
                pointRadius: 5,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        color: "#333",
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#333",
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    text: 'Total de acertos por dia',
                }
                ,
                legend: {
                    labels: {
                        color: "#000",
                        font: {
                            weight: "bold"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: "#000",
                    titleColor: "#fff",
                    bodyColor: "#fff"
                }
            }
        }
    };

    const ctx = document.getElementById("canva1").getContext("2d");
    if (window.chart1) window.chart1.destroy();
    window.chart1 = new Chart(ctx, config);
}


// Gráfico G2 - Barras (pontos por usuário)
function buscarDadosG2(idUsuario) {
    fetch(`/dashboard/verGrafico2/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                plotarGraficoDois(resultado);
            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}

function plotarGraficoDois(resultado) {
    var labels = [];
    var acertos = [];
    for (var i = 0; i < resultado.length; i++) {
        labels.push(resultado[i].nome);
        acertos.push(Number(resultado[i].totalPontos));
    }

    const config2 = {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: 'Pontos',
                data: acertos,
                backgroundColor: [
                    '#9b59b6', '#9b59b6', '#9b59b6', '#9b59b6', '#9b59b6', '#9b59b6'
                ],
                borderRadius: 5,
                borderSkipped: false
            }]
        },
        options: {

            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    ticks: {
                        color: "#333",
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#333",
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    text: 'Usuário com maior total de acertos',
                }, legend: {
                    display: true,
                },
                tooltip: {
                    backgroundColor: "#2c3e50",
                    titleColor: "#ecf0f1",
                    bodyColor: "#ecf0f1"
                }
            }
        }
    };

    const ctx2 = document.getElementById("canva2").getContext("2d");
    if (window.chart2) window.chart2.destroy();
    window.chart2 = new Chart(ctx2, config2);
}

// Gráfico 3
function buscarDadosG3(idUsuario) {
    fetch(`/dashboard/verGrafico3/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                plotarGraficoTres(resultado);
            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}

// criar grafico 3
function plotarGraficoTres(resultado) {

    const config3 = {
        type: "pie",
        data: {
            labels: ['Total de respostas corretas', 'Total de respostas erradas'],
            datasets: [{
                label: 'Pontos',
                data: [resultado[0].totalPontos, ((resultado[0].totalVezesTentou * 5) - resultado[0].totalPontos)],
                backgroundColor: [
                    '#1abc9c', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6', '#34495e'
                ],
                borderRadius: 5,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {

            },
            plugins: 
            {
                subtitle: {
                    display: true,
                    text: 'Quantidade de erros e acertos',
                },
                legend: {
                    display: true
                },
                tooltip: {
                    backgroundColor: "#2c3e50",
                    titleColor: "#ecf0f1",
                    bodyColor: "#ecf0f1"
                }
            }
        }
    };

    const ctx3 = document.getElementById("canva3").getContext("2d");
    if (window.chart3) window.chart3.destroy();
    window.chart3 = new Chart(ctx3, config3);
}



// KPI 1 - Média Acertos Quiz 1
function media_acertos_quiz1() {
    fetch(`/dashboard/media_acertos_quiz1/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                pontuacao = resultado[0].pontuacaoTotal1;
                var totalTentativas = (resultado[0].totalVezesTentou * 5)

                kpiUm.innerHTML = ((pontuacao / totalTentativas) * 100).toFixed(2) + `%`;


            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}


// KPI 2 - Média Acertos Quiz 2
function media_acertos_quiz2() {
    fetch(`/dashboard/media_acertos_quiz2/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                pontuacao = resultado[0].pontuacaoTotal2;
                var totalTentativas = (resultado[0].totalVezesTentou * 5);
                kpiDois.innerHTML = ((pontuacao / totalTentativas) * 100).toFixed(2) + `%`;
            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}


// KPI 3 - Média Acertos Quiz 3
function media_acertos_quiz3() {
    fetch(`/dashboard/media_acertos_quiz3/${idUsuario}`, {
        method: "GET"
    }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resultado) {
                console.log(`O dado recebido foi ${JSON.stringify(resultado)}`);
                pontuacao = resultado[0].pontuacaoTotal3;
                var totalTentativas = (resultado[0].totalVezesTentou * 5)

                kpiTres.innerHTML = ((pontuacao / totalTentativas) * 100).toFixed(2) + `%`;
            })
        } else {
            console.log("Nenhum dado foi encontrado. Deu erro");
        }
    }).catch(function (erro) {
        console.log("Erro ao obter dados");
    })
}
