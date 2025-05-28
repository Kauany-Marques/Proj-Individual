// quiz difícil
const questions = [
    { 
        question: "O termo francês “en dehors”, muito usado no ballet, significa:",
        options: ["Para dentro", "Para Cima", "Para Fora", "Para Baixo", "Para o Lado", "Para o Meio"],
        correctAnswer: "Para Fora" 
    },
    { 
        question: "O movimento “développé” consiste em:",
        options: ["Um giro rápido sobre um pé só", "Um salto com troca de pernas", "Um alongamento da perna para o alto", "Um pequeno salto para frente", "Um abaixamento profundo do corpo", "Ficar Parado"],
        correctAnswer: "Um alongamento da perna para o alto"
    },
    { 
        question: " Em qual posição os calcanhares estão juntos e os pés apontam em direções opostas?",
        options: ["Primeira", "Segunda", "Terceira", "Quarta", "Quinta", "Sexta"],
        correctAnswer: "Primeira"
    },
    { 
        question: "A expressão 'plié' significa?",
        options: ["Saltar", "Girar", "Parar", "Dobrar", "Quebrar", "Pegar"],
        correctAnswer: "Dobrar"
    },
    { 
        question: " Qual desses ballets foi inspirado em uma tragédia de Shakespeare??",
        options: ["Coppélia", "Romeu e Julieta", "Giselle", "A sagração da Primavera", "La Fille Mal Gardée", "Frozen"],
        correctAnswer: "Romeu e Julieta"
    }
];

let currentQuestion = 0;
let respostasCorretas = 0;
let respostasErradas = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const voltarButton = document.querySelector(".voltar");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option, question.correctAnswer));
        optionsElement.appendChild(button);
    });
}

function selectOption(option, correctAnswer) {
    if (option === correctAnswer) {
        respostasCorretas++;
    } else {
        respostasErradas++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    voltarButton.style.display = "block";

    const mensagemFinal = `Você acertou ${respostasCorretas} perguntas e errou ${respostasErradas}.`;
    resultElement.textContent = mensagemFinal;


    localStorage.setItem('pontuacaoFinal', JSON.stringify({corretas: respostasCorretas, erradas: respostasErradas}));

      fetch("/quiz/finalizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
               respostasCorretasServer: respostasCorretas
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                   
                    console.log("Cadastro feito")

                    window.location = "login.html";
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    
}



showQuestion();
