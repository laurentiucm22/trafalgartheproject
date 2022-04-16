import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import headerElem from "../../../images/header-element.svg";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import headerImg from "../../../images/headerImg.svg";
import Container from "react-bootstrap/Container";

const Header = ({ title, desc, btn }) => {
  return (
    <Container>
      <Image fluid src={headerElem} className={classes.elementPosition} />
      <Row className={`${classes["header-row"]} ${"pt-5"}`}>
        <Col xl={6} md={12} className="pt-5 mt-5">
          <h2 className={`${classes["header-title"]} ${"text-wrap fluid"}`}>
            {title}
          </h2>
          <p className={`${classes["header-p"]} ${"py-3 text-wrap fluid"}`}>
            {desc}
          </p>
          <Button
            className={`${classes["header-button"]} ${"text-white mt-2"}`}
            type="button"
          >
            {btn}
          </Button>
        </Col>
        <Col xl={6} md={12} className="my-4 d-flex justify-content-center">
          <Image
            fluid
            src={headerImg}
            className="animate__animated animate__backInRight animate__slow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
