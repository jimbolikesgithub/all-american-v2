import React from 'react';
import OurGoals from '../components/OurGoals (Home)/OurGoals';
import Homeowners from '../components/Homeowners (Home)/Homeowners';
import Features from '../components/Features (Home)/Features';
import Footer from '../components/Footer/Footer';

// About stuff to move later
import Develop from '../components/Develop (About)/Develop';
import Showroom from '../components/Showroom (About)/Showroom'

const Home = () => {
  return (
    <div>
      <OurGoals />
      <Homeowners />
      <Features />
      <Footer />
      <Develop />
      <Showroom />
    </div>
  );
};

export default Home;