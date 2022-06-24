import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Hardware Section
import productsHardware1 from '../../assets/images/products-hardware-1.jpg';

function Hardware() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="products-container-all" data-aos="fade-left">
      <div className="products-container grid lg:grid-cols-2 gap-10">
        <div className="products-details-container">
          <h1>HARDWARE</h1>
          <h5>
            "Missing some necessary handles for your doors? How about some locks
            for your security? If so, be sure to check out some of our best
            recommended hardware."
          </h5>
          <p>
            Entry Sets · Interior Locks · Interior Knobs and Hinges · Decorative
            Plate Locks · Pocket Door Mortise Locks · Flush/Door Pulls · Barn
            Door Accessories · Deadbolts, Pulls and Hinges · Lever Set ·
            Electronic Keypad
          </p>
          <p>
            Wood · Vinyl · Smooth · Fiberglass · Brass · Steel · Bronze · and
            much more
          </p>
        </div>

        <div className="products-image-container">
          <img src={productsHardware1} alt="Products Hardware"></img>
        </div>
      </div>
    </section>
  );
}

export default Hardware;
