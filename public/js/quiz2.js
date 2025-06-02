// quiz médio
const questions = [
    { 
        question: "Em qual período surgiu o ballet?",
        options: ["Renascentista", "Romantismo", "Trovadorismo", "Humanismo", "Realismo", "Modernismo"],
        correctAnswer: "Renascentista",
        dica: 'ABC'
    
    },
    { 
        question: "Onde surgiu o ballet?",
        options: ["Brasil", "Estados Unidos", "Itália", "França", "China", "Alemanha"],
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
const bailarinaElement = document.querySelector(".bailarina");
const dicaElement = document.getElementById("dica");
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
    } else {
        respostasErradas++;
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
    var fkQuiz = 2

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
               respostasCorretasServer: respostasCorretas,
                fkUsuarioServer: fkUsuario,
                fkQuizServer: fkQuiz,
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
