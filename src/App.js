import React, { Component, Suspense } from "react";
import "./App.css";

import Scene from "./components/Scene.js";
import { Canvas } from "react-three-fiber";
import Casa from "./components/casa/Casa";
import { OrbitControls, Sky } from "@react-three/drei";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import logo from './images/2devs.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#bcf',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));
function App() {
  return (
    <Grid container spacing={3} style={{background:"#ccb"}}>
      <Grid item xs={12} sm={3} xl={3}>
        <Item1>
          <h2>Desarrollado por: <img src={logo} width="80" height="50"></img></h2>
        <h1>Vivienda unifamiliar</h1>
        <p><strong>Área de construcción: </strong>230 m<sup>2</sup></p>
        <p><strong>Ubicación:</strong> Parroquia Belisario Quevedo - Latacunga</p>
        <p><strong>Diseño:</strong> Arq. Edison Chicaisa </p>
        <p><strong>Contacto:</strong> 0987633991 </p>
        <p><strong>Mouse controls</strong></p>
        <p><strong>Boton izquierdo:</strong> Rotar </p>
        <p><strong>Scroll:</strong> Zoom </p>
        <p><strong>Boton derecho:</strong> Centrar </p>
        </Item1>
      </Grid>
      <Grid item xs={12} sm={9} xl={9}>
        <Item>
          <div style={{ width: "100%", height: "100vh" }}>
            <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[35, 35, 0]} intensity={0.7} />
              <pointLight position={[-35, 35, 0]} intensity={0.8} />

              <Sky
                distance={45000}
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

                <Casa />
              </Suspense>
            </Canvas>
          </div>
        </Item>
      </Grid>
    
    </Grid>
  );
}

export default App;
