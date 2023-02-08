import React, { Component, Suspense } from "react";
import Casa from "../casa/Casa";
import CasaDavid from "../casa/CasaDavid";
import { OrbitControls, Sky, Text } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
export const AboutUs = () => {
  return (
    <div className="home">
      <h1>Seleccione un proyecto para visualizarlo</h1>
    </div>
  );
};
 
export const OurAim = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
       
          <Canvas shadowMap camera={{ zoom: 1.2, position: [20, 10, 20] }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[35, 35, 0]} intensity={0.7} />
            <pointLight position={[-35, 35, 0]} intensity={0.8} />
    
            <Sky
              distance={450000}
              sunPosition={[0, 1, 0]}
              inclination={0}
              azimuth={0.25}
            />
    
            <Suspense fallback={null}>
              <OrbitControls
                enableDamping={true}
                enablePan={true}
                dampingFactor={0.4}
              />
    
              <Casa rotation={[0, Math.PI * 1.25, 0]} />
              <Text
                scale={[2, 2, 2]}
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 11, 0]}
              >
                Casa Naranjo
              </Text>
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 9, 0]}
              >
                Diseño: Arq. Edison Chicaisa
              </Text>
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 7, 0]}
              >
                E-mail: edichicaisa@gmail.com
              </Text>
    
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 5, 0]}
              >
                Área de construcción: 230 m2
              </Text>
            </Suspense>
          </Canvas>
        </div>
      );
};
 
export const OurVision = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
       
          <Canvas shadowMap camera={{ zoom: 1.2, position: [20, 10, 20] }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[35, 35, 0]} intensity={0.7} />
            <pointLight position={[-35, 35, 0]} intensity={0.8} />
    
            <Sky
              distance={450000}
              sunPosition={[0, 1, 0]}
              inclination={0}
              azimuth={0.25}
            />
    
            <Suspense fallback={null}>
              <OrbitControls
                enableDamping={true}
                enablePan={true}
                dampingFactor={0.4}
              />
    
              <CasaDavid rotation={[0, Math.PI * 1.25, 0]} />
              <Text
                scale={[2, 2, 2]}
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 11, 0]}
              >
                Casa David
              </Text>
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 9, 0]}
              >
                Diseño: Arq. Edison Chicaisa
              </Text>
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 7, 0]}
              >
                E-mail: edichicaisa@gmail.com
              </Text>
    
              <Text
                color="black"
                anchorX="center"
                anchorY="bottom"
                position={[15, 5, 0]}
              >
                Área de construcción: 180 m2
              </Text>
            </Suspense>
          </Canvas>
        </div>
      );
};