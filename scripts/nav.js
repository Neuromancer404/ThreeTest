import * as THREE from 'https://threejs.org/build/three.module.js';

export class NavMenu {
    constructor(options){
        this.height = options.height,
        this.width = options.width
    }
    
    MainBox(){
        let geometry = new THREE.BoxBufferGeometry(this.width, this.height*0.1, 0)
        let material = new THREE.MeshStandardMaterial()
        let nav = new THREE.Mesh(geometry, material)
    
        return(nav)
    }
    BoxPosition(){
        return(this.height/2-this.height*0.1-3);
    }
    LoadBtnPosition(){ //подправить
        let x = this.width/2-this.width*0.1-3
        let y = this.height/2-this.height*0.1-3
        return([x, y])
    }
    LoadButton(){
        let geometry = new THREE.BoxBufferGeometry(100, 50, 10) //захардкожено
        let material = new THREE.MeshPhongMaterial({color: 'black', emissive: 'purple'})
        let loadButton = new THREE.Mesh(geometry, material)

        return(loadButton)
    }
}