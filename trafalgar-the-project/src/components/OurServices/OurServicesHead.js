import React from "react";
import Container from "react-bootstrap/Container";
import classes from "./OurServices.module.css";
import FillOne from "../../images/ourServices/fill1.svg";
import FillTwo from "../../images/ourServices/fill2.svg";
import Image from "react-bootstrap/Image";

const OurServicesHead = ({ title, desc }) => {
  return (
    <div>
      <Image
        fluid
        src={FillOne}
        className={`${classes["our-services__fillone"]}`}
      />
      <Image
        fluid
        src={FillTwo}
        className={`${classes["our-services__filltwo"]}`}
      />
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h2 className={`${classes["our-services__title"]} ${"text-dark pb-3"}`}>
          {title}
        </h2>
        <span className={classes["our-span"]}></span>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center ">
        <p
          className={`${
            classes["our-services__paragraph"]
          } ${"text-center text-wrap py-4"}`}
        >
          {desc}
        </p>
      </Container>
    </div>
  );
};

export default OurServicesHead;
