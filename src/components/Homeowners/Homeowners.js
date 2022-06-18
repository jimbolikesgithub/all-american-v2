import React from 'react';
import './homeowners.css';
import pic1 from '../../assets/homeownersPic1.jpg';
import pic2 from '../../assets/homeownersPic2.jpg';
import pic3 from '../../assets/homeownersPic3.png';

function Homeowners() {
  return (
    <section class="homeowners-contractors-container">
      <div class="container">
        <div class="row">
          <div class="col-12 homeowners-contractors-section">
            <div class="col-6 homeowners-contractors-1">
              <h1>HOMEOWNERS</h1>
              <p>
                Whether you are a do-it-yourself type homeowner, or you prefer
                to hire an installation crew, we can help. We have strong
                relationships with several different vendors for doors, windows,
                and moldings. You can be certain you will find the perfect look
                to fit your style and budget. We have the ability to order
                almost any home improvement product on the market.
              </p>
              <p>
                Installations can be referred or recommended to you by our
                welcoming and experienced staff. You can be confident that our
                many recommended installers are prompt and reliable and that
                they take pride in quality workmanship.
              </p>
            </div>
            <div class="col-6 homeowners-contractors-pic-1">
              <img src={pic1} alt="person working on door"></img>
            </div>
          </div>

          <div class="col-12 homeowners-contractors-section">
            <div class="col-6 homeowners-contractors-pic-2">
              <img src={pic2} alt="office"></img>
            </div>

            <div class="col-6 homeowners-contractors-2">
              <h1>CONTRACTORS</h1>
              <p>
                As a contractor, you can be certain that you are working with
                the best source of vendors when ordering construction materials.
                Your clients have differing styles and budgets, and we can
                simplify the process by filtering through high end and budget
                conscious products to get you what you need.
              </p>
              <p>
                When you need home improvement products for your clients, you
                want information fast. We offer the most current and accurate
                information available. All American Doors & Windows is known for
                quality and reliability, and the ability to order almost any
                home improvement product on the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homeowners;
