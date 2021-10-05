
  const slide = document.querySelectorAll(".block_3__list");
  let count = 0;



function sliderList(x){
  slide[x].classList.toggle("slide__active")
  // if (slide[x].classList[1] == "slide__active") {
  //   slide[y].classList.toggle("slide__list")

  }

function zIndex(x){
  if (x == 3) x = 0
  if (x == -1) x = 2
  slide[x].style.transform = "translate(200%)" ;
  if ( x == 2 ) {
    for (let i = 0; i < 3; i++ ){
      slide[i].style.transform = "" ;
    }
  }
}


function next() {
  sliderList(count)
  count++

  couts(count)
  zIndex(count - 1)
  sliderList(count)

}


function previous() {
  sliderList(count)
  count--

  couts(count)
  zIndex(count - 1)
  sliderList(count)

}




function couts(x){
  if (x == 3) {
    count = 0;
  } else {
    if (x == -1) {
      count = 2
    }

  } // else
} // function couts(x)


//  =============== Swipe ================



// swipe в o6ласти слайдера
document.querySelector('.block_3').addEventListener('touchstart', handleTouchStart, false);
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
      // console.log('right');
      previous ();

    } else {
      // console.log('left');
      next();
    }

  } else {
    // веритикаль
    if (yDiff > 0) console.log('bottom');
    else console.log('top');


  }; // if / else
  x1 = null;
  y1 = null;
}; // function handleTouchMove
