import*as THREE from 'three' 
 

//canvas
const canvas=document.querySelector('canvas.webgl');
//scene
const scene=new THREE.Scene();
//object
const geometry=new THREE.BoxGeometry(1,1,1);
const material= new THREE.MeshBasicMaterial({color:0xff0000});
const mesh= new THREE.Mesh(geometry,material);
//Pas d'affichage pour l'instant il faut ajouter à la scène
scene.add(mesh);
// Sizes  (optimisation)
const sizes={
    width:800,
    height:600,
};
// camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z = 3;
// on peut ajouter camera à la scene mais cest facultatif
scene.add(camera);
//renderer
const renderer=new THREE.WebGL1Renderer({canvas:canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);