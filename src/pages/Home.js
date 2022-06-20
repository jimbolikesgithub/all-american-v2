import React from 'react';
import OurGoals from '../components/OurGoals/OurGoals';
import Homeowners from '../components/Homeowners/Homeowners';
import Features from '../components/Features/Features';
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