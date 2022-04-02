import * as THREE from 'https://threejs.org/build/three.module.js';
import {NavMenu} from './scripts/nav.js'
window.onload = function(){
    if (true){     
        let width = window.innerWidth;
        let height = window.innerHeight
        
        Renderer(width, height);
    }
    else{
        let alarm = document.querySelector("#alarm");
        alarm.style.display = "flex";
    }
}


window.onresize = function(){
    let width = window.screen.availWidth;
    let height = window.screen.availHeight;
    
    Renderer(width, height);
}

function Renderer(width, height){
    const canvas = document.querySelector("#canvas");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    const renderer = new THREE.WebGLRenderer({canvas});

    const scene = new THREE.Scene;
    scene.background = new THREE.Color('black');

    let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
    camera.position.set(0, 0, 1000);
    let light = new THREE.AmbientLight(0xffffff);

    standNav(scene, width, height);
    scene.add(makeMesh(scene, camera));
    scene.add(light);
    renderer.render(scene, camera);
}

function makeMesh(){
    let geometry = new THREE.SphereGeometry(300, 12, 12)
    let material = new THREE.MeshBasicMaterial({color: 0x9197AE, wireframe: true})
    let mesh = new THREE.Mesh(geometry, material)

    return(mesh);
}

function standNav(scene, width, height){
    const navMenu = new NavMenu({height: height, width: width})
    let nav = navMenu.MainBox()
    nav.position.y = navMenu.BoxPosition()
    let load = navMenu.LoadButton()
    let pstn = navMenu.LoadBtnPosition() //вынести в метод
    load.position.x = pstn[0];
    load.position.y = pstn[1];
    scene.add(nav, load)
}