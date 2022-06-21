import React, { useEffect } from 'react';
import Aos from 'aos';
import { Carousel } from 'react-bootstrap';

import productIcon1 from '../assets/images/productIcon1.png';
import productIcon2 from '../assets/images/productIcon2.png';
import productIcon3 from '../assets/images/productIcon3.png';
import productIcon4 from '../assets/images/productIcon4.png';
import productIcon5 from '../assets/images/productIcon5.png';

function Products({ currentSection, handleSectionChange }) {
  return (
    <section className="products-container">
      <div className="product-icon-container">
        <ul>
          <li>
            <a href="#Doors" onClick={() => handleSectionChange('Doors')}>
              <img src={productIcon1} alt="product icon 1"></img>
            </a>
          </li>
          <li>
            <a href="#Windows" onClick={() => handleSectionChange('Windows')}>
              <img src={productIcon2} alt="product icon 1"></img>
            </a>
          </li>
          <li>
            <a href="#Molding" onClick={() => handleSectionChange('Molding')}>
              <img src={productIcon3} alt="product icon 1"></img>
            </a>
          </li>
          <li>
            <a href="#Hardware" onClick={() => handleSectionChange('Hardware')}>
              <img src={productIcon4} alt="product icon 1"></img>
            </a>
          </li>
          <li>
            <a
              href="#Miscellaneous"
              onClick={() => handleSectionChange('Miscellaneous')}
            >
              <img src={productIcon5} alt="product icon 1"></img>
            </a>
          </li>
        </ul>
        {/* <img src={productIcon1} alt="product icon 1"></img>

        <img src={productIcon2} alt="product icon 2"></img>

        <img src={productIcon3} alt="product icon 3"></img>

        <img src={productIcon4} alt="product icon 4"></img>

        <img src={productIcon5} alt="product icon 5"></img> */}
      </div>
    </section>
  );
}

export default Products;
