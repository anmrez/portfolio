// Burger =================================================

function openSidebar() {
  document.querySelector(".Header__navigation").classList.toggle('open');
  document.querySelector(".burger__span").classList.toggle('active');
}

function link(){
  document.querySelector(".Header__navigation").classList.toggle('open');
  document.querySelector(".burger__span").classList.toggle('active');
}

// /Burger


//buttons
  const btn = document.querySelectorAll(".button__lamps");
  const lampCharacter = document.querySelectorAll(".block__1__content");
  const lampPrevie = document.querySelectorAll(".intro__img__lamp");
  const night = document.querySelectorAll(".intro__img__2");
  let x = 0;
  let j = 0;

  function btnActive(i) {
    j = i;
    btn.forEach((item, i) => {
      btn[i].classList.remove("button__lamps__active")
    });
    btn[i].classList.add("button__lamps__active");



    lampCharacter.forEach((item, i) => {
      lampCharacter[i].classList.remove("block__1__content__active")
      lampCharacter[i].classList.remove("block__1__content__preactive");
      lampPrevie[i].classList.remove("intro__img__lamp__active");
    });

    if ( x != i) {
      lampCharacter[x].classList.add("block__1__content__preactive"); // Добавление если нажата другая кнопка ( не текущаая )
      lampPrevie[x].classList.add("intro__img__lamp__preactive");

    }
    setTimeout(lampCharacterRem, 502);

    lampCharacter[i].classList.add("block__1__content__active");
    lampPrevie[i].classList.add("intro__img__lamp__active");
    x = i; // преведущие значение
    nightOn(0)
  }


  function lampCharacterRem(){
    lampCharacter.forEach((item, i) => {
      lampCharacter[i].classList.remove("block__1__content__preactive");
      lampPrevie[i].classList.remove("intro__img__lamp__preactive");
    });
  }



  function nightOn(i){
    console.log("j=" + j);


    night.forEach((item, t) => {
      night[t].classList.remove("night__on")
    });
    night[j].classList.add("night__on")


    if ( i == 0)
    night.forEach((item, t) => {
      night[t].classList.remove("night__on")
    });

  }

// /buttons
