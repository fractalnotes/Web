import { CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer';
import {Mesh, Vector2, MeshPhongMaterial,SphereGeometry } from 'three'
let labelRenderer;

function createLabelRenderer(object) {
    const earthGeometry = new SphereGeometry( 100, 100, 100 );
				const earthMaterial = new MeshPhongMaterial( {
					
				} );
	const earth = new Mesh( earthGeometry, earthMaterial );
    const earthDiv = document.createElement( 'div' );
    earthDiv.className = 'label';
    earthDiv.textContent = 'Earth';
    earthDiv.style.marginTop = '-1em';
    const earthLabel = new CSS2DObject( earthDiv );
				earthLabel.position.set( 0, 1, 0 );
				earthLabel.layers.set( 0 );
                earth.add(earthLabel);
    labelRenderer = new CSS2DRenderer();
	labelRenderer.setSize( window.innerWidth, window.innerHeight );
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = '0px';
	document.body.appendChild( labelRenderer.domElement );
    return labelRenderer
}

export { createLabelRenderer };
