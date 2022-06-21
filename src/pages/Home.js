import React from 'react';
import OurGoals from '../components/OurGoals (Home)/OurGoals';
import Homeowners from '../components/Homeowners (Home)/Homeowners';
import Features from '../components/Features (Home)/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <OurGoals />
      <Homeowners />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;