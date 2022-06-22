import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';

function Windows() {
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

      <div>
        <h1>WINDOWS</h1>
        <h5>
          "Whether it be energy efficient windows, a skylight for your newly
          remodeled kitchen, or a bay window to overlook your garden, we are
          certain to have it all, prepared just for you."
        </h5>
        <p>
          Horizontal Slider · Single Hung · Double Hung · Awning · Casement ·
          Radius · Bay & Bow Windows · Gardenaire · Picture Windows · Skylight ·
          Acrylic Blocks · Full, Half & Quarter Circle Windows
        </p>
        <p>
          Wood · Vinyl · Wood · Cross Reed · Matelux · Rain · P516 · and much
          more
        </p>
      </div>
    </section>
  );
}

export default Windows;
