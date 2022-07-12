import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel, setupAnimatedModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [fireData,violinData] = await Promise.all([
 
    loader.loadAsync('/assets/models/Fire.glb'),
    loader.loadAsync('/assets/models/Violin.glb'),
  ]);




  const fire = setupAnimatedModel(fireData);
  fire.position.set(0, 0, 0);
  const violin = setupModel(violinData);
  violin.position.set(3, 0.3, 0);
  violin.scale.set(10, 10, 10);
  return {
    fire,
    violin,
  };
}

export { loadBirds };
