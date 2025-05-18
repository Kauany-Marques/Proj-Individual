var textos = [
    "A arte existe para que a realidade não nos destrua - Friedrich Nietzsche",
    "Quando você dança, você pode aproveitar o luxo de ser você mesmo. - Paulo Coelho",
    "Os dançarinos são atletas de Deus. -Albert Einstein",
    "A dança nada mais é do que o reflexo do que o nosso corpo transforma em arte. - Antônio Gades",
    "Dançar é como sonhar com os pés. - Constança"
]
var currentIndex = 0;

function alterarTexto() {

    const elementoTexto = document.getElementById("textos");

    elementoTexto.textContent = textos[currentIndex];

    currentIndex = (currentIndex + 1) % textos.length;
}

alterarTexto();

setInterval(alterarTexto, 5000);
