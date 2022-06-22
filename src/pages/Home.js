import React from 'react';
import OurGoals from '../components/OurGoals (Home)/OurGoals';
import Homeowners from '../components/Homeowners (Home)/Homeowners';
import Features from '../components/Features (Home)/Features';
import Footer from '../components/Footer/Footer';

import Develop from '../components/Develop (About)/Develop';

const Home = () => {
  return (
    <div>
      <OurGoals />
      <Homeowners />
      <Features />
      <Footer />
      <Develop />
    </div>
  );
};

export default Home;