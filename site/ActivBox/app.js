
const burger = document.querySelector(".nav__menu");
const nav = document.querySelector(".navigation");
const link = document.querySelectorAll(".navigation__link");

burger.addEventListener('click', () =>{
  nav.classList.toggle("open");

})


link.forEach(link => {
  link.addEventListener('click', () =>{
    nav.classList.toggle("open");

  })
});








document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 110; // отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
