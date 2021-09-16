

let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree


document.addEventListener('DOMContentLoaded', () => {


const body = document.querySelector('body')
body.addEventListener('mousemove', e =>{
  clientX = e.pageX
  clientY = e.pageY

  request = requestAnimationFrame(updateMe)

  MouseCoords(e);
  cursor.classList.remove('hidden');
  aura.classList.remove('hidden');
})



function updateMe() {

  dx     = clientX - cx
  dy     = clientY - cy
  tiltx  = dy / cy
  tilty  = dx / cx
  radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
  degree = radius * 12
  gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

} // function updateMe




const cursor  = document.getElementById('cursor');
const aura    = document.getElementById('aura');
const links   = document.getElementsByTagName('a');

mouseX = 0, mouseY = 0, posX = 0, posY = 0
  function MouseCoords(e){
    mouseX = e.pageX
    mouseY = e.pageY

  }; // function MouseCoords
  gsap.to({}, .01, {
    repeat: -1,

    onRepeat: () =>{
      posX += (mouseX - posX) / 5
      posY += (mouseY - posY) / 5

      gsap.set(cursor, {
        css: {
          left: mouseX ,
          top:  mouseY
        }
      }) // gsap.set(cursor

      gsap.set(aura, {
        css: {
          left: posX - 23 ,
          top:  posY - 23
        }
      }) // gsap.set(aura


    } // onRepeat
  }) // gsap.to



  for(let i = 0; i < links.length; i++) {

    links[i].addEventListener('mouseover', () => {
      cursor.classList.add('active')
      aura.classList.add('active')
    }) // mouseover

    links[i].addEventListener('mouseout', () => {
      cursor.classList.remove('active')
      aura.classList.remove('active')
    }) // mouseout

  } // for

  body.addEventListener('mouseout', () => {
		cursor.classList.add('hidden');
		aura.classList.add('hidden');
	}) //  body.addEventListener

}) // document.addEventListener
