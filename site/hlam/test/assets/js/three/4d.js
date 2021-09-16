import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/GLTFLoader.js';



function main() {
  const canvas = document.querySelector('#c');  // find canvas for HTML
  const renderer = new THREE.WebGLRenderer({ canvas, transparent: true,  alpha: true});

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2, 2); //  position


  // controls -------------------------------------------------------------
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 60);
  controls.update();
  // controls.minDistance = 0.15;
  // controls.maxDistance = 0.3;

  // Scene  -------------------------------------------------------------
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x36393F); // fon



// // light-------------------------------------------------------------
  {
    const color = 0x878787;
    const intensity = 0.4;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(2, 2, 9);
    scene.add(light);
    scene.add(light.target);
  }

//  AmbientLight  -------------------------------------------------------------
  {
  const color = 0xFFFFFF;
  const intensity = 0.5;
  const ambient = new THREE.AmbientLight( color, intensity);
  scene.add(ambient);
  }




  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();




    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }



  // Load models -------------------------------------------------------------
  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('assets/3d/monkey.glb', (gltf) => {
      const root = gltf.scene;
      root.traverse((node) => {
        if (!node.isMesh) return;
        node.material.wireframe = true;
        // node.material.polygonOffset = true;

          var geo = new THREE.EdgesGeometry( node.geometry ); // or WireframeGeometry
          var mat = new THREE.LineBasicMaterial( { color: 0xa1a1a1 } );
          var wireframe = new THREE.LineSegments( geo, mat );
          node.add( wireframe );
       });
      // const edge = new THREE.EdgesGeometry( root )
      scene.add(root);



  // -------------------------------------------------------------
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());


      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);


      controls.target.copy(boxCenter);
      controls.update();
    });
  }


// Подгоняет холст по монитор
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }


// render -------------------------------------------------------------
  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  } //  function render() {

  requestAnimationFrame(render);
} //  function main()

main();
