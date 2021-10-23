

// (() => {
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

  camera.position.z = 5
  scene.add(camera)


  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('i/part.png')


  const geometry = new THREE.BufferGeometry()
  const count = 4000
  const position = new Float32Array(count * 3)
  for ( let i = 0;  i < count * 3; i++ ){
    position[i] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(position , 3))


  const material = new THREE.PointsMaterial({
    size: 0.08,
    sizeAttenuation: true,
    color: new THREE.Color('#FFFFFF'),
    map: texture,
    alphaMap: texture,
    transparent: true,
    depthTest: false

  })


  const particle = new THREE.Points(geometry, material)
  scene.add(particle)

  const raf = () => {
    particle.rotation.x -= 0.003
    renderer.render(scene, camera)
    window.requestAnimationFrame(raf)


  }

  raf()


  window.addEventListener( 'resize', onWindowResize, false );

  function onWindowResize() {

     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize( window.innerWidth, window.innerHeight );

  }


// })();
