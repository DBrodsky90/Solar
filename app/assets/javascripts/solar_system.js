//THREE.ImageUtils.crossOrigin = "";
var container;
var scene, camera, renderer, controls;

init();
animate();

function init() {

	width = window.innerWidth;
  height = window.innerHeight;

  // SCENE
  scene = new THREE.Scene();

  // CAMERA
  camera = new THREE.PerspectiveCamera(45, width/height, 1, 100000000);
  camera.position.y = 0;
  camera.position.z = 1000000;

  // TRACKBALL CONTROLS
  controls = new THREE.TrackballControls(camera);

  // LIGHT
  // light = new THREE.AmbientLight(0xffffff);
  // scene.add(light);

  // STAR BACKGROUND
  stars_geom = new THREE.Geometry();
  stars_mat = new THREE.PointCloudMaterial({color:0xbbbbbb, opacity: 0.4, size: .1, sizeAttenuation: false});
  for (var i = 0 ; i < 15000; i++) {
  	var vertex = new THREE.Vector3();
  	vertex.x = Math.random()*2-1;
  	vertex.y = Math.random()*2-1;
  	vertex.z = Math.random()*2-1;
  	vertex.multiplyScalar(100000000);
  	stars_geom.vertices.push(vertex);
  }
  stars = new THREE.PointCloud(stars_geom, stars_mat);
  stars.scale.set(100, 100, 100);
  scene.add(stars);

  // SUN
  sun_geom = new THREE.SphereGeometry(5000, 30, 30);
  // sun_texture = new THREE.ImageUtils.loadTexture('images/sun_texture.jpg');
  // sun_texture.anistropy = 8;
  // sun_mat = new THREE.MeshPhongMaterial({map: sun_texture, emissive: 0xffffff});
  sun_mat = new THREE.MeshNormalMaterial();
  sun = new THREE.Mesh(sun_geom, sun_mat);
  scene.add(sun);

  // MERCURY
  mercury_geom = new THREE.SphereGeometry(350, 20, 20);
  mercury_mat = new THREE.MeshNormalMaterial();
  mercury = new THREE.Mesh(mercury_geom, mercury_mat);
  mercury_angle = 0;
  scene.add(mercury);

  // VENUS
  venus_geom = new THREE.SphereGeometry(350, 20, 20);
  venus_mat = new THREE.MeshNormalMaterial();
  venus = new THREE.Mesh(venus_geom, venus_mat);
  venus_angle = 0;
  scene.add(venus);

  // EARTH
  earth_geom = new THREE.SphereGeometry(350, 20, 20);
  earth_mat = new THREE.MeshNormalMaterial();
  earth = new THREE.Mesh(earth_geom, earth_mat);
  earth_angle = 0;
  scene.add(earth);

  // MARS
  mars_geom = new THREE.SphereGeometry(350, 20, 20);
  mars_mat = new THREE.MeshNormalMaterial();
  mars = new THREE.Mesh(mars_geom, mars_mat);
  mars_angle = 0;
  scene.add(mars);			

  // JUPITER
  jupiter_geom = new THREE.SphereGeometry(1500, 20, 20);
  jupiter_mat = new THREE.MeshNormalMaterial();
  jupiter = new THREE.Mesh(jupiter_geom, jupiter_mat);
  jupiter_angle = 0;
  scene.add(jupiter);

  // SATURN						    
  saturn_geom = new THREE.SphereGeometry(800, 20, 20);
  saturn_mat = new THREE.MeshNormalMaterial();
  saturn = new THREE.Mesh(saturn_geom, saturn_mat);
  saturn_angle = 0;
  scene.add(saturn);

  // URANUS
  uranus_geom = new THREE.SphereGeometry(800, 20, 20);
  uranus_mat = new THREE.MeshNormalMaterial();
  uranus = new THREE.Mesh(uranus_geom, uranus_mat);
  uranus_angle = 0;
  scene.add(uranus);

  // NEPTUNE
  neptune_geom = new THREE.SphereGeometry(800, 20, 20);
  neptune_mat = new THREE.MeshNormalMaterial();
  neptune = new THREE.Mesh(neptune_geom, neptune_mat);
  neptune_angle = 0;
  scene.add(neptune);

	// RENDERS
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(width,height);
	renderer.setClearColor(0x000000, 1);
	$('body').append(renderer.domElement);
	renderer.render(scene, camera);

}

function animate() {
requestAnimationFrame(animate);

// Mercury Revolution
mercury.position.x = Math.sin(mercury_angle*0.1)*15000;
mercury.position.z = Math.cos(mercury_angle*0.1)*12000;
mercury_angle += Math.PI/180*2;

// Venus Revolution
venus.position.x = Math.sin(venus_angle*0.1)*26000;
venus.position.z = Math.cos(venus_angle*0.1)*24000;
venus_angle += Math.PI/180*2;

// Earth Revolution
earth.position.x = Math.sin(earth_angle*0.1)*35000;
earth.position.z = Math.cos(earth_angle*0.1)*33500;
earth_angle += Math.PI/180*2;

// Mars Revolution
mars.position.x = Math.sin(mars_angle*0.1)*45000;
mars.position.z = Math.cos(mars_angle*0.1)*39000;
mars_angle += Math.PI/180*2;		 

// Jupiter Revolution
jupiter.position.x = Math.sin(jupiter_angle*0.1)*150000;
jupiter.position.z = Math.cos(jupiter_angle*0.1)*130000;
jupiter_angle += Math.PI/180*2;		 

// Saturn Revolution
saturn.position.x = Math.sin(saturn_angle*0.1)*230000;
saturn.position.z = Math.cos(saturn_angle*0.1)*200000;
saturn_angle += Math.PI/180*2;	

// Uranus Revolution
uranus.position.x = Math.sin(uranus_angle*0.1)*300000;
uranus.position.z = Math.cos(uranus_angle*0.1)*280000;
uranus_angle += Math.PI/180*2;	

// Neptune Revoltion	 		  		   
neptune.position.x = Math.sin(neptune_angle*0.1)*380000;
neptune.position.z = Math.cos(neptune_angle*0.1)*350000;
neptune_angle += Math.PI/180*2;	

render();
}

function render() {
controls.update();
renderer.render(scene, camera);
}	