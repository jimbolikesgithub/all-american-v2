import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

// Image for Windows Section
import productsWindows1 from '../../assets/images/products-windows-1.avif';

function Windows() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="products-container-all" data-aos="fade-left">
      <div className="products-container grid lg:grid-cols-2 gap-10">
        <div className="products-details-container">
          <h1>WINDOWS</h1>
          <h5 className="product-header-txt">
            "Whether it be energy efficient windows, a skylight for your newly
            remodeled kitchen, or a bay window to overlook your garden, we are
            certain to have it all, prepared just for you."
          </h5>
          <p>
            Horizontal Slider · Single Hung · Double Hung · Awning · Casement ·
            Radius · Bay & Bow Windows · Gardenaire · Picture Windows · Skylight
            · Acrylic Blocks · Full, Half & Quarter Circle Windows
          </p>
          <p>
            Wood · Vinyl · Wood · Cross Reed · Matelux · Rain · P516 · and much
            more
          </p>
        </div>

        <div className="products-image-container">
          <img src={productsWindows1} alt="Products Window"></img>
        </div>
      </div>
    </section>
  );
}

export default Windows;
