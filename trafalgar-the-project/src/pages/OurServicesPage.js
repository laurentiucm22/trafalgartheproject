import React from "react";
import Container from "react-bootstrap/Container";
import OurServices from "../components/OurServices/OurServices";

const OurServicesPage = ({ projectData }) => {
  return (
    <Container>
      <OurServices
        title={projectData.ourServicesTitle}
        desc={projectData.ourServicesDesc}
        btnDesc={projectData.ourServicesBtnDesc}
      />
    </Container>
  );
};

export default OurServicesPage;
