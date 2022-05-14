import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./DownloadAppContent.module.css";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const DownloadAppContent = ({ title, desc, btnDesc }) => {
  return (
    <div
      className={`${"d-flex h-100 flex-column justify-content-center align-items-start"}`}
    >
      <h2 className={`${"text-wrap py-4"} ${classes["download-app__title"]}`}>
        {title}
      </h2>
      <span className={classes["download-app__span"]}></span>
      <p className={`${"text-wrap"} ${classes["download-app__desc"]}`}>
        {desc}
      </p>
      <Button
        type="button"
        variant="outline-primary"
        className={`${"d-flex justify-content-between align-items-center"} ${
          classes["download-app__btn"]
        }`}
      >
        {btnDesc}
        <HiOutlineArrowNarrowDown className={`${"ms-2"}`} />
      </Button>
    </div>
  );
};

export default DownloadAppContent;
