import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './develop.css';
import dataDevelop from './dataDevelop';
import BtnSlider from './btnDevelop';

function Develop() {
  useEffect(() => {
    // 2 second animtion completeness
    Aos.init({ duration: 2000 });
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== dataDevelop.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === dataDevelop.length){
        setSlideIndex(1)
    }
}

  const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(dataDevelop.length)
    }
}

  const moveDot = index => {
    setSlideIndex(index)
}

  return (
    <section className="develop-section" data-aos="fade-up">
      <div class="row">
        
        <div className="col-lg develop-txt-col">
          <div className="develop-txt-container">
            <h1 className="discover-h1">DISCOVER US</h1>
              <div className="develop-txt-container-2">
                <p className="develop-txt">All American Doors & Windows Inc is family owned and operated in Simi Valley, California. We started this business because we noticed the lack of professional construction suppliers in Simi Valley and knew that we could do better. We understand everything homeowners and contractors need to complete their home improvement projects. We know the best suppliers in the industry and where to find the highest quality materials. All American Doors and Windows opened in January of 2004 to give Simi Valley homeowners and contractors a source for top quality vendors for doors, windows, moldings and door hardware.
                </p>
                <p className="develop-txt-2">
                  "I love doors and windows."
                </p>
                <p className="develop-txt-3">
                  - Pete DiNatale, Owner
                </p>
              </div>
          </div>
        </div>

        <div className="col-lg develop-carousel-col">
          <div className="carousel-container">
              {dataDevelop.map((obj, index) => {
                  return (
                      <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                          <img src={process.env.PUBLIC_URL + `/Photos/developImg/img${index + 1}.jpg`} className="develop-img" alt="carousel images showing all american stuff"></img>
                          <div className="develop-img-txt-overlay">
                            <p className="develop-img-title">{obj.title}</p>
                          </div>
                      </div>
                  )
              })}
              
              <BtnSlider moveSlide={nextSlide} direction={"next"} />
              <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

              <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                  <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>       
                  </div>
                ))}
              </div>
          </div>
        </div>  
        </div>
    </section>
  );
}

export default Develop;