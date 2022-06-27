import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './features.css';

// Images for features icons sections
import local from '../../assets/images/features-icon-local.png';
import service from '../../assets/images/features-icon-service.png';
import familyOwned from '../../assets/images/features-icon-familyOwned.png';
import highQuality from '../../assets/images/features-icon-highQuality.png';
import customizable from '../../assets/images/features-icon-customizable.png';
import affordable from '../../assets/images/features-icon-affordable.png';

function Features() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="features-container-all" data-aos="fade-up">
      <div className="container">
        <div className="features-container">
          <h1>OUR FEATURES</h1>
          <p>What our customers love most about us</p>
        </div>

        <div className="row icons-container">
          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={local} alt="local icon"></img>
            <p>LOCAL</p>
          </div>

          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={service} alt="service icon"></img>
            <p>SERVICE</p>
          </div>

          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={familyOwned} alt="family-owned icon"></img>
            <p>FAMILY-OWNED</p>
          </div>

          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={highQuality} alt="high-quality icon"></img>
            <p>HIGH-QUALITY</p>
          </div>

          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={customizable} alt="customizable icon"></img>
            <p>CUSTOMIZABLE</p>
          </div>

          <div className="col-sm-6 col-xl-4 icons-container-1">
            <img src={affordable} alt="affordable icon"></img>
            <p>AFFORDABLE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
