import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Miscellaneous Section
import productsMiscellaneous1 from '../../assets/images/products-miscellaneous-1.jpg';

function Miscellaneous() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="products-container-all" data-aos="fade-right">
      <div className="products-container grid lg:grid-cols-2 gap-10">
        <div className="products-image-container">
          <img src={productsMiscellaneous1} alt="Products Miscellaneous"></img>
        </div>

        <div className="products-details-container">
          <h1>MISCELLANEOUS</h1>
          <h5>
            "Replacing a piece of molding? Decided to decorate your entire home?
            We are your local source, friendly to the basics for the
            contractors, and the MDF's for the decorators."
          </h5>
          <p>
            Stops & Catches · Bumpers · Hinges (Knuckle, Spring, Cabinet) ·
            Pivot & Cabinet Hinges · Concealed Screw & Surface Bolts · Doorbell
            Buttons & Accessories · House Numbers · Mail Slots · Window Utility
            Pulls · Surface Bolts · Push & Switch Plates
          </p>
          <p>Wood · Bronze · Steel · Smooth · Hammered · and much more</p>
        </div>
      </div>
    </section>
  );
}

export default Miscellaneous;
