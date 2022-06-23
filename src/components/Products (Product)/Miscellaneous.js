import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productsMiscellaneous1 from '../../assets/images/products-miscellaneous-1.jpg';

function Miscellaneous() {
  return (
    <section>
      <div className="container products-carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsMiscellaneous1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsMiscellaneous1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsMiscellaneous1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="carousel-details-container">
        <h1>MISCELLANEOUS</h1>
        <h4>
          "Replacing a piece of molding? Decided to decorate your entire home?
          We are your local source, friendly to the basics for the contractors,
          and the MDF's for the decorators."
        </h4>
        <p>
          Stops & Catches · Bumpers · Hinges (Knuckle, Spring, Cabinet) · Pivot
          & Cabinet Hinges · Concealed Screw & Surface Bolts · Doorbell Buttons
          & Accessories · House Numbers · Mail Slots · Window Utility Pulls ·
          Surface Bolts · Push & Switch Plates
        </p>
        <p>Wood · Bronze · Steel · Smooth · Hammered · and much more</p>
      </div>
    </section>
  );
}

export default Miscellaneous;
