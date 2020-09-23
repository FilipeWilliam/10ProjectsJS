//Buttons
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const divideButton = document.getElementById("divide");
const multiplicationButton = document.getElementById("multiplication");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalButton = document.getElementById("equal");
const dotButton = document.getElementById("dot");

//Result
const resultSpace = document.querySelector(".result");

//Numbers
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");

//Functions

function cleanResultSpace() {
  resultSpace.value = "";
}

//Active Functions
clearButton.addEventListener("click", cleanResultSpace);