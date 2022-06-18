import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ourGoals.css';
import worker from '../../assets/ourGoalsWorker.png';

function OurGoals() {
  useEffect(() => {
    // 2 second animtion completeness
    Aos.init({duration: 2000});
  }, []);

  return (
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-12 goals-logo-title">
          <img src={worker} alt="construction worker icon"></img>
          <h1>OUR GOAL</h1>
        </div>

        <div class="col-6 goals-details">
          <p>
            All American Doors & Windows Inc. is Simi Valley’s local source for
            quality doors, windows, moldings, and a wide variety of other
            materials. It's both our job and great pride to assist you in
            finding the most up-to-date materials possible!
          </p>
        </div>
        <div class="col-6 goals-details">
          <p>
            We offer an excellent selection with the most popular brands, plus
            superior personal service. Our goal is to give you options, help you
            make decisions, and offer you affordable prices.
          </p>
        </div>

        <div class="col-12 goals-button">
          <button class="goals-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

export default OurGoals;
