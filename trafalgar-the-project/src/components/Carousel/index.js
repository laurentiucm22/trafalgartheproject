import React from "react";
import classes from "./Carousel.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CarouselCont = ({ title }) => {
  return (
    <Container
      fluid
      id="testimonials"
      className={`${classes["carousel-container"]}`}
    >
      <Container className={classes.carousel}>
        <Row fluid={`${"true"}`}>
          <Col
            fluid={`${"true"}`}
            className={`${classes["carousel__title-container"]}`}
          >
            <h2 className={classes["carousel__title"]}>{title}</h2>
            <span className={classes["carousel__span"]}></span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CarouselCont;
