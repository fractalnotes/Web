import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {Vector3} from 'three';
import gsap from './../../../gsap-core.js'
function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; //for smoother movement
    
    //disabling controls
   
    
    controls.saveState();
    //controls.enabled = false;
    //for disabling panning
    //controls.enablePan = false
    //controls.enableRotate = false;
    //controls.enableZoom = false;
    //controls.enablePan = false;
    //controls.enableKeys = false;
    //autorotate very useful
    //controls.minAzimuthAngle = - 10; // default
    //controls.maxAyimuthAngle = -10; // default
    controls.minPolarAngle = 0; // radians
	controls.maxPolarAngle = Math.PI-Math.PI/2; // radians

    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 2;
    controls.maxDistance = 170;
    
    
    
    controls.enabled = true;
           

    
     // Camera is moved in the same direction and by the same offset, so angle between viewer and target will remain the same.   
    

    // sometime later:
    controls.tick = () => controls.update();
    gsap.to(camera.position, { duration: 10, ease: "power1.inOut",
            x: 0,
            y: 20.2,
            z: 0})
            gsap.to(controls.target, { duration: 10, ease: "power1.inOut",
            x: 0.15,
            y: 5,
            z: 0})
    return controls;
    
    }
export { createControls };