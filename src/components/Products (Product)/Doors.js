import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

// Images for carousel
import productsDoors1 from '../../assets/images/products-doors-1.jpg';
import productsDoors2 from '../../assets/images/products-windows-1.jpg';
import productsDoors3 from '../../assets/images/products-molding-1.jpg';

function Doors() {
  return (
    <section>
      <div className="container products-carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsDoors1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsDoors2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productsDoors3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="carousel-details-container">
        <h1>DOORS</h1>
        <h4>
          "Whether you need a new screen door, grand entry door, or french doors
          that opens onto your patio, All American Doors & Windows has
          everything you’re looking for in many different materials."
        </h4>
        <p>
          Entry Doors · Interior Doors · Slider Doors · French Doors · Barn
          Doors · Door Frames · Acoustic Control Doors · Shower Enclosures ·
          Wardrobe Doors · Mirrored Doors · Clear View Screen Doors · Pantry
          Doors · Accordion Doors
        </p>
        <p>
          Wood · Vinyl · Smooth · Aluminum · Steel · Fiberglass · MDF · Tempered
          Glass · Etched Glass · and much more
        </p>
      </div>
    </section>
  );
}

export default Doors;
