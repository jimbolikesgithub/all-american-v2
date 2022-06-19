import React from 'react';
import './features.css';
import local from '../../assets/images/local.png';
import service from '../../assets/images/service.png';
import familyOwned from '../../assets/images/familyOwned.png';
import highQuality from '../../assets/images/highQuality.png';
import customizable from '../../assets/images/customizable.png';
import affordable from '../../assets/images/affordable.png';

function Features() {
  return (
    <section className="features-container-all">
      <div className="container">
        <div className="features-container">
          <h1>OUR FEATURES</h1>
          <p>What our customers love most about us</p>
        </div>

        <div className="row icons-container">
          <div className="col-sm-6 col-xl-4">
            <img src={local} alt="local icon"></img>
            <p>LOCAL</p>
          </div>

          <div className="col-sm-6 col-xl-4">
            <img src={service} alt="service icon"></img>
            <p>SERVICE</p>
          </div>

          <div className="col-sm-6 col-xl-4">
            <img src={familyOwned} alt="family-owned icon"></img>
            <p>FAMILY-OWNED</p>
          </div>

          <div className="col-sm-6 col-xl-4">
            <img src={highQuality} alt="high-quality icon"></img>
            <p>HIGH-QUALITY</p>
          </div>

          <div className="col-sm-6 col-xl-4">
            <img src={customizable} alt="customizable icon"></img>
            <p>CUSTOMIZABLE</p>
          </div>

          <div className="col-sm-6 col-xl-4">
            <img src={affordable} alt="affordable icon"></img>
            <p>AFFORDABLE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
