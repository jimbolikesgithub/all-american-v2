import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './showroom.css';

function Showroom() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="showroom-container" data-aos="fade-up">
      <h1 className="showroom-heading">OUR SHOWROOM</h1>
      <div className="showroom-txt-container">
        <p className="showroom-txt">
          Please come down to our showroom, and browse through our assortment of
          windows, doors, moldings and accessories.
        </p>
        <p className="showroom-txt">We are located in Simi Valley at:</p>
        <p className="showroom-txt">185-G East Easy St</p>
        <p className="showroom-txt">Simi Valley, CA 93065</p>
      </div>
      <div className="col-12 goals-button showroom-button">
        <a class="btn btn-primary" href="/contact" role="button">
          CONTACT US
        </a>
      </div>
    </section>
  );
}

export default Showroom;
