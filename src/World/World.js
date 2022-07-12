import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import * as THREE from 'three'


let camera;
let controls;
let renderer;
let scene;
let loop;
let star;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight,pointLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight,pointLight);
    
    
    const resizer = new Resizer(container, camera, renderer);
  }
  

  async init() {
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
        roughness: 0,
        metalness:0.4

      })
      
      const star = new THREE.Mesh(geometry,material);
      
      const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x,y,z);
      scene.add(star)
      
    }
  
    const stars = Array(300).fill().forEach(addStar)

    
    
    const {fire,violin} = await loadBirds();
    
    // move the target to the center of the front bird
    controls.target.copy(fire.position);

    loop.updatables.push(fire);
    scene.add(fire,violin);
    
  }
 

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
  
}


export { World };
