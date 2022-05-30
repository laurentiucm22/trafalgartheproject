import React from 'react';
import classes from './CarouselCustomer.module.css';
import { carouselData } from './carouselData';
import Image from 'react-bootstrap/Image';

const CarouselCustomer = () => {
  return (
    <div>
      {carouselData.map(
        ({ title, customerImg, customerName, customerPos, customerComm }) => {
          return (
            <div className={`${classes['carousel-content']}`}>
              <div className={`${classes['carousel__title-container']}`}>
                <h2 className={classes['carousel__title']}>{title}</h2>
                <span className={classes['carousel__span']}></span>
              </div>
              <div className={`${'py-4'} ${classes.customer}`}>
                <div className={classes['customer-content']}>
                  <Image
                    fluid
                    src={customerImg}
                    style={{
                      width: '180px',
                      borderRadius: '50%',
                      border: '5px solid var(--clr-white)',
                    }}
                  />
                  <div className={classes['customer-desc']}>
                    <h3 className={classes['customer-name']}>{customerName}</h3>
                    <p className={classes['customer-pos']}>{customerPos}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p className={`${classes['customer-comm']} ${'text-wrap'}`}>
                    {customerComm}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CarouselCustomer;
