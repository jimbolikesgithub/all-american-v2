import React, { useState } from 'react';
import ProductsNav from '../components/Products (Product)/ProductsNav';
import Doors from '../components/Products (Product)/Doors';
import Windows from '../components/Products (Product)/Windows';
import Molding from '../components/Products (Product)/Molding';
import Hardware from '../components/Products (Product)/Hardware';
import Miscellaneous from '../components/Products (Product)/Miscellaneous';

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
