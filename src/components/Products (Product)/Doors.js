import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Doors Section
import productsDoors1 from '../../assets/images/products-doors-1.avif';

function Doors() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="products-container-all" data-aos="fade-right">
      <div className="products-container grid lg:grid-cols-2 gap-10">
        <div className="products-image-container">
          <img src={productsDoors1} alt="Products Door"></img>
        </div>

        <div className="products-details-container">
          <h1>DOORS</h1>
          <h5 className="product-header-txt">
            "Whether you need a new screen door, grand entry door, or french
            doors that opens onto your patio, All American Doors & Windows has
            everything you’re looking for in many different materials."
          </h5>
          <p>
            Entry Doors · Interior Doors · Slider Doors · French Doors · Barn
            Doors · Door Frames · Acoustic Control Doors · Shower Enclosures ·
            Wardrobe Doors · Mirrored Doors · Clear View Screen Doors · Pantry
            Doors · Accordion Doors
          </p>
          <p>
            Wood · Vinyl · Smooth · Aluminum · Steel · Fiberglass · MDF ·
            Tempered Glass · Etched Glass · and much more
          </p>
        </div>
      </div>
    </section>
  );
}

export default Doors;
