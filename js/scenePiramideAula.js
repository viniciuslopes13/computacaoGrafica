const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const A = [-1.0, -1.0, 1.0];
const B = [-1.0, -1.0, -1.0];
const C = [1.0, -1.0, -1.0];
const D = [1.0, -1.0, 1.0];
const E = [0.0, 1.0, 0.0];

const quad = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array([
	
    /*Triangulo CBA*/
    ...C,
	...B,
	...A,

    /*Triangulo CAD*/
	...C,
	...A,
	...D,

    /*Triangulo EAD*/
    ...E,
    ...A,
    ...D,

    /*Triangulo EBA*/
    ...E,
    ...B,
    ...A,
    
    /*Triangulo ECB*/
    ...E,
    ...C,
    ...B,

    /*Triangulo EDC*/
    ...E,
    ...D,
    ...C,
]);

const uvs = new Float32Array([
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0, 

	0.0, 0.0,
	1.0, 1.0,
	0.0, 1.0,

	0.5, 0.5,
	1.0, 1.0,
	0.0, 1.0,

	0.5, 0.5,
	1.0, 0.0,
	1.0, 1.0,

	0.5, 0.5,
	0.0, 0.0,
	1.0, 0.0,

	0.5, 0.5,
	0.0, 1.0,
	0.0, 0.0

]);

const texture = new THREE.TextureLoader().load('textures/rgb_triangles.png');


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
	mesh.rotation.y += 0.02;

	renderer.render(scene, camera);
};

animate();
