// Name ===================================

let inputName = document.querySelector(".input__name")
let inputPass = document.querySelector(".input__pass")

// Check inputs ===========================

function checkInputs() {
  if ( inputPass.value == 0 || inputName.value == 0) {
    starnAnimError()
    console.log(`start starnAnimError`);
  } else {
    starnAnimSucces()
    console.log(`start starnAnimSucces`);
  }

}
