import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';

function Hardware() {
  return (
    <section>
      <div className="container carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon3}
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
