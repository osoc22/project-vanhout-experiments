import React, { Component,useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    console.log(innerWidth)
    return {"w":innerWidth, "h":innerHeight};
}

class ThreeComponent extends Component{
    componentDidMount(){
        const WindowSize = getWindowSize();
        const width = WindowSize["w"];
        const height = WindowSize["h"];
        // const width = windowSize.innerWidth; //this.mount.clientWidth
        // const height =  windowSize.innerHeight;//this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(75,width / height,0.1,1000)
        this.camera.position.z = 5
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        //ADD CUBE
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: '#FF99FF'})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)

        this.start()
    }

    // componentWillUnmount(){
    //     this.stop()
    //     this.mount.removeChild(this.renderer.domElement)
    // }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    
    animate = () => {
        console.log("test")
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render(){
        return(
            <div ref={(mount) => { this.mount = mount }}></div>)
    }
}

export default ThreeComponent

// "use strict";

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import * as THREE from 'three';

// class ThreeComponent extends React.Component {
    
// }

// const baseUrl = "https://circl.be/nieuw/tool/model.php?project=";
// let projectId = 1;
// let serverEndPoint = baseUrl;
// const customHeaders = new Headers()
// customHeaders.append('Accept', 'application/json');

// const getData = await fetch(serverEndPoint + projectId + "&json", { headers: customHeaders });
// const model = getData.json();  

// console.log(model)


// ///

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }


// animate(); 

  