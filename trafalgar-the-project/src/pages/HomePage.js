import React from "react";
import NavXL from "../components/Home/NavBars/NavXL";
import Container from "react-bootstrap/Container";
import Header from "../components/Home/Header";

const HomePage = ({ projectData }) => {
  return (
    <Container>
      <NavXL />
      <Header
        title={projectData.headerTitle}
        desc={projectData.headerDesc}
        btn={projectData.headerBtnDesc}
      />
    </Container>
  );
};

export default HomePage;
