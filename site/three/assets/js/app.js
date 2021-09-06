//pre load
window.addEventListener('load', () =>{
  const preload = document.querySelector(".Pre-loader");
  preload.classList.add('finish');
})




// import


let container;
let camera;
let renderer;
let scene;
let samurai;

function init() {
  container = document.querySelector('.scene');


  // create scene ===========================================
  scene = new THREE.Scene();

  const fow = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  camera = new THREE.PerspectiveCamera(fow, aspect, near, far);

  camera.position.set(0, -10, 110);


  // light  ===========================================
  let hlight = new THREE.AmbientLight (0x404040,12);
  scene.add(hlight);

  let directionalLight = new THREE.DirectionalLight(0xffffff,2);
  directionalLight.position.set(-5, -5, -5);
  // directionalLight.castShadow = true;
  scene.add(directionalLight);


  //renderer ===========================================
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);



  //Load model  ===========================================
  let loader = new THREE.GLTFLoader
  loader.load ('assets/i/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    samurai = gltf.scene.children[0];
    animate();
  })

  function animate(){
    requestAnimationFrame(animate);
    samurai.rotation.z += 0.002;
    renderer.render(scene, camera);
  }



} // end

init();


function onWindowResize(){
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight)
}

window.addEventListener("resize", onWindowResize())
