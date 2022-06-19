import React from 'react';
import OurGoals from './components/OurGoals/OurGoals';
import Homeowners from './components/Homeowners/Homeowners';
import Header from './components/Header/Header';
import Features from './components/Features/Features';

function App() {
  return (
    <div>
      <Header />
      {/* for styling purposes */}
      <OurGoals />
      <Homeowners />
      <Features />
    </div>
  );
}

export default App;
