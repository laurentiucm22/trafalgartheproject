import React from "react";
import leadingHealtImg from "../../images/leadingHealtImg.svg";
import Image from "react-bootstrap/Image";

const LeadingImg = () => {
  return (
    <div
      className={`${"w-100 d-flex justify-content-center align-content-center pt-5"}`}
    >
      <Image src={leadingHealtImg} className={`${"p-0 m-0"}`} />
    </div>
  );
};

export default LeadingImg;
