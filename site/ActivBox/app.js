
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
  console.log(scrollPos);
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



document.querySelector("[data-scrol]").addEventListener("click", function(event)
{
  event.preventDefault();
  let element__id =

}

/*
//Обработчик клика
for (let navItem of navigationLink)
{
  navItem.addEventListener("click", function()
  {
    console.log(navItem.text);
  });
};
*/
