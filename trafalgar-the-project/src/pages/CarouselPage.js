import React from "react";
import CarouselCont from "../components/Carousel";


const CarouselPage = ({ projectData }) => {
  return (
    <div>
      <CarouselCont title={projectData.testimonialsTitle} />
    </div>
  );
};

export default CarouselPage;
