import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';

function Molding() {
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
        <h1>MOLDING</h1>
        <h4>
          "Replacing a piece of molding? Decided to decorate your entire home?
          We are your local source, friendly to the basics for the contractors,
          and the MDF's for the decorators."
        </h4>
        <p>
          Shiplap · Chair Rail · Baseboards · Casing · Crown Molding · Waives
          Coating · Panel Cap · Stool · Body Guard · S4S · Flex Molding · Faux
          Beams
        </p>
        <p>
          Wood · Vinyl · Smooth · Hammered · Rough Sawn · Mesa · Hand Hewn ·
          Tahoe · and much more
        </p>
      </div>
    </section>
  );
}

export default Molding;
