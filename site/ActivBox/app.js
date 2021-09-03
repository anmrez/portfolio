
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




// navigation scrollBy

const scrollElement = [document.querySelector(".Feathers"),
                      document.querySelector(".work"),
                      document.querySelector(".team"),
                      document.querySelector(".Slider"),
                      document.querySelector(".Download")];
const buddle = document.querySelector(".buddle");
const option = {
  threshold: 0.7

};


let obsever = new IntersectionObserver(navCheck, option);

function navCheck(entries){
  entries.forEach(entry =>{
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`)
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
        height: coords.height,
        width: coords.width,
        left: coords.left,
        top: coords.top
    };
    if (entry.isIntersecting){
      buddle.style.setProperty('left', `${directions.left}px`);
      buddle.style.setProperty('top', `${directions.top}px`);
      buddle.style.setProperty('width', `${directions.width}px`);
      buddle.style.setProperty('height', `${directions.height}px`);
    };

  });

}


  scrollElement.forEach(section => {
    obsever.observe(section);
    console.log(section);
  })
