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
