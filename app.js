// navigation
let page = [
            document.querySelector('.page__home'),
            document.querySelector('.page__site'),
            document.querySelector('.page__picture'),
            document.querySelector('.page__3d')
          ];

const btnNav = document.querySelectorAll('.nav__phone__content');

function switching(i){
  for ( let j = 0;  j < page.length;  j++){
    page[j].classList.remove("page__open");
    btnNav[j].classList.remove("nav__active");
  }
  page[i].classList.add("page__open")
  btnNav[i].classList.add("nav__active");

}




addEventListener("keydown", function(event) {
  if (event.keyCode == 27){
    // document.location.href = "https://music.yandex.ru/album/16959124/track/87620321";
    switching(0);
  }
});

// random function

  function random( min, max ){
    return Math.random() * ( max - min ) + min;
  }



// neon Vertical
const neonVertical = [
  document.querySelector('.neon__body:nth-child(3)'),
  document.querySelector('.neon__body:nth-child(4)'),
  document.querySelector('.neon__body:nth-child(5)'),
  document.querySelector('.neon__body:nth-child(1)'),
  document.querySelector('.neon__body:nth-child(2)'),
  document.querySelector('.neon__body:nth-child(6)'),
  document.querySelector('.neon__body:nth-child(7)'),
  document.querySelector('.neon__body:nth-child(8)')
]

let x = [];
  for ( let j = 0;  j < 3;  j++){
    x[j] = random(j+3, j+7)
    neonVertical[j].style.right = Math.floor(random(5, 95)) + '%';
    neonVertical[j].style.animation = x[j] + 's neon2 infinite';
    neonVertical[j].style.animationDelay = random(0, 4) + 's';
  }
  for ( let j = 3;  j < 5;  j++){
    x[j] = random(j+3, j+7)
    neonVertical[j].style.top = Math.floor(random(5, 95)) + '%';
    neonVertical[j].style.animation = x[j] + 's neon1 infinite';
    neonVertical[j].style.animationDelay = random(0, 4) + 's';
  }
  for ( let j = 5;  j < 7;  j++){
    x[j] = random(j+3, j+7)
    neonVertical[j].style.top = Math.floor(random(5, 95)) + '%';
    neonVertical[j].style.animation = x[j] + 's ease neon3 infinite';
    neonVertical[j].style.animationDelay = random(0, 4) + 's';
  }
