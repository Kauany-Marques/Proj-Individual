// quiz fácil
const questions = [
    { 
        question: "Qual destes passos não pertence ao ballet?",
        options: ["Plié", "Moonwalk", "Fondu", "Arabesque", "Relevé", "Balloné"],
        correctAnswer: "Moonwalk" 
    },
    { 
        question: "Qual parte do corpo o ballet NÃO benefecia?",
        options: ["Pernas", "Braços", "Panturrilha", "Abdômen", "Coração", "Dentes"],
        correctAnswer: "Dentes"
    },
    { 
        question: "Qual destas é uma famosa obra do ballet?",
        options: ["Velozes e Furiosos", "Titanic", "Lago dos Cisnes", "Frozen", "OS 7 Monstrinhos", "Procurando Nemo"],
        correctAnswer: "Lago dos Cisnes"
    },
    { 
        question: "O que é necessário para se equilibrar no ballet?",
        options: ["Força na Orelha", "Força no Dedão", "Controle na Respiração", "Ter um cachorro", "Sonhar", "Força no pescoço"],
        correctAnswer: "Força no Dedão"
    },
    { 
        question: "Qual dessas opções é uma característica de quem faz ballet?",
        options: ["Equilíbrio", "Dormir muito", "Correr rápido", "Cozinhar bem", "Falar alto", "Ser ansioso"],
        correctAnswer: "Equilíbrio"
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
