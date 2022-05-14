import React from "react";
import Leading from "../components/Leading";

const LeadingPage = ({ projectData }) => {
  return (
    <div className={`${"position-relative"}`}>
      <Leading
        title={projectData.leadingTitle}
        desc={projectData.leadingDesc}
        btnDesc={projectData.leadingBtnDesc}
      />
    </div>
  );
};

export default LeadingPage;
