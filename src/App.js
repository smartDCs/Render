import React, { Component, Suspense } from "react";
import "./App.css";

import Scene from "./components/Scene.js";
import {Canvas } from "react-three-fiber";
import Casa from "./components/casa/Casa";
import { OrbitControls,Sky,Stats} from "@react-three/drei";

function App() {
 
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} intensity={0.7} />
        <pointLight position={[-35, 35, 0]} intensity={0.8} />

      
        
        <Sky
        distance={45000}
        sunPosition={[0,1,0]}
        inclination={0}
        azimuth={0.25}
        />
       
        <Suspense fallback={null}>
          <OrbitControls  
          enableDamping={true}
          enablePan={true}
          dampingFactor={0.4}
          />
             
          <Casa/>
  
       

        </Suspense>
      
      </Canvas>
    </div>
  );
}

export default App;
