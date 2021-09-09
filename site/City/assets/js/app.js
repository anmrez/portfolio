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



// scene  ================
let sceneWidth = 20;
// street
{
const streetGeo = new THREE.PlaneGeometry( sceneWidth, 8 )
const streetMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
const street = new THREE.Mesh( streetGeo, streetMaterial );
street.rotation.x = Math.PI * -0.5;
scene.add( street );
}


// sidewalk
{
  for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 1){
    const geometry = new THREE.BoxGeometry ( 0.95, 0.1, 0.95  );
    const material = new THREE.MeshBasicMaterial( {color: 0x828282} );
    const sidewalk1 = new THREE.Mesh( geometry, material );
    sidewalk1.position.set ( x + 0.5, 0.05, -2.4 );
    scene.add( sidewalk1 );

    const sidewalk2 = new THREE.Mesh( geometry, material );
    sidewalk2.position.set ( x + 0.5, 0.05, -3.4 );
    scene.add( sidewalk2 );
  }
}

// building
{
  for (let x = -sceneWidth / 2; x < sceneWidth / 2; x += 4){
    const w = 3.5;
    const h = random( 4, 8 );
    const geometry = new THREE.BoxGeometry ( w, h, 5  );
    const material = new THREE.MeshBasicMaterial( {color: 0xF1D049} );
    const building = new THREE.Mesh( geometry, material );
    building.position.set ( x + w/2, h/2, -9 );
    scene.add( building );

  }
}


// trees
{
  const mumTrees = random( 3, 5 );
  for (let i = 0; i < mumTrees; i++){
    const tree = new THREE.Group();
    const h = random(2, 4);
    const geometry = new THREE.CylinderGeometry( 0.15, 0.25, h, 5);
    const material = new THREE.MeshBasicMaterial( {color: 0xA19281} );
    const trunk = new THREE.Mesh( geometry, material );
    tree.add( trunk );

    const mumLeaves = random( 3, 5 );
    for ( let j = 0; j < mumLeaves; j++){
      const leafGeometry = new THREE.IcosahedronGeometry( random( 0.5, 1 ) );
      const leafMaterial = new THREE.MeshBasicMaterial( {color: 0x347f41} );
      const leaf = new THREE.Mesh( leafGeometry, leafMaterial );

      let x = random( -0.5, 0.5);
      let y = h/2 + random( -0.8, 0.5);
      let z = random( -0.5, 0.5);
      leaf.position.set( x, y, z );
      leaf.rotation.x = random( 0, 5)
      leaf.rotation.z = random( 0, 5)
      tree.add( leaf );

    }

    let x = random(-sceneWidth / 2, sceneWidth / 2)
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

// load model

const loader = new THREE.ObjectLoader();
loader.load('assets/3d_models/Bench.json', onLoad );

function onLoad(bench){
  bench.scale.set( 0.7, 0.7, 0.7 );
  
  let x = random(-sceneWidth / 2, sceneWidth / 2)
  bench.position.set( x, 0.5, -3.5)
  scene.add(bench);
  animate();
}

// animation  ================
function animate() {

  controls.update();

  requestAnimationFrame(animate)
  renderer.render(scene, camera)

};
animate();


function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener("resize", onWindowResize())
