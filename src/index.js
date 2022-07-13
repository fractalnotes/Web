import { World } from './World/World.js';
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
  let htmlcontent = `<p>It's me again!</p>`;
let content = document.getElementById("content");

  function animation() {
  content.innerHTML = htmlcontent;
  
  content.classList.add("animate");
  
  setTimeout(function() {
    content.classList.remove("animate");
  }, 500); // 500 is the same time as the CSS animation
  }
}

main().catch((err) => {
  console.error(err);
});
