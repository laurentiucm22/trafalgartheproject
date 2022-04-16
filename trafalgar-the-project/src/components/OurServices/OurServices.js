import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesCards from "./OurServicesCards";
// import classes from "./OurServices.module.css";
import OurServicesHead from "./OurServicesHead";

const OurServices = ({ title, desc }) => {
  return (
    <Container fluid>
      <OurServicesHead title={title} desc={desc} />
      <OurServicesCards />
    </Container>
  );
};

export default OurServices;
