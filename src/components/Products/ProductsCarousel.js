import React, { useEffect, useState } from 'react';
import Products from '../../pages/Products';
import Doors from './Doors';
import Windows from './Windows';
import Molding from './Molding';
import Hardware from './Hardware';
import Miscellaneous from './Miscellaneous';
import Aos from 'aos';
import './products.css';
import { Carousel } from 'react-bootstrap';

import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';
import productIcon4 from '../../assets/images/productIcon4.png';
import productIcon5 from '../../assets/images/productIcon5.png';

// import product1 from '../../assets/images/product1.png';
// import product2 from '../../assets/images/product2.png';
// import product3 from '../../assets/images/product3.png';
// import product4 from '../../assets/images/product4.png';
// import product5 from '../../assets/images/product5.png';

function ProductsCarousel() {
  const [currentSection, setCurrentSection] = useState('Doors');

  const renderSection = () => {
    if (currentSection === 'Doors') {
      return <Doors />;
    }
    if (currentSection === 'Windows') {
      return <Windows />;
    }
    if (currentSection === 'Molding') {
      return <Molding />;
    }
    if (currentSection === 'Hardware') {
      return <Hardware />;
    }
    return <Miscellaneous />;
  };

  const handleSectionChange = (section) => setCurrentSection(section);

  return (
    <div>
      <Products
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      />
      {renderSection()}
    </div>
    // <div className="container carousel-container">
    //   <div className="row">
    //     <Carousel>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src={productIcon1}
    //           alt="First slide"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src={productIcon2}
    //           alt="Second slide"
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src={productIcon3}
    //           alt="Third slide"
    //         />
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
    // </div>
  );
}

export default ProductsCarousel;
