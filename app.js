import * as THREE from 'https://threejs.org/build/three.module.js';



window.onload = function(){
    if (true){
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        Renderer(width, height);
    }
    else{
        let alarm = document.querySelector("#alarm");
        alarm.style.display = "flex";
    }
}

window.onresize = function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    Renderer(width, height);
}

function Renderer(width, height){
    const canvas = document.querySelector("#canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    const renderer = new THREE.WebGLRenderer({canvas});

    const scene = new THREE.Scene;
    scene.background = new THREE.Color('black');

    let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
    camera.position.set(0, 0, 1000);
    let light = new THREE.AmbientLight(0xffffff);

    scene.add(makeMesh(scene, camera));

    renderer.render(scene, camera);
}

function makeMesh(){
    let geometry = new THREE.SphereGeometry(300, 12, 12);
    let material = new THREE.MeshBasicMaterial(0x9197AE, false)
    let mesh = new THREE.Mesh(geometry, material);

    return(mesh);
}