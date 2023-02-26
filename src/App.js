import React, { Component, Suspense } from "react";
import "./App.css";


import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import logo from "./images/2devs.png";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Proyectos, OurAim, OurVision } from "./components/pages/Proyectos";
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
        <Route path="/proyectos" element={<Proyectos />} />
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
  
}

export default App;
