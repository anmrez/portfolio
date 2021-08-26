
const header = document.querySelector(".header"); /*document.getElementById   - id*/
const navigationLink = document.querySelectorAll(".navigation__link");


//=============================================================================
//================================function=====================================
//=============================================================================


/*==============
Проверка уровня скролла
==============*/
function Skroll__Cheack()
{
  let scrollPos = window.scrollY;
//  console.log(scrollPos);
  if (scrollPos > 650)
  {
      header.classList.add('grey');  //Выдача динамического класса CSS
  } else
  {
      header.classList.remove('grey');
  };
};



//=============================================================================
//================================Code=========================================
//=============================================================================

//Обработчик скролла
window.addEventListener("scroll",Skroll__Cheack);

//Проверка позиции скролла документа при загрузке DOMContentLoaded
document.addEventListener("DOMContentLoaded",Skroll__Cheack);





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
/*
//Обработчик клика
for (let navItem of navigationLink)
{
  navItem.addEventListener("click", function()
  {
    let scrollPos = window.scrollY;
    let Feathers_pos = document.getElementById("Feathers");
    console.log(Feathers_pos);

    console.log(navItem.text);
  });
};
*/
