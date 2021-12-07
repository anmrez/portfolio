
let burger = document.getElementById('burgerHeader')
let navigation = document.querySelector('.navigation')
// console.log(navigation);

function burgerActive(){
  navigation.classList.toggle('navigation__active')
  burger.classList.toggle("burger__active")
}
