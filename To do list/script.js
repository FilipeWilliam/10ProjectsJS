let buttonAdd = document.querySelector('button');
let inputPrincipal = document.querySelector('input');
let divPrincipal = document.querySelector('.principal')

//Create and add section
const sectionCriada = document.createElement('section');
sectionCriada.style.textAlign = 'center'
sectionCriada.style.marginTop = '30px'
document.body.appendChild(sectionCriada);

//Main Function
function adicionarAcao(event) {

  //Clone Button
  const buttonClone = document.createElement('button')
  buttonClone.innerText = 'REMOVE';
  buttonClone.style.backgroundColor = '#B02C2F';
  buttonClone.style.padding = '8px 13px 8px 12px'

  //Clone input
  const inputClone = document.createElement('input')
  inputClone.style = inputPrincipal.style;
  inputClone.style.marginBottom = '8px'

  //Create a line break
  const lineBreak = document.createElement('br')

  //add Clones
  sectionCriada.appendChild(inputClone)
  sectionCriada.appendChild(buttonClone)
  sectionCriada.appendChild(lineBreak)

  //Reset input value
  inputClone.value = inputPrincipal.value
  inputPrincipal.value = '';

  //Remove function
  buttonClone.addEventListener('click', removerAcao);

  function removerAcao() {
    inputClone.remove();
    buttonClone.remove();
    lineBreak.remove();
  }
};

buttonAdd.addEventListener('click', adicionarAcao);