import React from 'react';
import OurGoals from './components/OurGoals/OurGoals';
import Homeowners from './components/Homeowners/Homeowners';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      {/* for styling purposes */}
      <OurGoals />
      <Homeowners />
    </div>
  );
}

export default App;
