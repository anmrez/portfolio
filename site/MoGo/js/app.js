function openSidebar() {
  document.getElementById("Burger").classList.toggle('Burger__active');
  document.getElementById("Sidebar").classList.toggle('Sidebar__active');
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
