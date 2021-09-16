// Burger
function openSidebar() {
  document.querySelector(".Burger").classList.toggle('Burger__active');
}


// Slider
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
const slider = document.querySelector('.slider');
let count = 0;
let width;
let x1 = null;
let y1 = null;

function init(){
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach( item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  console.log(width);
  rollslider ();
};

window.addEventListener('resize', init); // Включать функцию "init" при изменении экрана
init();

// =============== BUTTOM ================

document.querySelector('.Btn_slider_next').addEventListener('click', function BackSlide(){
  count++;
    if (count >= images.length) {
      count = 0;
    }
  rollslider ();
  console.log(count);
});



document.querySelector('.Btn_slider_back').addEventListener('click', function NextSlide (){
  count--;
    if (count < 0) {
     count = images.length -1;
    }
  rollslider ();
  console.log(count);
});

function rollslider () {
  sliderLine.style.transform = 'translate(-'+count*width+'px)'
};

//  =============== Touch ================

function handleTouchStart(event){ // Начальная точка клика
  const firsstTouch = event.touches[0];
  x1 = firsstTouch.clientX;
  y1 = firsstTouch.clientY;
  //  console.log("Начальная точка", x1, y1);

};

function handleTouchMove(event){
  if (!x1 || !y1){
    return false; // Выход
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  //  console.log("Конечная точка", x2, y2);
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)){
    // Горизонт
    if (xDiff > 0) {
      console.log('right');
      rollslider ();
    } else {
      console.log('left');
      BackSlide();
    }




  } else {
    // веритикаль
    if (yDiff > 0) console.log('bottom');
    else console.log('top');


  };
  x1 = null;
  y1 = null;
};
