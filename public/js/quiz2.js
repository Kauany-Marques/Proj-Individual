// quiz médio
const questions = [
    { 
        question: "Em qual período surgiu o ballet?",
        options: ["Renascentista", "Romantismo", "Trovadorismo", "Humanismo", "Realismo", "Modernismo"],
        correctAnswer: "Renascentista" 
    },
    { 
        question: "Onde surgiu o ballet?",
        options: ["Brasil", "Estados Unidos", "Itáia", "França", "China", "Alemanha"],
        correctAnswer: "Itália"
    },
    { 
        question: "Quem fundou a primeira escola de ballet?",
        options: ["Albert Einstein", "Luis XIV", "Lucas XIV", "Leonardo XIV", "Luciano Huck", "Lorenzo XIV"],
        correctAnswer: "Luis XIV"
    },
    { 
        question: "Qual o nome da academia de ballet mais antiga do mundo?",
        options: ["Theatro Municipal", "Kirov Academy of Ballet", "Bolshoi Ballet Academy", "Royal Ballet School", "Smart Fit", "Académie Royale de Musique"],
        correctAnswer: "Académie Royale de Musique"
    },
    { 
        question: "Qual técnica revolucionou o ballet romântico?",
        options: ["Música Eletrônica", "Chinelo", "Ensaiar", "Sapatilha de Ponta", "Figurinos", "Botas"],
        correctAnswer: "Sapatilha de Ponta"
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
