const frases = [
     "A arte existe para que a realidade não nos destrua - Friedrich Nietzsche",
    "Quando você dança, você pode aproveitar o luxo de ser você mesmo. - Paulo Coelho",
    "Os dançarinos são atletas de Deus. -Albert Einstein",
    "A dança nada mais é do que o reflexo do que o nosso corpo transforma em arte. - Antônio Gades",
    "Dançar é como sonhar com os pés. - Constança",
    "A dança é a linguagem escondida da alma. - Martha Graham",
    "A vida é a dança do instante, e o bailarino é o artista do tempo. — Jerome Robbins", 
    "No movimento do corpo, descobrimos o silêncio da alma. — Anna Pavlova" 


];

 function aparecerfrase() {
   
    const numA = Math.floor(Math.random() * frases.length);
    painel.textContent = frases[numA];
  }


  aparecerfrase();


  setInterval(aparecerfrase, 4000);

