// Burger =================================================
function openSidebar() {
  document.querySelector(".Header__navigation").classList.toggle('Burger__active');
    document.querySelector(".burger__span").classList.toggle('active');
}



//  ======================================================
// Slider ================================================
//  ======================================================



const images = document.querySelectorAll('.slider .slider__line img');
const imagesHref = document.querySelectorAll('.slider .slider__line a');
const sliderLine = document.querySelector('.slider__line');
const slider = document.querySelector('.slider');
let count = 0;  // count slide
let width;  // width
let x1 = null;  // in swipe
let y1 = null;  // in swipe
let ts = 100 // mili second for timer
let timer;






function init(){ // Подсраивает слайдер под жкран
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
    images.forEach( item => {
      item.style.width = width + 'px';
      item.style.height = '100%';
    });
    imagesHref.forEach( item => {
      item.style.width = width + 'px';
      item.style.height = '100%';
    });

  rollslider ();
  radioActive();
};  //  function init
window.addEventListener('resize', init); // Включать функцию "init" при изменении экрана
init();



//  --------------------- timer --------------------------------------------



// Остановка таймера при наведении на слайдер

function timerStart () { // запуск таймера
  timer = setInterval( counterTimer, ts );
}
function timerStop () { // остановка таймера
  timer = clearTimeout(timer);
}
// timerStart (); // Вызов таймера при запуске страницы
  slider.addEventListener('mouseover', () => {
    timerStop ()
    // console.log('clearTimeout')
  });
  slider.addEventListener('mouseout', () => {
    timerStart ();
    // console.log('start')
  });
// таймер слайдера (i)
  let i = 0;
  function counterTimer () {
    if (i >= 70) {
      NextSlide();
      i = 0;
    } else {
      i = i + 1;
      // console.log(i, '00 ms');
    } // if
  }; // function counterTimer



// =============== BUTTOM ================


//  --------------------- NextSlide ----------------------------------------
  function NextSlide(){
  count++;
    if (count >= images.length) {
      count = 0;
    };
  rollslider ();
  radioActive();

}; // function NextSlide
//  --------------------- BackSlide ----------------------------------------
function BackSlide (){
  count--;
  if (count < 0) {
    count = images.length -1;
  }
  rollslider ();
  radioActive();

  // console.log(count);
};  //function BackSlide


// расчет длинны переключения
function rollslider () {
  sliderLine.style.transform = 'translate(-'+count*width+'px)'
};


//  --------------------- radio --------------------------------------------



function radioActive(){
  const slide_radio = document.querySelectorAll('.spLine li');

  slide_radio.forEach( item => {  // Remove class "active"
    item.classList.remove('active');
  }); //  slide_radio.forEach

  if (count == 0) slide_radio[0].classList.add('active');
  if (count == 1) slide_radio[1].classList.add('active');
  if (count == 2) slide_radio[2].classList.add('active');
  if (count == 3) slide_radio[3].classList.add('active');
};

// Выполнение действий при нажатии на "radio"
function Slide0(){
  count = 0;
  rollslider ();
  radioActive();
  counterTimer ();
  i = 0;
}
function Slide1(){
  count = 1;
  rollslider ()
  radioActive();
  counterTimer ();
  i = 0;
}
function Slide2(){
  count = 2;
  rollslider ()
  radioActive();
  counterTimer ();
  i = 0;
}
function Slide3(){
  count = 3;
  rollslider ();
  radioActive();
  counterTimer ();
  i = 0;
}



//  =============== Swipe ================



// swipe в o6ласти слайдера
document.querySelector('.slider').addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);


function handleTouchStart(event){ // Начальная точка клика
  const firsstTouch = event.touches[0];
  x1 = firsstTouch.clientX;
  y1 = firsstTouch.clientY;
  //  console.log("Начальная точка", x1, y1);
}; // function handleTouchStart(event)

function handleTouchMove(event){ // Конечная точка клика
  if (!x1 || !y1){
    return false; // Выход
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  //  console.log("Конечная точка", x2, y2);
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff))
  {
    // Горизонт
    if (xDiff > 0) {
      console.log('right');
      BackSlide ();

    } else {
      console.log('left');
      NextSlide();
    }

  } else {
    // веритикаль
    if (yDiff > 0) console.log('bottom');
    else console.log('top');


  }; // if / else
  x1 = null;
  y1 = null;
}; // function handleTouchMove



// Phone --------------------------



// window.addEventListener("scroll",slaiderPhone); // Считывание скролла при прокрутки

slaiderPhone();// Вызов

function slaiderPhone (){
  if ( window.screen.width>800) { // slider in desctop
    timerStart();
    // console.log('slider-on');

  } else { // slider in phone
    if (window.screen.width<800){

      timerStop();
      // console.log('slider-off');
    }

  }; // if ( window.screen.width>800)
}; //   function slaiderPhone ()
