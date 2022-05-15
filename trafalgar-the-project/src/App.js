import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styled-components";
import HomePage from "./pages/HomePage";
import { projectData } from "./components/projectData";
import OurServicesPage from "./pages/OurServicesPage";
import LeadingPage from "./pages/LeadingPage";
import "animate.css";
import DownloadAppPage from "./pages/DownloadAppPage";
import CarouselPage from "./pages/CarouselPage";

function App() {
  return (
    <div className="position-relative">
      <HomePage projectData={projectData} />
      <OurServicesPage projectData={projectData} />
      <LeadingPage projectData={projectData} />
      <DownloadAppPage projectData={projectData} />
      <CarouselPage projectData={projectData} />
    </div>
  );
}

export default App;
