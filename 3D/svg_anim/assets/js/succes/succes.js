let succes = document.getElementById("animation__succes");

  let animSucces = lottie.loadAnimation({
    container: succes,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/js/succes/succes.json",
    // onEnterFrame: function(e) { console.log(e); },
  });
  // animSucces.destroy()

function starnAnimSucces(){

  // console.log(`starnAnimSucces`);
  animSucces.playSegments([0,60], true);
  // animSucces.addEventListener('complete', () => {
  //   console.log('complete');
  //   // animSucces.destroy()
  // });
}
