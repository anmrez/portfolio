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



// header active

  const introY = document.querySelector(".intro").clientHeight;
  const headerY = document.querySelector(".header").clientHeight;
  const header = document.querySelector(".header");


  document.addEventListener("DOMContentLoaded", function(){
    if (introY <= scrollY + headerY){
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  });

  window.addEventListener("scroll", function() {
    if (introY <= scrollY + headerY){
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  });

// /header active



// Button skroll

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 120; // отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// /Button skroll



// header marker


const scrollElement = [document.querySelector(".intro"),
                      document.querySelector(".block_1"),
                      document.querySelector(".block_2"),
                      document.querySelector(".block_3"),
                      document.querySelector(".block_6")];
const buddle = document.querySelector(".buddle");
const option = {
  threshold: 0.4

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
    // console.log(section);
  })


// /header marker
