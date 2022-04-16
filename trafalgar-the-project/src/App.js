import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styled-components";
import HomePage from "./pages/HomePage";
import { projectData } from "./components/projectData";
import OurServicesPage from "./pages/OurServicesPage";
import "animate.css";

function App() {
  return (
    <div className="w-100 position-relative">
      <HomePage projectData={projectData} />
      <OurServicesPage projectData={projectData} />
    </div>
  );
}

export default App;
