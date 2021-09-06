function openSidebar() {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("open");

}

//============Acardion============

const Acard = document.querySelectorAll(".blok__5__item__menu");

Acard.forEach(function(item)
{
  item.addEventListener("click", function()
  {
    let currentBtn = item;

      Acard.forEach(function(item)
      {
       item.classList.remove('active');
      });

     currentBtn.classList.add('active');

  });




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

const scrollElement = [ document.querySelector(".blok__1"),
                      document.querySelector(".blok__5"),
                      document.querySelector(".bloc__9"),
                      document.querySelector(".block__12"),
                      document.querySelector(".block__15")];
const buddle = document.querySelector(".buddle");
const option = {
  threshold: 0.1

};


let obsever = new IntersectionObserver(navCheck, option);




function navCheck(entries){
  entries.forEach(entry =>{
    const className = entry.target.className;
    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`)
    // console.log(activeAnchor);
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
