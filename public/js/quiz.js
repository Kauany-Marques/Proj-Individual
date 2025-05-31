// quiz medio
const questions = [
    { 
        question: "Qual destes passos não pertence ao ballet?",
        options: ["Plié", "Moonwalk", "Fondu", "Arabesque", "Relevé", "Balloné"],
        correctAnswer: "Moonwalk",
        dica: 'Michael Jackson saberia essa!',
        gif: './assets/images/BailarinaGif.gif'
    },
    { 
        question: "Qual parte do corpo o ballet NÃO benefecia?",
        options: ["Pernas", "Braços", "Panturrilha", "Abdômen", "Coração", "Dentes"],
        correctAnswer: "Dentes",
        dica: 'Estou longe do pé',
        gif: './assets/images/BailarinaGif.gif'
    },
    { 
        question: "Qual destas é uma famosa obra do ballet?",
        options: ["Velozes e Furiosos", "Titanic", "Lago dos Cisnes", "Frozen", "OS 7 Monstrinhos", "Procurando Nemo"],
        correctAnswer: "Lago dos Cisnes",
        dica: 'Não sou um filme'
        
    },
    { 
        question: "O que é necessário para se equilibrar no ballet?",
        options: ["Força na Orelha", "Força no Dedão", "Controle na Respiração", "Ter um cachorro", "Sonhar", "Força no pescoço"],
        correctAnswer: "Força no Dedão",
        dica:  'O que equilíbrio lembra?'
    },
    { 
        question: "Qual dessas opções é uma característica de quem faz ballet?",
        options: ["Equilíbrio", "Dormir muito", "Correr rápido", "Cozinhar bem", "Falar alto", "Ser ansioso"],
        correctAnswer: "Equilíbrio",
        dica: 'Pnse na delicdeza da dança'
    }
];

let currentQuestion = 0;
let respostasCorretas = 0;


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const voltarButton = document.querySelector(".voltar");
const bailarinaElement = document.querySelector(".bailarina");
const dicaElement = document.getElementById("dica");
// nomeando as funções para guiar as dicas
function mostrarDica(){
    dicaElement.style.display = "block"
}
function esconderBailarina(){
bailarinaElement.style.display = "none"
}
function mostrarBailarina(){
bailarinaElement.style.display = "block"
}

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


    if(question.gif){
        bailarinaElement.src = question.gif;
        mostrarBailarina()
    }else{
        esconderBailarina();
    }
     dicaElement.innerText = question.dica;
    dicaElement.style.display = "none";
}

function selectOption(option, correctAnswer) {
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true; 
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correta");
        } else if (btn.textContent === option) {
            btn.classList.add("errada"); 
        }
    });

    if (option === correctAnswer) {
        respostasCorretas++;
    } 
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
             esconderBailarina();
              dicaElement.style.display = "none"
            showQuestion();
        } else {
            showResult();
        }
    }, 1000); 
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    voltarButton.style.display = "block";
    var fkUsuario = sessionStorage.ID_USUARIO
    var fkQuiz = 1

    const mensagemFinal = `Você acertou ${respostasCorretas} perguntas e errou ${5 - respostasCorretas}.`;
    resultElement.textContent = mensagemFinal;


    localStorage.setItem('pontuacaoFinal', JSON.stringify({corretas: respostasCorretas, erradas: 5 - respostasCorretas}));

      fetch("/quiz/finalizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                fkUsuarioServer: fkUsuario,
                fkQuizServer: fkQuiz,
               respostasCorretasServer: respostasCorretas
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                   
                    console.log("Cadastro feito")

                    window.location = "quiz.html";
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    
}



showQuestion();
