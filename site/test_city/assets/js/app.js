let container;
let camera;
let renderer;
let scene;

scene = new THREE.Scene();


// Camera
{

const fow = 35;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 500;

camera = new THREE.PerspectiveCamera(fow, aspect, near, far);

camera.position.set(0, 5, 20);
}


// renderer
{
renderer = new THREE.WebGLRenderer( { alpha:true } );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
}


// controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);


//=============================================================================
// scene  ================
let sceneWidth = 20;
const sW0 = -sceneWidth / 2;
const sW1 = sceneWidth / 2;
const textureLoader = new THREE.TextureLoader();

// light
let hlight = new THREE.AmbientLight (0x404040,12);
scene.add(hlight);

// street
{
  const streetGeo = new THREE.PlaneGeometry( sceneWidth/3, 4, 20, 20 )
  // const tilesBaseColor = textureLoader.load('assets/texture/1K-asphalt_11_Diffuse.jpg');
  const streetMaterial = new THREE.MeshBasicMaterial( {
    color: 0x000000
    // side: THREE.DoubleSide
    // map: tilesBaseColor,
  } );


  const street_1 = new THREE.Mesh( streetGeo, streetMaterial );
  street_1.rotation.x = Math.PI * -0.5;
  street_1.position.set( sceneWidth/3, 0, 2)
  scene.add( street_1 );

  const street_2 = new THREE.Mesh( streetGeo, streetMaterial );
  street_2.rotation.x = Math.PI * -0.5;
  street_2.position.set( -sceneWidth/3, 0, 2)
  scene.add( street_2 );

  const street_3 = new THREE.Mesh( streetGeo, streetMaterial );
  street_3.rotation.x = Math.PI * -0.5;
  street_3.position.set( 0, 0, 2)
  scene.add( street_3 );

  const street_4 = new THREE.Mesh( streetGeo, streetMaterial );
  street_4.rotation.x = Math.PI * -0.5;
  street_4.position.set( sceneWidth/3, 0, -2)
  scene.add( street_4 );

  const street_5 = new THREE.Mesh( streetGeo, streetMaterial );
  street_5.rotation.x = Math.PI * -0.5;
  street_5.position.set( -sceneWidth/3, 0, -2)
  scene.add( street_5 );

  const street_6 = new THREE.Mesh( streetGeo, streetMaterial );
  street_6.rotation.x = Math.PI * -0.5;
  street_6.position.set( 0, 0, -2)
  scene.add( street_6 );

}

//street linear
{
  const streetLinearGeo = new THREE.PlaneGeometry( 1, 0.33 )
  const streetLinearMaterial = new THREE.MeshBasicMaterial( {
    color: 0xffffff
  } );

  for (let x = sW0 + 1; x < sW1; x += 3){
    const streetLinear = new THREE.Mesh( streetLinearGeo, streetLinearMaterial );
    streetLinear.rotation.x = Math.PI * -0.5;
    streetLinear.position.set( x, 0.01, 1)
    scene.add( streetLinear );
  }
}


// sidewalk
{
  for (let x = sW0; x < sW1; x += 1){
    const geometry = new THREE.BoxGeometry ( 0.95, 0.05, 0.95  );
    // const tilesBaseColor = textureLoader.load('assets/texture/sidewalk.jpg');
    const material = new THREE.MeshBasicMaterial( {
      color: 0x828282
      // map: tilesBaseColor
    } );
    const sidewalk1 = new THREE.Mesh( geometry, material );
    sidewalk1.position.set ( x + 0.5, 0.05, -2.4 );
    scene.add( sidewalk1 );

    const sidewalk2 = new THREE.Mesh( geometry, material );
    sidewalk2.position.set ( x + 0.5, 0.05, -3.4 );
    scene.add( sidewalk2 );
  }
}

// building
// {
//   for (let x = sW0; x < sW1; x += 4){
//     const w = 3.5;
//     const h = random( 4, 8 );
//     const geometry = new THREE.BoxGeometry ( w, h, 5  );
//     // const tilesBaseColor = textureLoader.load('assets/texture/home.jpg');
//     const material = new THREE.MeshBasicMaterial( {
//       color: 0xF1D049
//       // map: tilesBaseColor
//     } );
//     const building = new THREE.Mesh( geometry, material );
//     building.position.set ( x + w/2, h/2, -9 );
//     scene.add( building );
//
//   }
// }


// trees
{
  const mumTrees = random( 3, 5 );
  for (let i = 0; i < mumTrees; i++){
    const tree = new THREE.Group();
    const h = random(2, 4);
    const geometry = new THREE.CylinderGeometry( 0.15, 0.25, h, 5);
    // const tilesBaseColor = textureLoader.load('assets/texture/wood.jpg');
    const material = new THREE.MeshBasicMaterial( {
      color: 0xA19281
      // map: tilesBaseColor
    } );
    const trunk = new THREE.Mesh( geometry, material );
    tree.add( trunk );

    const mumLeaves = random( 3, 5 );
    for ( let j = 0; j < mumLeaves; j++){
      const leafGeometry = new THREE.IcosahedronGeometry( random( 0.5, 1 ) );
      // const tilesBaseColor = textureLoader.load('assets/texture/ls.jpg');
      const leafMaterial = new THREE.MeshBasicMaterial( {
        color: 0x347f41
        // map: tilesBaseColor
      } );
      const leaf = new THREE.Mesh( leafGeometry, leafMaterial );

      let x = random( -0.5, 0.5);
      let y = h/2 + random( -0.8, 0.5);
      let z = random( -0.5, 0.5);
      leaf.position.set( x, y, z );
      leaf.rotation.x = random( 0, 5)
      leaf.rotation.z = random( 0, 5)
      tree.add( leaf );

    }

    let x = random(sW0, sW1)
    let y = h/2
    let z = random(-4.2, -4.8)
    tree.position.set ( x, y, z );
    scene.add( tree );
  } // for

}


// random function

  function random( min, max ){
    return Math.random() * ( max - min ) + min;
  }


//=============================================================================
// load model ==================


const loader = new THREE.GLTFLoader();

loader.load('assets/3d_models/bench.glb', benchBlender, loading );
for (let x = sW0 + 1; x < sW1; x += 5){
  loader.load('assets/3d_models/street_lamp.glb',
  function lamp(gltf){
  gltf.scene.scale.set( 0.1, 0.1, 0.1 );
  gltf.scene.position.set( x, 0, -2)
  scene.add( gltf.scene );
  animate();
}
 );
} // load lamp

function benchBlender(gltf){
  gltf.scene.scale.set( 0.18, 0.18, 0.18 );
  gltf.scene.rotation.y = 1.55
  let x = random( -sceneWidth/2+1, sceneWidth/2-1)
  gltf.scene.position.set( x, 0.2, -3.5)
  scene.add( gltf.scene );
  animate();
}
function loading(xhr ){
  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  if ( xhr.loaded / xhr.total * 100 == 100 ){
    const preload = document.querySelector(".Pre-loader");
    preload.classList.add('finish');
  }

}



//=============================================================================
// animation  ================
function animate() {

  controls.update();

  requestAnimationFrame(animate)
  renderer.render(scene, camera)

};
animate();


window.addEventListener('resize', onWindowResize())
function onWindowResize(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
