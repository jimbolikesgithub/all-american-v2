import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './homeowners.css';
import pic1 from '../../assets/images/homeowners-pic-1.avif';
import pic2 from '../../assets/images/homeowners-pic-2.avif';

function Homeowners() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home-contract-container" data-aos="fade-right">
      <div className="container">
        <div className="row home-contract-section">
          <div className="col-lg-12 col-xl-6 home-section">
            <h1>HOMEOWNERS</h1>
            <p>
              Whether you are a do-it-yourself type homeowner, or you prefer to
              hire an installation crew, we can help. We have strong
              relationships with several different vendors for doors, windows,
              and moldings. You can be certain you will find the perfect look to
              fit your style and budget. We have the ability to order almost any
              home improvement product on the market.
            </p>
            <p>
              Installations can be referred or recommended to you by our
              welcoming and experienced staff. You can be confident that our
              many recommended installers are prompt and reliable and that they
              take pride in quality workmanship.
            </p>
          </div>

          <div className="col-lg-6 col-xl-6 d-none d-lg-block home-pic">
            <img src={pic1} alt="person working on door"></img>
          </div>
        </div>

        <div className="row home-contract-section">
          <div className="col-lg-6 col-xl-6 d-none d-lg-block contract-pic">
            <img src={pic2} alt="office"></img>
          </div>

          <div className="col-lg-12 col-xl-6 contract-section">
            <h1>CONTRACTORS</h1>
            <p>
              As a contractor, you can be certain that you are working with the
              best source of vendors when ordering construction materials. Your
              clients have differing styles and budgets, and we can simplify the
              process by filtering through high end and budget conscious
              products to get you what you need.
            </p>
            <p>
              When you need home improvement products for your clients, you want
              information fast. We offer the most current and accurate
              information available. All American Doors & Windows is known for
              quality and reliability, and the ability to order almost any home
              improvement product on the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homeowners;
