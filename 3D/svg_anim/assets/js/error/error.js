let error = document.getElementById("animation__error");

  let animError = lottie.loadAnimation({
    container: error,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/js/error/error.json",
    // onEnterFrame: function(e) { console.log(e); },
  });
  // animError.destroy()

function starnAnimError(){

  // console.log(`starnanimError`);
  animError.playSegments([0,60], true);
  // animError.addEventListener('complete', () => {
  //   console.log('complete');
  //   // animError.destroy()
  // });
}
