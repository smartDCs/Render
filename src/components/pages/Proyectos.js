import React, { Component, Suspense } from "react";
import Casa from "../casa/Casa";
import CasaDavid from "../casa/CasaDavid";
import { OrbitControls, Sky, Cloud } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import logo from "../../images/2devs.png";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Grid from "@mui/material/Grid";
export const Proyectos = () => {
  return (
    <div className="home">
      <h3>Seleccione un proyecto para visualizarlo</h3>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "block",
      }}
    >
      <Canvas camera={{ zoom: 1.2, position: [20, 10, 20] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, -100]} intensity={2} />
        <pointLight position={[35, 35, -100]} intensity={2} />
        <Sky
          sunPosition={[0, 0, -10]}
          inclination={0.6}
          azimuth={0.1}
          turbidity={10}
          rayleigh={0.5}
          distance={1000}
        />
      
        <Suspense fallback={null}>
          <OrbitControls
            enableDamping={true}
            enablePan={true}
            dampingFactor={0.4}
          />
          <Cloud position={[-4, 30, -25]} speed={0.2} opacity={1} />
          <Cloud position={[4, 30, -15]} speed={0.2} opacity={0.5} />
          <Cloud position={[-4, 30, -10]} speed={0.2} opacity={1} />
          <Cloud position={[4, 30, -5]} speed={0.2} opacity={0.5} />
          <Cloud position={[4, 30, 0]} speed={0.2} opacity={0.75} />
          <Cloud position={[-50, 30, -25]} speed={0.2} opacity={1} />
          <Cloud position={[50, 30, -15]} speed={0.2} opacity={0.5} />
          <Cloud position={[-50, 30, -10]} speed={0.2} opacity={1} />
          <Cloud position={[50, 30, -5]} speed={0.2} opacity={0.5} />
          <Cloud position={[50, 30, 0]} speed={0.2} opacity={0.75} />
          <Casa rotation={[0, Math.PI * 1.25, 0]} />
        </Suspense>
      </Canvas>

      <div className="textInfo">
        {/*grid para la barra de informacion*/}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <HomeWorkIcon />
            <a className="info"> CASA NARANJO</a>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <SquareFootIcon />
            <a className="info">
              <strong>Área: </strong>
            </a>

            <a className="info">
              230m<sup>2</sup>
            </a>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <ArchitectureIcon />
            <a>
              <strong>Diseño:</strong> Arq. Edison Chicaisa
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
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
        {/*grid para la barra de informacion*/}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <HomeWorkIcon />
            <a className="info"> CASA DAVID</a>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <SquareFootIcon />
            <a className="info">
              <strong>Área: </strong>
            </a>

            <a className="info">
              180m<sup>2</sup>
            </a>
          </Grid>
          <Grid item xs={12} sm={3} lg={3} xl={3}>
            <ArchitectureIcon />
            <a>
              <strong>Diseño:</strong> Arq. Edison Chicaisa
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
