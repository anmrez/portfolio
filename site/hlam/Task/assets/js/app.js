// Burger =================================================
function openSidebar() {
  document.querySelector(".Header__navigation").classList.toggle('open');
  document.querySelector(".burger__span").classList.toggle('active');
}

function link(){
  document.querySelector(".Header__navigation").classList.toggle('open');
  document.querySelector(".burger__span").classList.toggle('active');
}


let name = document.querySelector(".input__name input")
name.oninput = function(){
  this.value = this.value.substr(0, 30);
}
// input Phone
let phone = document.querySelector(".input__phone input")
phone.oninput = function(){
  this.value = this.value.substr(0, 11);
}

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Button skroll

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 80; // отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
