const slides = [
  {
    id: 1,
    image: './images/image9.jpg',
    description: 'Секции для рубашек',
  },
  {
    id: 2,
    image: './images/image10.jpg',
    description: 'Выдвижная штанга',
  },
  {
    id: 3,
    image: './images/image11.jpg',
    description: 'Брючницы',
  },
  {
    id: 4,
    image: './images/image12.jpg',
    description: 'Пантографы',
  },
  {
    id: 5,
    image: './images/image13.jpg',
    description: 'Блоки внешних ящиков',
  },
  {
    id: 6,
    image: './images/image14.jpg',
    description: 'ТВ-модуль',
  },
  {
    id: 7,
    image: './images/image15.jpg',
    description: 'ТВ-модуль',
  },
  {
    id: 8,
    image: './images/image16.jpg',
    description: 'Выдвижные корзины для белья или обуви',
  },
  {
    id: 10,
    image: './images/image18.jpg',
    description: 'Блоки внутренних ящиков',
  },
  {
    id: 11,
    image: './images/image19.jpg',
    description: 'Выдвижные корзины для белья или обуви',
  },
  {
    id: 12,
    image: './images/image20.jpg',
    description: 'Выдвижные зеркала внутри шкафа',
  },
]

const header = document.querySelector('.header');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const sliderContainer = document.querySelector('.slider__container');

const burgerMenu = document.getElementById('burger-menu');
const burgerButton = document.getElementById('burger-button');
const burgerLines = document.querySelectorAll('.burger-menu__line')

const singleSlider = document.getElementById('single-slider');
const sliderDescription = document.querySelector('.single-slider__description');
const sliderImage = singleSlider.querySelector('.single-slider__image');
const singleLeft = document.getElementById('single-left');
const singleRight = document.getElementById('single-right');

const openBurgerMenu = () => {
  burgerMenu.classList.toggle('burger-menu__opened_open');
  burgerLines.forEach(elem => elem.classList.toggle('burger-menu__cross'));
}

burgerButton.addEventListener('click', openBurgerMenu);

let slide = 0;
let swipe = 0;
let screenWidth = document.documentElement.clientWidth;
let stepSlide;
let sliderWidth;
// 7
if (screenWidth < 500) {
  stepSlide = screenWidth;
  sliderWidth = -screenWidth * 6;
} else if (screenWidth < 768) {
  stepSlide = 480;
  sliderWidth = -2500;
} else if (screenWidth < 1025) {
  stepSlide = 620;
  sliderWidth = -3500;
} else if (screenWidth < 1600) {
  stepSlide = 820;
  sliderWidth = -4200;
} else {
  stepSlide = 820;
  sliderWidth = -4000;
}

const slideLeft = () => {
  slide + stepSlide === 0 && leftBtn.classList.add('slider-button_disabled');
  if ( slide === 0 ) return;
  slide = slide + stepSlide;
  sliderContainer.style.transform = `translateX(${slide}px)`;
}

const slideRight = () => {
  if (slide <= sliderWidth) {
    slide = 0;
    leftBtn.classList.add('slider-button_disabled');
  } else {
    slide = slide - stepSlide;
    leftBtn.classList.remove('slider-button_disabled');
  }
  sliderContainer.style.transform = `translateX(${slide}px)`;
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

const leftSingleSwap = () => {
  if (swipe === 0) {
    swipe = 10
  } else {
    swipe = swipe - 1;
  }
  sliderDescription.textContent = slides[swipe].description;
  sliderImage.src = slides[swipe].image;
}

const rightSingleSwap = () => {
  if (swipe === 10) {
    swipe = 0
  } else {
    swipe = swipe + 1;
  }
  sliderDescription.textContent = slides[swipe].description;
  sliderImage.src = slides[swipe].image;
}

singleLeft.addEventListener('click', leftSingleSwap);
singleRight.addEventListener('click', rightSingleSwap);