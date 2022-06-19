import React from 'react';
import './ourGoals.css';
import worker from '../../assets/images/ourGoalsWorker.png';

function OurGoals() {
  return (
    <section className="goals-container-all">
      <div className="container">
        <div className="row goals-container">
          <div className="col-12 goals-logo-title">
            <img src={worker} alt="construction worker icon"></img>
            <h1>OUR GOAL</h1>
          </div>

          <div className="col-6 goals-details">
            <p>
              All American Doors & Windows Inc. is Simi Valley’s local source
              for quality doors, windows, moldings, and a wide variety of other
              materials. It's both our job and great pride to assist you in
              finding the most up-to-date materials possible!
            </p>
          </div>
          <div className="col-6 goals-details">
            <p>
              We offer an excellent selection with the most popular brands, plus
              superior personal service. Our goal is to give you options, help
              you make decisions, and offer you affordable prices.
            </p>
          </div>

          <div className="col-12 goals-button">
            <a class="btn btn-primary" href="#" role="button">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurGoals;
