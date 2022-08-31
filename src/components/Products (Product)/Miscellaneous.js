import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Miscellaneous Section
import productsMiscellaneous1 from '../../assets/images/products-miscellaneous-1.png';

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
          <h5 className="product-header-txt">
            "All the little (and most important) things which are often
            overlooked are made readily available with us! Didn't think you
            needed a new mail slot, did you?"
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
