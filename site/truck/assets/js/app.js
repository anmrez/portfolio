

const lng = document.querySelectorAll(".lng")
const allLang = ["ru", "en", "fr"]




function langDelete(){
  lng.forEach(item => {
    item.classList.remove("lngActive")
  });
}

function language(n){
  langDelete()
  lng[n].classList.add("lngActive")

  let lngHref
  if (n == 0) {lngHref = "#ru"} else
  if (n == 1) {lngHref = "#en"} else
  lngHref = "#fr"

  location.href = window.location.pathname + lngHref;
  location.reload()

}





changeLanguage()
function changeLanguage(){
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);


  if (!allLang.includes(hash)){
    location.href = window.location.pathname + "#ru";
    location.reload()
  }


  document.getElementById("office").innerHTMl = langArr["office"][hash]


  document.getElementById("block__3__title").innerHTMl='Новый текст';

  for (let key in langArr){
    let elem = document.getElementById(key)
    if (elem) {
      elem.innerHTML = langArr[key][hash]
    }
  }



  langActive(hash)
}


function langActive(hash){
  if (hash == "ru"){
    lng[0].classList.add("lngActive")
  } else
  if (hash == "en"){
    lng[1].classList.add("lngActive")
  } else
  if (hash == "fr"){
    lng[2].classList.add("lngActive")
  }

}
