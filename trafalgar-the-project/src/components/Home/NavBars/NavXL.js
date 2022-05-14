import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { navData } from "../navbarData";
import logoImage from "../../../images/logo.svg";
import MobileNav from "./MobileNav";
import classes from "./NavXL.module.css";

const NavXL = () => {
  return (
    <div className="w-100">
      <Navbar expand="xl" className={`${classes["nav-bar"]}`}>
        <Container fluid>
          <div className="w-100">
            <Row>
              <Col xxl={7} xl={7} lg={6} md={6} sm={6} xs={6}>
                <Image src={logoImage} fluid />
              </Col>
              <Col
                xxl={5}
                xl={5}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="d-flex align-items-center"
              >
                <Nav
                  className={`${
                    classes["nav-lg"]
                  } ${"d-none d-xl-flex d-xxl-flex flex-row justify-content-around flex-grow-1"}`}
                >
                  {navData.map(({ page, id, links }) => {
                    return (
                      <a href={links} key={id} className={`${classes.anchor}`}>
                        {page}
                      </a>
                    );
                  })}
                </Nav>
                <MobileNav />
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavXL;
