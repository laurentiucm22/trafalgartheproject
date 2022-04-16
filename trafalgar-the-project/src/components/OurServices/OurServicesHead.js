import React from "react";
import Container from "react-bootstrap/Container";
import classes from "./OurServices.module.css";

const OurServicesHead = ({ title, desc }) => {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h2 className={`${classes["our-services__title"]} ${"text-dark "}`}>
          {title}
        </h2>
        <span className={classes["our-span"]}></span>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center ">
        <p
          className={`${
            classes["our-services__paragraph"]
          } ${"text-center text-wrap"}`}
        >
          {desc}
        </p>
      </Container>
    </div>
  );
};

export default OurServicesHead;
