import React from 'react';
import './products.css';

// Images for Product Icons
import productsIcon1 from '../../assets/images/products-icon-1.png';
import productsIcon2 from '../../assets/images/products-icon-2.png';
import productsIcon3 from '../../assets/images/products-icon-3.png';
import productsIcon4 from '../../assets/images/products-icon-4.png';
import productsIcon5 from '../../assets/images/products-icon-5.png';

function ProductsNav({ currentSection, handleSectionChange }) {
  return (
    <section>
      <div className="product-icon-container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item product-header">
            <a
              href="#Doors"
              aria-label="Link to go Doors"
              onClick={() => handleSectionChange('Doors')}
              className={
                currentSection === 'Doors' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productsIcon1} alt="product icon 1"></img>
              <h5>DOORS</h5>
            </a>
          </li>

          <li className="nav-item product-header">
            <a
              href="#Windows"
              aria-label="Link to go Windows"
              onClick={() => handleSectionChange('Windows')}
              className={
                currentSection === 'Windows' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productsIcon2} alt="product icon 1"></img>
              <h5>WINDOWS</h5>
            </a>
          </li>

          <li className="nav-item product-header">
            <a
              href="#Molding"
              aria-label="Link to go Molding"
              onClick={() => handleSectionChange('Molding')}
              className={
                currentSection === 'Molding' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productsIcon3} alt="product icon 1"></img>
              <h5>MOLDING</h5>
            </a>
          </li>

          <li className="nav-item product-header">
            <a
              href="#Hardware"
              aria-label="Link to go Hardware"
              onClick={() => handleSectionChange('Hardware')}
              className={
                currentSection === 'Hardware' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productsIcon4} alt="product icon 1"></img>
              <h5>HARDWARE</h5>
            </a>
          </li>

          <li className="nav-item product-header">
            <a
              href="#Miscellaneous"
              aria-label="Link to go Miscellaneous"
              onClick={() => handleSectionChange('Miscellaneous')}
              className={
                currentSection === 'Miscellaneous'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <img src={productsIcon5} alt="product icon 1"></img>
              <h5>MORE</h5>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsNav;
