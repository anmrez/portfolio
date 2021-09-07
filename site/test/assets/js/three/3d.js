let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  //camera
  camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;


  //control camera
  const controls = new THREE.OrbitControls(camera, renderer.domElement );
  // controls.addEventListener('change', renderer);

  //light
  hlight = new THREE.AmbientLight (0x404040,100);
  scene.add(hlight);

  directionalLight = new THREE.DirectionalLight(0xffffff,100);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);


  light = new THREE.PointLight(0xc4c4c4,10);
  light.position.set(0,300,500);
  scene.add(light);


  light2 = new THREE.PointLight(0xc4c4c4,10);
  light2.position.set(500,100,0);
  scene.add(light2);


  light3 = new THREE.PointLight(0xc4c4c4,10);
  light3.position.set(0,100,-500);
  scene.add(light3);


  light4 = new THREE.PointLight(0xc4c4c4,10);
  light4.position.set(-500,300,500);
  scene.add(light4);


  //render
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //load
  let loader = new THREE.GLTFLoader();
  loader.load('scene.gltf', function(gltf){
    car = gltf.scene.children[0];
    car.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    animate();
  });
}
function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
init();





























// // import 'assets\css\styles.css'
//
// // import * THREE from 'three';
//
// // import {OrbitControls} from './OrbitControls.js'
//
// // import { OrbitControls } from 'https://cdn.skypack.dev/three@<version>/examples/jsm/controls/OrbitControls.js';
//
// let renderer;
// let camera;
// let scene;
//
//
// function model (){
//
// const web_scene = document.querySelector('.block_1__content');
// console.log(web_scene);
// // scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color('0xffffff');
//
//
// // camera
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 6000 );
//
// const controls = new OrbitControls();
//
//
// // renderer
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// web_scene.appendChild( renderer.domElement ); // Место отрисовки
//
// //light
// const ambient = new THREE.AmbientLight(0xffffff, 1)
// scene.add(animate)
//
// let light = new THREE.PointLight(0xc4c4c4, 1)
// light.position.set(0, 300, 500)
// scene.add(light)
//
// let light2 = new THREE.PointLight(0xc4c4c4, 1)
// light2.position.set(500, 300, 500)
// scene.add(light2)
//
//
// // my model
// const loader = new THREE.GLTFLoader();
// loader.load('assets/3d/wooden_crate.glb', gltf => {
//   scene.add(gltf.scene);
// },
//   function (error) {
//     console.log('error:' + error);
//   }
//
// );  //loader.load
// console.log(loader);
//
//
// // function render() {
// //         requestAnimationFrame( render );
// //   cube.rotation.x += 0.01;
// //   cube.rotation.y += 0.01;
// //   renderer.render( scene, camera );
// // }
// // render();
//
//
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// };
// animate();
// }; // function model
// model ();
//
//
//
//
// // // create box
// // var geometry = new THREE.BoxGeometry( 10, 10, 10);
// //
// // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// //
// // var cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// //
// // camera.position.z = 25;
// //
// //
// // function render() {
// //         requestAnimationFrame( render );
// //   cube.rotation.x += 0.01;
// //   cube.rotation.y += 0.01;
// //   renderer.render( scene, camera );
// // }
// // render();
