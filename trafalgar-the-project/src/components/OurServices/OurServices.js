import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesCards from "./OurServicesCards";
import classes from "./OurServices.module.css";
import OurServicesHead from "./OurServicesHead";
import Button from "react-bootstrap/Button";

const OurServices = ({ title, desc, btnDesc }) => {
  return (
    <div
      className={`${
        classes["our-services__container"]
      } ${"position-relative py-3"}`}
    >
      <OurServicesHead title={title} desc={desc} />
      <OurServicesCards />
      <Container fluid className="text-center py-5">
        <Button
          type="button"
          variant="outline-primary"
          className={`${classes["our-services__btn"]}`}
        >
          {btnDesc}
        </Button>
      </Container>
    </div>
  );
};

export default OurServices;
