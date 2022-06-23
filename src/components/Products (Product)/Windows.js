import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productsWindows1 from '../../assets/images/products-windows-1.jpg';

function Windows() {
  return (
    <section>
      <div className="container carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsWindows1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsWindows1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsWindows1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="carousel-details-container">
        <h1>WINDOWS</h1>
        <h4>
          "Whether it be energy efficient windows, a skylight for your newly
          remodeled kitchen, or a bay window to overlook your garden, we are
          certain to have it all, prepared just for you."
        </h4>
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
