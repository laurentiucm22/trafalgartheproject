import React from "react";
import Image from "react-bootstrap/Image";
import downloadAppImg from "../../images/downloadAppImg.svg";

const DownloadAppImg = () => {
  return (
    <div
      className={`${"image-responsive d-flex justify-content-center align-content-center p-0 m-0"}`}
    >
      <Image fluid src={downloadAppImg} className={`${"p-0 m-0"}`} />
    </div>
  );
};

export default DownloadAppImg;
