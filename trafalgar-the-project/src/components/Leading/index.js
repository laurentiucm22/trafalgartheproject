import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Leading.module.css";
import LeadingImg from "./LeadingImg";
import LeadingContent from "./LeadingContent";

const Leading = ({ title, desc, btnDesc }) => {
  return (
    <Container className={`${classes["leading-container"]}`} id="find-a-doctor">
      <Row
        fluid={`${"true"}`}
        className={`${classes["leading-row"]} ${"p-0 m-0"}`}
      >
        <Col lg={6} xl={6} className={`${"h-100"}`}>
          <LeadingImg />
        </Col>
        <Col lg={6} xl={6} className={`${classes["leading-second__col"]}`}>
          <LeadingContent title={title} desc={desc} btnDesc={btnDesc} />
        </Col>
      </Row>
    </Container>
  );
};

export default Leading;
