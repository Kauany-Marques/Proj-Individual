
var menu = document.querySelectorAll('.item-menu')
//criei a var menu que guarda todos os .item-menu, ao invés de contar um por um


// criei a função selecionarLink, com o for para percorrer o tam da lista.
// peguei a lista na posição i (contador)
function selecionarLink(){
  for(var i = 0; i < menu.length; i++){
    menu[i].classList.remove('ativo');
  }
    // vamos remover uma classe de um item (qualquer uma q quiser)

    this.classList.add('ativo')
// remove a classe ativo em um item q n cliquei
//  e add class ativo e um q eu cliquei
}
for(var i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', selecionarLink);
}

// expandir
var botaoExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menuLateral')

botaoExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})