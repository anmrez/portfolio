
  const canvas = document.getElementById('canvas')
  const scene = new THREE.Scene()

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  )
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
  canvas.appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  )

// Позиция камеры
  camera.position.z = 5
  scene.add(camera)


// создание геометрии частиц
  const geometry = new THREE.BufferGeometry()
  const count = 4000
  const position = new Float32Array(count * 3)
  for ( let i = 0;  i < count * 3; i++ ){
    position[i] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(position , 3))


// Загрузка тектуры
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('i/part.webp')



// материал частиц

const red = new THREE.Color('#FF0000');
const blue = new THREE.Color('#0000FF');
  let material = new THREE.PointsMaterial({
    size: 0.08,
    sizeAttenuation: true,
    color: blue,
    map: texture,
    alphaMap: texture,
    transparent: true,
    depthTest: false

  })

// создание частиц
  let particle = new THREE.Points(geometry, material)
  scene.add(particle)

  const raf = () => {
    particle.rotation.x -= 0.0025
    renderer.render(scene, camera)
    window.requestAnimationFrame(raf)


  }


  raf()

// Адаптивность холста
  window.addEventListener( 'resize', onWindowResize, false );

  function onWindowResize() {

     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize( window.innerWidth, window.innerHeight );

  }


// hover


let link = document.querySelectorAll(".link__portfolio")
console.log(link);


function howerBtnMove() {
  console.log("move");

  scene.remove(particle)
  material = new THREE.PointsMaterial({
    size: 0.08,
    sizeAttenuation: true,
    color: red,
    map: texture,
    alphaMap: texture,
    transparent: true,
    depthTest: false

  })
  particle = new THREE.Points(geometry, material)
  scene.add(particle)

}

function howerBtnOver(){
  material = new THREE.PointsMaterial({
    color: new THREE.Color('#0000FF'),
  })
}
