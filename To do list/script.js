const buttonAdd = document.querySelector('button');
const inputPrincipal = document.querySelector('input');
const divPrincipal = document.querySelector('.principal')

//Create e add section
const sectionCriada = document.createElement('section');
sectionCriada.style.textAlign = 'center'
sectionCriada.style.marginTop = '30px'
document.body.appendChild(sectionCriada);


//Clone Button
const buttonClone = document.createElement('button')
buttonClone.innerText = 'REMOVE';
buttonClone.style.backgroundColor = '#B02C2F';
buttonClone.style.padding = '8px 13px 8px 12px'


//Clone input
const inputClone = document.createElement('input')
inputClone.style = inputPrincipal.style;
//Adicionar Clones

function adicionarAcao() {
  document.getElementsByTagName('section')[0].appendChild(inputClone);
  document.getElementsByTagName('section')[0].appendChild(buttonClone);
  inputClone.innerText = inputPrincipal.innerText
};

function removerAcao() {
  inputClone.remove();
  buttonClone.remove();
}

buttonAdd.addEventListener('click', adicionarAcao);
buttonClone.addEventListener('click', removerAcao)