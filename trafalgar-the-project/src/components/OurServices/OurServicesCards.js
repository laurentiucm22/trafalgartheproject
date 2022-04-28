import React from "react";
import Image from "react-bootstrap/Image";
import { ourServicesData } from "./ourServicesData";
import classes from "./OurServicesCards.module.css";

const OurServicesCards = () => {
  return (
    <div className={`${classes["card-container"]}`}>
      {ourServicesData.map(({ id, imgSrc, title, description }) => {
        return (
          <div key={id} className={`${classes.card} ${"p-md-4 p-xl-4"}`}>
            <Image fluid src={imgSrc} className={`${"py-2"}`} />

            <h2 className={classes["card-title"]}>{title}</h2>
            <p className={`${"text-wrap"} ${classes["card-desc"]}`}>
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OurServicesCards;
