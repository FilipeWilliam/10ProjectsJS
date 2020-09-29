//Div and Images
const slidesDiv = document.querySelector('.slide-div');
const slidesImg = document.querySelectorAll('.slide-div img');

//Buttons
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

//Movement
let i = 1;
const size = slidesImg[0].clientWidth;

slidesDiv.style.transform = 'translateX(' + (-size * i) + 'px)';

//Buttons function
function nextImage() {
  slidesDiv.style.transition = 'transform 0.4s ease-in-out';
  i++;
  slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
};

function prevImage() {
  slidesDiv.style.transition = 'transform 0.4s ease-in-out';
  i--;
  slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
};

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);