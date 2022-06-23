import React from 'react';
import './develop.css';
import leftArrow from './Icons/left-arrow.svg';
import rightArrow from './Icons/right-arrow.svg';

function btnDevelop({ direction, moveSlide }) {
  console.log(direction, moveSlide);

  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="This is a right arrow and a left arrow"
      ></img>
    </button>
  );
}

export default btnDevelop;
