import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
} from 'three';

function createLights() {
  // const ambientLight = new AmbientLight('white', 2);

  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    1, // intensity
  );

  const mainLight = new DirectionalLight('white', 2);
  const pointLight = new PointLight('yellow', 10);
  pointLight.position.set(0, 1, 0);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight,pointLight };
}

export { createLights };
