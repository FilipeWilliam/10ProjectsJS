const botao = document.querySelector(".button");
const body = document.body;

function changeColor() {
  body.classList.toggle('otherColor');
}



function addEventClick() {
  botao.addEventListener('click', changeColor);
}

addEventClick();