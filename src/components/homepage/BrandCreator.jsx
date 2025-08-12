import React from 'react'
import './BrandCreator.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentText = [
  "ARE YOU A CREATOR ?",
  "GET IN TOUCH",
  "ARE YOU A CREATOR ?",
  "GET IN TOUCH"
];

const BrandCreator = () => {

    const settings = {
        infinite: true,
        speed: 3000, // Adjust the speed for smooth scrolling
        slidesToShow: 1, // Number of logos visible at a time
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 0, // Continuous autoplay speed
        cssEase: "linear", // Smooth linear transition
        variableWidth: true, // Allow each logo to adjust its width
        arrows: false, // Hide navigation arrows
        pauseOnHover: true, // Keeps autoplaying even when hovered
      };
      
  return (
    <div>

<div className="brand_creator_name-slider">
        <Slider {...settings}>
          {ContentText.map((artist, index) => (
            <div key={index} className="slider-item">
              <p className="artist_name_home_scroll">{artist}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BrandCreator