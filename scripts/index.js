const slides = [
  {
    id: 1,
    image: '../images/image2',
  },
  {
    id: 2,
    image: '../images/image3',
  },
  {
    id: 3,
    image: '../images/image4',
  },
  {
    id: 4,
    image: '../images/image5',
  },
  {
    id: 5,
    image: '../images/image6',
  },
  {
    id: 6,
    image: '../images/image7',
  },
  {
    id: 7,
    image: '../images/image8',
  },
]

const header = document.querySelector('.header');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const sliderContainer = document.querySelector('.slider-wrapper');

const burgerMenu = document.getElementById('burger-menu');
const burgerButton = document.getElementById('burger-button');
const burgerLines = document.querySelectorAll('.burger-menu__line')

const openBurgerMenu = () => {
  burgerMenu.classList.toggle('burger-menu__opened_open');
  burgerLines.forEach(elem => elem.classList.toggle('burger-menu__cross'));
}

burgerButton.addEventListener('click', openBurgerMenu);

let slide = 0;

const slideLeft = () => {
  // if (slide = slide + 820;) {
  //   leftBtn.classList.add('slider-button_disabled');
  //   return
  // } else {
  //   slide = slide + 820;
  // }
  console.log(slide)
  slide + 820 === 0 && leftBtn.classList.add('slider-button_disabled');
  if ( slide === 0 ) return;
  slide = slide + 820;
  //if ( slide === 0 ) { leftBtn.classList.add('slider-button_disabled');  }
  sliderContainer.style.transform = `translateX(${slide}px)`;
  
}

const slideRight = () => {
  if (slide < -4000) {
    slide = 0;
  } else {
    slide = slide - 820;
    leftBtn.classList.remove('slider-button_disabled');
  }
  sliderContainer.style.transform = `translateX(${slide}px)`;
  console.log(slide)
}

leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight);

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  }
}