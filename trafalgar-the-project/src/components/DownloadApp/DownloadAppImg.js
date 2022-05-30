import React from "react";
import Image from "react-bootstrap/Image";
import downloadAppImg from "../../images/downloadAppImg.svg";
import useCustomView from "../CustomHook/useCustomView";
import classes from "./DownloadApp.module.css";

const DownloadAppImg = () => {
  const [containerRef, inView] = useCustomView({
    rootMargin: "500px 0px 0px 0px",
    threshold: 0.7,
  });

  return (
    <div
      className={`${"image-responsive d-flex justify-content-center align-content-center p-0 m-0"}`}
      ref={containerRef}
    >
      <Image
        fluid
        src={downloadAppImg}
        className={!inView ? classes["fade-right"] : classes["appear-right"]}
      />
    </div>
  );
};

export default DownloadAppImg;
