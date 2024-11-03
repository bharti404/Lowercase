import React from "react";
import "./Brandslogocarousel.css";
import Brandone from "../assests/Brands/b_one.avif";
import Brandtwo from "../assests/Brands/b_two.avif";
import Brandthree from "../assests/Brands/b_three.avif";
import Brandfour from "../assests/Brands/b_four.avif";
import Brandfive from "../assests/Brands/b_five.avif";
import Brandsix from "../assests/Brands/b_six.avif";
import Brandseven from "../assests/Brands/b_seven.avif";
import Brandeight from "../assests/Brands/b_eight.avif";
import Brandnine from "../assests/Brands/b_nine.avif";

import Brandten from "../assests/Brands/b_ten.avif"
import Brandeleven from "../assests/Brands/b_eleven.avif";


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const logos = [
  Brandone,
  Brandtwo,
  Brandthree,
  Brandfour,
  Brandfive,
  Brandsix,
  Brandseven,

  Brandeight,
  Brandnine,
  Brandten,
  Brandeleven

  // add more logos as needed
];

const Brandslogocarousel = () => {


    const settings = {
        infinite: true,
        speed: 2000,               // Adjust the speed for smooth scrolling
        slidesToShow: 5,           // Number of logos visible at a time
        slidesToScroll: 1,
        autoplay: true,            // Enable autoplay
        autoplaySpeed: 0,          // Continuous autoplay speed
        cssEase: 'linear',         // Smooth linear transition
        variableWidth: true,       // Allow each logo to adjust its width
        arrows: false,             // Hide navigation arrows
        pauseOnHover: true,       // Keeps autoplaying even when hovered
      };
  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slider-item">
            <img src={logo} alt={`Logo ${index}`} style={{ width: '150px'}} />
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default Brandslogocarousel;
