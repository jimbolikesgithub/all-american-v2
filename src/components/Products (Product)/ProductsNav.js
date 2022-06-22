import React from 'react';
import './products.css';

// Images for Product Icons
import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';
import productIcon4 from '../../assets/images/productIcon4.png';
import productIcon5 from '../../assets/images/productIcon5.png';

function ProductsNav({ currentSection, handleSectionChange }) {
  return (
    <section className="products-container">
      <div className="product-icon-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#Doors"
              onClick={() => handleSectionChange('Doors')}
              className={
                currentSection === 'Doors' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productIcon1} alt="product icon 1"></img>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#Windows"
              onClick={() => handleSectionChange('Windows')}
              className={
                currentSection === 'Windows' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productIcon2} alt="product icon 1"></img>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#Molding"
              onClick={() => handleSectionChange('Molding')}
              className={
                currentSection === 'Molding' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productIcon3} alt="product icon 1"></img>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#Hardware"
              onClick={() => handleSectionChange('Hardware')}
              className={
                currentSection === 'Hardware' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={productIcon4} alt="product icon 1"></img>
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#Miscellaneous"
              onClick={() => handleSectionChange('Miscellaneous')}
              className={
                currentSection === 'Miscellaneous'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <img src={productIcon5} alt="product icon 1"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsNav;
