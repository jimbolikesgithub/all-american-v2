import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './vendors.css';
import vendorsPic from '../../assets/images/vendors.png';

function Vendors() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-down">
      <div className="vendors-container">
        <h3>
          We carry the most popular brands, so you can be sure you’ll have the
          highest quality at the best prices, including:
        </h3>
        <img src={vendorsPic} alt="vendor logos"></img>
      </div>
    </section>
  );
}

export default Vendors;
