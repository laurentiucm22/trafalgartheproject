import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { ourServicesData } from "./ourServicesData";

const OurServicesCards = () => {
  return (
    <div>
      <Container fluid>
        {ourServicesData.map(({ id, imgSrc, title, description }) => {
          return (
            <div key={id}>
              <Image src={imgSrc} />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default OurServicesCards;
