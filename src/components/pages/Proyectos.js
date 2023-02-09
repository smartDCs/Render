import React, { Component, Suspense } from "react";
import Casa from "../casa/Casa";
import CasaDavid from "../casa/CasaDavid";
import { OrbitControls, Sky, Text } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
export const Proyectos = () => {
  return (
    <div className="home">
      <h3>Seleccione un proyecto para visualizarlo</h3>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div  style={{ width: "100%", height: "80vh", position:"relative"}}>
      
      
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
        </Suspense>
      </Canvas>
      
      <div className="textInfo">
        <a className="info">CASA NARANJO</a> <br />
        Área:{" "}
        <a className="info">
          230m<sup>2</sup>
        </a>{" "}
        <br />
        Diseño:<a className="info">Arq. Edison Chicaisa</a>
      </div>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div style={{ width: "100%", height: "80vh", position:"relative" }}>
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
        </Suspense>
      </Canvas>

      <div className="textInfo">
        <a className="info"><strong>CASA DAVID</strong></a> <br />
        <strong>Área:{" "}</strong>
        <a className="info">
          180m<sup>2</sup>
        </a>{" "}
        <br />
       <strong> Diseño: </strong><a className="info">Arq. Edison Chicaisa</a>
      </div>

    </div>
  );
};
