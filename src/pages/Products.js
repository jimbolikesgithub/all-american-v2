import React, { useState } from 'react';
import ProductsNav from '../components/Products/ProductsNav';
import Doors from '../components/Products/Doors';
import Windows from '../components/Products/Windows';
import Molding from '../components/Products/Molding';
import Hardware from '../components/Products/Hardware';
import Miscellaneous from '../components/Products/Miscellaneous';

function Products() {
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
      <ProductsNav
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      />
      {renderSection()}
    </div>
  );
}

export default Products;
