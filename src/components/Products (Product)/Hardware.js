import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productsHardware1 from '../../assets/images/products-hardware-1.jpg';

function Hardware() {
  return (
    <section>
      <div className="container products-carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsHardware1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsHardware1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsHardware1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="carousel-details-container">
        <h1>HARDWARE</h1>
        <h4>
          "Missing some necessary handles for your doors? How about some locks
          for your security? If so, be sure to check out some of our best
          recommended hardware."
        </h4>
        <p>
          Entry Sets · Interior Locks · Interior Knobs and Hinges · Decorative
          Plate Locks · Pocket Door Mortise Locks · Flush/Door Pulls · Barn Door
          Accessories · Deadbolts, Pulls and Hinges · Lever Set · Electronic
          Keypad
        </p>
        <p>
          Wood · Vinyl · Smooth · Fiberglass · Brass · Steel · Bronze · and much
          more
        </p>
      </div>
    </section>
  );
}

export default Hardware;
