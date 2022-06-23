import React, { useEffect } from 'react';
import Aos from 'aos';
import './vendors.css';
import vendorsPic from '../../assets/images/vendors.png';

function Vendors() {
  return (
    <section>
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