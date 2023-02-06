import React from 'react'
import { useRef,useEffect } from 'react'
import * as THREE from 'three'
const Scene = () => {

const mountRef=useRef(null);
useEffect(()=>{

const currentMount=mountRef.current;
    //creamos la scena
    const scene=new THREE.Scene();
    //creamos la camara
    const camera=new THREE.PerspectiveCamera(
        25,
        currentMount.clientWidth/currentMount.clientHeight,
    0.1,
    1000
    )
    camera.position.z=3;
scene.add(camera);
const renderer =new THREE.WebGLRenderer()
renderer.setSize(currentMount.clientWidth,currentMount.clientHeight);
currentMount.appendChild(renderer.domElement);

//creamos el objeto 3d
const cube=new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial()
);
//cube.position(2,2,1);
scene.add(cube);
renderer.render(scene,camera);

//clean up scene
return()=>{
    currentMount.removeChild(renderer.domElement);
}

},[])
  return (
    <div className='Contenedor3D'  
    ref={mountRef}
    style={{width:'100%', height:'100vh'}}
    >
      
    </div>
  )
}

export default Scene