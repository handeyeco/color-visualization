const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

import { COLOR } from './color';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var control = new OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();

COLOR.colors.forEach(elem => {
  geometry.vertices.push(
    new THREE.Vector3(elem.red / 150, elem.green / 150, elem.blue / 150)
  );

  geometry.colors.push(
    new THREE.Color(elem.rgb)
  );
});

var material = new THREE.PointsMaterial({
  size: 0.04,
  vertexColors: THREE.VertexColors
});

var rgbBox = new THREE.Points(geometry, material);
rgbBox.position.x = -(255 / 150 / 2);
rgbBox.position.y = -(255 / 150 / 2);
rgbBox.position.z = -(255 / 150 / 2);
scene.add(rgbBox);

camera.position.z = 2.5;

function animate() {
	requestAnimationFrame( animate );
  // rgbBox.rotation.x += 0.005;
  // rgbBox.rotation.y += 0.005;
	renderer.render( scene, camera );
}
animate();
