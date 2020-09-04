const numero = document.querySelector('.numero');
const buttonMais = document.querySelector('#mais');
const buttonMenos = document.querySelector('#menos');


let i = 0

function adicionar() {
  i++;
  numero.innerText = i;
}

function remover() {
  i--;
  numero.innerText = i;
}

buttonMais.addEventListener('click', adicionar);
buttonMenos.addEventListener('click', remover);