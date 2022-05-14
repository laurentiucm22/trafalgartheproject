import React from "react";
import leadingHealtImg from "../../images/leadingHealtImg.svg";
import Image from "react-bootstrap/Image";
import classes from "./Leading.module.css";
import useCustomView from "../CustomHook/useCustomView";

const LeadingImg = () => {
  const [containerRef, inView] = useCustomView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.7,
  });

  return (
    <div
      className={`${"h-100 w-100 d-flex justify-content-center align-content-center pt-5"}`}
      ref={containerRef}
    >
      <Image
        src={leadingHealtImg}
        className={!inView ? classes["fade-in"] : classes["appear"]}
      />
    </div>
  );
};

export default LeadingImg;
