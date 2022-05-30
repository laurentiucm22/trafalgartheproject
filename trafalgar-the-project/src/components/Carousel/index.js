import React from "react";
import classes from "./Carousel.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselCustomer from "./CarouselCustomer";

const CarouselCont = () => {
  return (
    <Container fluid className={`${classes["carousel-container"]}`}>
      <Container className={classes.carousel}>
        <Row fluid={`${"true"}`}>
          <Col fluid={`${"true"}`}>
            <CarouselCustomer />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CarouselCont;
