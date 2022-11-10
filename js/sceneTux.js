const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const quad = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array([
	-1.0, -1.0, 1.0,
	1.0, -1.0, 1.0,
	1.0, 1.0, 1.0,

	1.0,  1.0,  1.0,
	-1.0,  1.0,  1.0,
	-1.0, -1.0,  1.0,
	
	-1.0, -1.0, -1.0,
	1.0, -1.0, -1.0,
	1.0, -1.0, 1.0,

	1.0,  -1.0,  1.0,
	-1.0,  -1.0,  1.0,
	-1.0, -1.0,  -1.0,
	
	-1.0, 1.0, -1.0,
	1.0, 1.0, -1.0,
	1.0, 1.0, 1.0,

	1.0,  1.0,  1.0,
	-1.0,  1.0,  1.0,
	-1.0, 1.0,  -1.0,

	-1.0, -1.0, -1.0,
	1.0, -1.0, -1.0,
	1.0, 1.0, -1.0,

	1.0,  1.0,  -1.0,
	-1.0,  1.0,  -1.0,
	-1.0, -1.0,  -1.0,

	1.0, -1.0, -1.0,
	1.0, -1.0, 1.0,
	1.0, 1.0, 1.0,

	1.0,  1.0,  1.0,
	1.0,  1.0, -1.0,
	1.0, -1.0,  -1.0,

	-1.0, -1.0, -1.0,
	-1.0, -1.0, 1.0,
	-1.0, 1.0, 1.0,

	-1.0,  1.0,  1.0,
	-1.0,  1.0, -1.0,
	-1.0, -1.0,  -1.0,
]);

const uvs = new Float32Array([

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

	1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,
]);

const texture = new THREE.TextureLoader().load('textures/tux.png');


// itemSize = 3 because there are 3 values (components) per vertex
quad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

//const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(quad, mat);
scene.add(mesh)


camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.02;
	mesh.rotation.y -= 0.03;

	renderer.render(scene, camera);
};

animate();
