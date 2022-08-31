import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Molding Section
import productsMolding1 from '../../assets/images/products-molding-1.avif';

function Molding() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="products-container-all" data-aos="fade-right">
      <div className="products-container grid lg:grid-cols-2 gap-10">
        <div className="products-image-container">
          <img src={productsMolding1} alt="Products Molding"></img>
        </div>

        <div className="products-details-container">
          <h1>MOLDING</h1>
          <h5 className="product-header-txt">
            "Replacing a piece of molding? Decided to decorate your entire home?
            We are your local source, friendly to the basics for the
            contractors, and the MDF's for the decorators."
          </h5>
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
      </div>
    </section>
  );
}

export default Molding;
