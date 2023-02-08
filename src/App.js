import React, { Component, Suspense } from "react";
import "./App.css";

import Scene from "./components/Scene.js";
import { Canvas } from "react-three-fiber";
import Casa from "./components/casa/Casa";

import { OrbitControls, Sky, Text } from "@react-three/drei";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import logo from "./images/2devs.png";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./components/pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./components/pages/Services";
import { Events, EventsOne, EventsTwo } from "./components/pages/Events";
import Contact from "./components/pages/ContactUs";
import Support from "./components/pages/Support";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#bcf",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.primary,
}));
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/aim" element={<OurAim />} />
        <Route path="/about-us/vision" element={<OurVision />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/services1" element={<ServicesOne />} />
        <Route path="/services/services2" element={<ServicesTwo />} />
        <Route path="/services/services3" element={<ServicesThree />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/events1" element={<EventsOne />} />
        <Route path="/events/events2" element={<EventsTwo />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
  /* return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1>
        testing
        <br />
        <span>w/JASON</span>
      </h1>
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
  );*/
}

export default App;
