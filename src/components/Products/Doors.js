import React from 'react';
import { Carousel } from 'react-bootstrap';

function Doors() {
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
      <h1>DOORS</h1>
      <h5>
        "Whether you need a new screen door, grand entry door, or french doors
        that opens onto your patio, All American Doors & Windows has everything
        you’re looking for in many different materials."
      </h5>
      <p>
        Entry Doors · Interior Doors · Slider Doors · French Doors · Barn Doors
        · Door Frames · Acoustic Control Doors · Shower Enclosures · Wardrobe
        Doors · Mirrored Doors · Clear View Screen Doors · Pantry Doors ·
        Accordion Doors
      </p>
      <p>
        Wood · Vinyl · Smooth · Aluminum · Steel · Fiberglass · MDF · Tempered
        Glass · Etched Glass · and much more
      </p>
    </div>
  </section>;
}
