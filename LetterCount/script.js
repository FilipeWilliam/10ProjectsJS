const input = document.querySelector('input')

input.addEventListener('keydown', handleKeyDown)

const div = document.createElement('div')
document.body.appendChild(div)
const style = div.style;
style.color = '#FFF'
style.fontSize = '17px';
style.fontWeight = 'bold'

let i = 0;

function handleKeyDown(event) {
  let key = event.keyCode;
  if (key === 32) {
    i = i;
  } else if (key === 8) {
    if (i > 0) {
      i--;
    } else {
      i = i;
    }
  } else {
    i++;
  }
  div.innerText = `Letter Count: ${i}`;
}