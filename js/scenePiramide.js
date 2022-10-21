const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const quad = new THREE.BufferGeometry();
const quad2 = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array([
	
    /*Triangulo CBA*/
    -1.0, 0.0, -1.0,
	-1.0, 0.0, 1.0,
	1.0, 0.0, 1.0,

    /*Triangulo CAD*/
	-1.0, 0.0, -1.0,
	1.0, 0.0, 1.0,
	1.0, 0.0, -1.0,

    /*Triangulo EAD*/
    0.0, 1.0, 0.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, -1.0,

    /*Triangulo EBA*/
    0.0, 1.0, 0.0,
    -1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    
    /*Triangulo ECB*/
    0.0, 1.0, 0.0,
    -1.0, 0.0, -1.0,
    -1.0, 0.0, 1.0,

    /*Triangulo EDC*/
    0.0, 1.0, 0.0,
    1.0, 0.0, -1.0,
    -1.0, 0.0, -1.0,
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

const texture = new THREE.TextureLoader().load('textures/pedras.jpg');


// itemSize = 3 because there are 3 values (components) per vertex
quad.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

quad2.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
quad2.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

const aramado = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(quad, mat);
const mesh2 = new THREE.Mesh(quad2,aramado);
scene.add(mesh);
scene.add(mesh2);


camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.02;
	mesh.rotation.y += 0.02;

	mesh2.rotation.x += 0.02;
	mesh2.rotation.y += 0.02;

	mesh2.position.x = -2;
	mesh.position.x = 2;

	renderer.render(scene, camera);
};

animate();
