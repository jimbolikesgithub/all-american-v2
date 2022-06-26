import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './features.css';
import local from '../../assets/images/local.png';
import service from '../../assets/images/service.png';
import familyOwned from '../../assets/images/familyOwned.png';
import highQuality from '../../assets/images/highQuality.png';
import customizable from '../../assets/images/customizable.png';
import affordable from '../../assets/images/affordable.png';

function Features() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="features-container-all" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="features-container">
          <h1>OUR FEATURES</h1>
          <p>What our customers love most about us</p>
        </div>

        <div className="icons-container grid sm:grid-cols-3 gap-6">
          <div className="">
            <img src={local} alt="local icon"></img>
            <p>LOCAL</p>
          </div>

          <div className="">
            <img src={service} alt="service icon"></img>
            <p>SERVICE</p>
          </div>

          <div className="">
            <img src={familyOwned} alt="family-owned icon"></img>
            <p>FAMILY-OWNED</p>
          </div>

          <div className="">
            <img src={highQuality} alt="high-quality icon"></img>
            <p>HIGH-QUALITY</p>
          </div>

          <div className="">
            <img src={customizable} alt="customizable icon"></img>
            <p>CUSTOMIZABLE</p>
          </div>

          <div className="">
            <img src={affordable} alt="affordable icon"></img>
            <p>AFFORDABLE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
