import React from "react";
import DownloadApp from "../components/DownloadApp";

const DownloadAppPage = ({ projectData }) => {
  return (
    <div>
      <DownloadApp
        title={projectData.downloadAppTitle}
        desc={projectData.downloadAppDesc}
        btnDesc={projectData.downloadAppBtnDesc}
      />
    </div>
  );
};

export default DownloadAppPage;
