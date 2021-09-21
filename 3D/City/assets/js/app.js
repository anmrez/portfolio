  // import Stats from './assets/js/gui/stats.module.js';
	// import { GUI } from './assets/js/gui/dat.gui.module.js';

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
let hlight = new THREE.AmbientLight (0x404040, 3);
scene.add(hlight);

// street
{
  const streetGeo = new THREE.PlaneGeometry( sceneWidth/3, 4, 20, 20 )
  // const tilesBaseColor = textureLoader.load('assets/texture/1K-asphalt_11_Diffuse.jpg');
  const streetMaterial = new THREE.MeshStandardMaterial( {
    color: 0x000000,
    side: THREE.DoubleSide
    // map: tilesBaseColor,
  } );

  let z = 2;
  const street_1 = new THREE.Mesh( streetGeo, streetMaterial );
  street_1.rotation.x = Math.PI * -0.5;
  street_1.position.set( sceneWidth/3, 0, z)
  scene.add( street_1 );

  const street_2 = new THREE.Mesh( streetGeo, streetMaterial );
  street_2.rotation.x = Math.PI * -0.5;
  street_2.position.set( -sceneWidth/3, 0, z)
  scene.add( street_2 );

  const street_3 = new THREE.Mesh( streetGeo, streetMaterial );
  street_3.rotation.x = Math.PI * -0.5;
  street_3.position.set( 0, 0, z)
  scene.add( street_3 );

  const street_4 = new THREE.Mesh( streetGeo, streetMaterial );
  street_4.rotation.x = Math.PI * -0.5;
  street_4.position.set( sceneWidth/3, 0, -z)
  scene.add( street_4 );

  const street_5 = new THREE.Mesh( streetGeo, streetMaterial );
  street_5.rotation.x = Math.PI * -0.5;
  street_5.position.set( -sceneWidth/3, 0, -z)
  scene.add( street_5 );

  const street_6 = new THREE.Mesh( streetGeo, streetMaterial );
  street_6.rotation.x = Math.PI * -0.5;
  street_6.position.set( 0, 0, -z)
  scene.add( street_6 );

}

//street linear
{
  const streetLinearGeo = new THREE.PlaneGeometry( 1, 0.33 )
  const streetLinearMaterial = new THREE.MeshStandardMaterial( {
    color: 0xffffff
  } );

  for (let x = sW0 + 1; x < sW1; x += 3){
    const streetLinear = new THREE.Mesh( streetLinearGeo, streetLinearMaterial );
    streetLinear.rotation.x = Math.PI * -0.5;
    streetLinear.position.set( x, 0.01, 1)
    scene.add( streetLinear );
  }
}

//plate beach
{
  const beachGeo = new THREE.PlaneBufferGeometry(20, 8, 20, 20);
  // const beachGeo = new THREE.PlaneBufferGeometry(sceneWidth/3, 4, 20, 20);
  const tilesBaseColor = textureLoader.load('assets/texture/tant2.jpg');
  const beachMaterial = new THREE.MeshPhongMaterial( {
    // color: 0x606118
    side: THREE.DoubleSide,
    map: tilesBaseColor,
    // wireframe: true,
  } );
  let beachPos = beachGeo.getAttribute("position");
  let beachPa = beachPos.array;
  // console.log(beachPa);

  let beachArray = []
  for (let i = 2; i < beachPa.length; i += 3){
    beachPa[i] = random(0, 0.2)
  }
  // console.log(beachPa);
  // console.log(beachArray);

  let z = 10;

  const beach = new THREE.Mesh( beachGeo, beachMaterial );
  beach.rotation.x = Math.PI*1.55;
  beach.position.set( 0, -0.65, z-2.1)
  scene.add( beach );

  // const beach_1 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_1.rotation.x = Math.PI * -0.5;
  // beach_1.position.set( sceneWidth/3, 0, z)
  // scene.add( beach_1 );
  //
  // const beach_2 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_2.rotation.x = Math.PI * -0.5;
  // beach_2.position.set( -sceneWidth/3, 0, z)
  // scene.add( beach_2 );
  //
  // const beach_3 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_3.rotation.x = Math.PI * -0.5;
  // beach_3.position.set( 0, 0, z)
  // scene.add( beach_3 );
  //
  // const beach_4 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_4.rotation.x = Math.PI * -0.5;
  // beach_4.position.set( sceneWidth/3, 0, z-4)
  // scene.add( beach_4 );
  //
  // const beach_5 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_5.rotation.x = Math.PI * -0.5;
  // beach_5.position.set( -sceneWidth/3, 0, z-4)
  // scene.add( beach_5 );
  //
  // const beach_6 = new THREE.Mesh( beachGeo, beachMaterial );
  // beach_6.rotation.x = Math.PI * -0.5;
  // beach_6.position.set( 0, 0, z-4)
  // scene.add( beach_6 );

}

//plate test
//
//   const geometry = new THREE.PlaneBufferGeometry(2, 2, 10, 10);
//
//   let pos = geometry.getAttribute("position");
//   let pa = pos.array;
//   // console.log(pa);
//
//   // for (let i = 2; i < pa.length; i += 3){
//   //   pa[i] += random(0, 0.1);
//   // }
//   // console.log(pa);
//   const material = new THREE.MeshPhongMaterial( {
//     color: 0xcccccc,
//     side: THREE.DoubleSide,
//     wireframe: true,
//   } );
//   const mesh = new THREE.Mesh( geometry, material );
//   mesh.rotation.x = Math.PI/2
//   mesh.position.set(0, 2, 0)
//   scene.add( mesh )
//
//     for (let i = 2; i < pa.length; i += 3){
//       pa[i] += random(0, 0.1);
//     }
//
//
//   // const count: number = geometry.getAttributes("position").count
//   // console.log(count);
// function water(){
//     const now = Date.now() / 300;
//     for (let i = 0; i < 121; i++){
//       const x = geometry.getAttribute("position").getX(i);
//       const y = geometry.getAttribute("position").getY(i);
//       const xsin = Math.sin( x + now);
//       const ycox = Math.sin( y + now);
//       geometry.getAttribute("position").getZ(i, xsin)
//     }
//
//     geometry.computeVertexNormals();
//     geometry.getAttribute("position").needsUpdate = true
//   }



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
  const mumTrees = Math.floor(random( 4, 6 ));
  let wi = sceneWidth / mumTrees;
  let x = [];
  for (let k = 0; k < mumTrees; k++){
    x[k] = random( wi*k, wi*(k+1) )
    x[k] = x[k] - 10;
  }
  for (let i = 0; i < mumTrees; i++){
    const tree = new THREE.Group();
    const h = random(2, 4);
    const geometry = new THREE.CylinderGeometry( 0.15, 0.25, h, 5);
    // const tilesBaseColor = textureLoader.load('assets/texture/wood.jpg');
    const material = new THREE.MeshStandardMaterial( {
      color: 0xA19281
      // map: tilesBaseColor
    } );
    const trunk = new THREE.Mesh( geometry, material );
    tree.add( trunk );

    // Leaves
    const mumLeaves = random( 3, 5 );
    for ( let j = 0; j < mumLeaves; j++){
      const leafGeometry = new THREE.IcosahedronGeometry( random( 0.5, 1 ) );
      // const tilesBaseColor = textureLoader.load('assets/texture/ls.jpg');
      const leafMaterial = new THREE.MeshStandardMaterial( {
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


    // let x = random(sW0, sW1)
    let y = h/2
    let z = random(-4.2, -4.8)
    tree.position.set ( x[i], y, z );
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

// lamp
{
  for (let x = sW0 + 1; x < sW1; x += 5){
    loader.load('assets/3d_models/street_lamp.glb', lamp);
    function lamp(gltf){
      // const pointLightX1 = new THREE.PointLight( 0xffffff, 1, 2 );
      // pointLightX1.position.set( x+0.5, 2, -2 );
      // scene.add( pointLightX1 );
      //
      // const pointLightX2 = new THREE.PointLight( 0xffffff, 1, 2 );
      // pointLightX2.position.set( x-0.5, 2, -2 );
      // scene.add( pointLightX2 );
      //
      // const pointLightZ1 = new THREE.PointLight( 0xffffff, 1, 2 );
      // pointLightZ1.position.set( x, 2, -1.5 );
      // scene.add( pointLightZ1 );
      //
      // const pointLightZ2 = new THREE.PointLight( 0xffffff, 1, 2 );
      // pointLightZ2.position.set( x, 2, -2.5 );
      // scene.add( pointLightZ2 );
      //
      // const pointLightY = new THREE.PointLight( 0xffffff, 1, 4 );
      // pointLightY.position.set( x, 1, -2 );
      // scene.add( pointLightY );

      gltf.scene.scale.set( 0.1, 0.1, 0.1 );
      gltf.scene.position.set( x, 0, -2)
      scene.add( gltf.scene );

    }
  } // load lamp
}
// /lamp




// Border
{
  let groupBorder = new THREE.Group();
  for (let x = sW0 + 0.5; x < sW1; x += 0.75){
    loader.load('assets/3d_models/border3.glb', borderBlender );
    function borderBlender(gltf){
      gltf.scene.scale.set( 0.3, 0.3, 0.3 );
      // gltf.scene.rotation.y = 1.55
      // let x = random( -sceneWidth/2+1, sceneWidth/2-1)
      gltf.scene.rotation.y = Math.PI * 1;
      gltf.scene.position.set( x, 0.1, -1.8)
      groupBorder.add ( gltf.scene )
      // animate();
    }
  } // load Border
  scene.add( groupBorder );
}
{
  let groupBorder = new THREE.Group();
  for (let x = sW0 + 0.5; x < sW1; x += 0.75){
    loader.load('assets/3d_models/border3.glb', borderBlender );
    function borderBlender(gltf){
      gltf.scene.scale.set( 0.3, 0.3, 0.3 );
      // gltf.scene.rotation.y = 1.55
      // let x = random( -sceneWidth/2+1, sceneWidth/2-1)
      gltf.scene.rotation.y = Math.PI * 1;
      gltf.scene.position.set( x, 0.1, 4)
      groupBorder.add ( gltf.scene )
      // animate();
    }
  } // load Border
  scene.add( groupBorder );
}
// /Border


// Plate
{
  let groupPlate = new THREE.Group();
  for (let x = sW0 + 0.5; x < sW1; x += 1){
    loader.load('assets/3d_models/plate.glb', plateBlender );
    function plateBlender(gltf){
      gltf.scene.scale.set( 0.5, 1, 0.5 );
      // gltf.scene.rotation.y = 1.55
      // let x = random( -sceneWidth/2+1, sceneWidth/2-1)
      // gltf.scene.rotation.y = Math.PI * 1.5;
      gltf.scene.position.set( x, 0.1, -2.4)
      groupPlate.add ( gltf.scene )
      // animate();
    }
  } // load Border

  for (let x = sW0 + 0.5; x < sW1; x += 1){
    loader.load('assets/3d_models/plate.glb', plateBlender2 );
    function plateBlender2(gltf){
      gltf.scene.scale.set( 0.5, 1, 0.5 );
      // gltf.scene.rotation.y = 1.55
      // let x = random( -sceneWidth/2+1, sceneWidth/2-1)
      // gltf.scene.rotation.y = Math.PI * 1.5;
      gltf.scene.position.set( x, 0.1, -3.4)
      groupPlate.add ( gltf.scene )
      // animate();
    }
  } // load Border
  scene.add( groupPlate );
}
// /Plate


// bench
{
  loader.load('assets/3d_models/bench.glb', benchBlender, loading );
  function benchBlender(gltf){
    gltf.scene.scale.set( 0.18, 0.18, 0.18 );
    gltf.scene.rotation.y = Math.PI /2
    let x = random( -sceneWidth/2+1, sceneWidth/2-1)
    gltf.scene.position.set( x, 0.35, -3.45)
    scene.add( gltf.scene );
  }
  let loadText = document.querySelector(".Load");
  function loading(xhr){
    let lo = xhr.loaded / xhr.total * 100
    // console.log( lo + '% loaded' );
    loadText.textContent = Math.floor(lo) + "% Loading...";
    if ( lo >= 100 )
    document.querySelector(".Pre-loader").classList.add('finish');

  }
}
// /bench


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
