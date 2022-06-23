import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './develop.css';
import dataDevelop from './dataDevelop';
import btnDevelop from './btnDevelop'

function Develop() {
  useEffect(() => {
    // 2 second animtion completeness
    Aos.init({ duration: 2000 });
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataDevelop.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataDevelop.length) {
      setSlideIndex(1);
    };
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataDevelop.length)
    };
  }; 

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <section className="develop-section">
        <div className="carousel-container">
            {dataDevelop.map((obj, index) => {
                return (
                    <div className="slide">
                        <img src={process.env.PUBLIC_URL + `/Photos/developImg/img${index + 1}.jpg`} alt=""></img>
                    </div>
                )
            })}
            <btnDevelop />
            <btnDevelop />
        </div>
    </section>
  );
}

export default Develop;