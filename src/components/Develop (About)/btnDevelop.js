import React from "react";
import './develop.css'
import leftArrow from './Icons/left-arrow.svg'
import rightArrow from './Icons/right-arrow.svg'

export default function btnDevelop( { direction, moveCarousel }) {
    console.log(direction, moveCarousel);

    return (
        <button onClick={moveCarousel} className={direction === "next" ? "btn-slide-next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow}></img>
        </button>
    );
}  