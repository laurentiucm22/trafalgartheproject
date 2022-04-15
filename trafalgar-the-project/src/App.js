import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styled-components";
import HomePage from "./pages/HomePage";
import { projectData } from "./components/projectData";

function App() {
  return (
    <div className="w-100 position-relative">
      <HomePage projectData={projectData} />
    </div>
  );
}

export default App;
