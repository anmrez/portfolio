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
