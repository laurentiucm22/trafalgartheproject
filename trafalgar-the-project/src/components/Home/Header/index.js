import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
import Button from "react-bootstrap/Button";
import headerImg from "../../../images/headerImg.svg";
import headerElem from "../../../images/header-element.svg";

const Header = ({ title, desc, btn }) => {
  return (
    <Container>
      <Container fluid>
        <Image
          src={headerElem}
          className={`${classes.elementPosition} ${"image-responsive"}`}
        />
      </Container>
      <Row className={`${classes["header-row"]} ${"pt-5"}`}>
        <Col lg={6} xl={5} md={12} className="pt-5 mt-5">
          <h2 className={`${classes["header-title"]} ${"text-wrap"}`}>
            {title}
          </h2>
          <p className={`${classes["header-p"]} ${"py-3 text-wrap"}`}>{desc}</p>
          <Button
            className={`${classes["header-button"]} ${"text-white mt-2"}`}
            type="button"
          >
            {btn}
          </Button>
        </Col>
        <Col
          lg={6}
          xl={7}
          md={12}
          className="my-4 d-flex justify-content-center"
        >
          <Image
            fluid
            src={headerImg}
            className={`${"animate__animated animate__backInRight animate__slow"} ${
              classes["header-img"]
            }`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
