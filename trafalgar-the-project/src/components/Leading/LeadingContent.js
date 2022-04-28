import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./LeadingContent.module.css";

const LeadingContent = ({ title, desc, btnDesc }) => {
  return (
    <div
      className={`${"d-flex h-100 flex-column justify-content-center align-items-start"}`}
    >
      <h2 className={`${"text-wrap py-4"} ${classes["leading-title"]}`}>
        {title}
      </h2>
      <span className={classes["leading-span"]}></span>
      <p className={`${"text-wrap"} ${classes["leading-desc"]}`}>{desc}</p>
      <Button
        type="button"
        variant="outline-primary"
        className={classes["leading-btn"]}
      >
        {btnDesc}
      </Button>
    </div>
  );
};

export default LeadingContent;
