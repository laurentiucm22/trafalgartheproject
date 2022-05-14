import React from "react";
import DownloadAppImg from "./DownloadAppImg";
import DownloadAppContent from "./DownloadAppContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./DownloadApp.module.css";

const DownloadApp = ({ title, desc, btnDesc }) => {
  return (
    <Container
      className={`${classes["download-app__container"]}`}
      id="download-app"
    >
      <Row
        fluid={`${"true"}`}
        className={`${classes["download-app__row"]} ${"p-0 m-0"}`}
      >
        <Col lg={6} xl={6} className={`${classes["download-app__first__col"]}`}>
          <DownloadAppContent title={title} desc={desc} btnDesc={btnDesc} />
        </Col>
        <Col
          lg={6}
          xl={6}
          className={`${classes["download-app__second__col"]}`}
        >
          <DownloadAppImg />
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadApp;
