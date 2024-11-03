import React from "react";
import "./Artists.css";

import BoogieWithHoodie from "../assests/Artists/boogie_with_hoodie.jpg";

import Brysontiller from "../assests/Artists/brysontiller.avif";

import Drake from "../assests/Artists/drake.jpg";

import Gunna from "../assests/Artists/Gunna.jpg";

import Lil_Tjay from "../assests/Artists/lil_Tjay.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArtistNames = [
  "A BOOGIE WITH A HOODIE",
  "LIL TJAY",
  "DRAKE",
  "GUNNA",
  "BRYSON TILLER",
];

const Artists = () => {
  const settings = {
    infinite: true,
    speed: 4000, // Adjust the speed for smooth scrolling
    slidesToShow: 4, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous autoplay speed
    cssEase: "linear", // Smooth linear transition
    variableWidth: true, // Allow each logo to adjust its width
    arrows: false, // Hide navigation arrows
    pauseOnHover: true, // Keeps autoplaying even when hovered
  };
  return (
    <div className="home_artists_section">
      <p className="home_artists_section_heading">ARTIST_</p>

      <div className="home_artist_name_items">
        <div className="home_artist_name_items_left">
          <p className="home_artist_name_item">A BOOGIE WITH A HOODIE</p>
          <p className="home_artist_name_item">LIL TJAY</p>
          <p className="home_artist_name_item">DRAKE</p>
          <p className="home_artist_name_item">GUNNA</p>
          <p className="home_artist_name_item">BRYSON TILLER</p>
        </div>

        <div className="home_artist_name_items_right">
          <button className="home_artists_view_morebtn">VIEW MORE++</button>
        </div>
      </div>

      <div className="home_artists_callage_items">
        <div className="home_artist_image_item">
          <img src={BoogieWithHoodie} alt="" />
        </div>

        <div className="home_artist_image_item">
          <img src={Brysontiller} alt="" />
        </div>

        <div className="home_artist_image_item">
          <img src={Drake} alt="" />
        </div>

        <div className="home_artist_image_item">
          <img src={Gunna} alt="" />
        </div>

        <div className="home_artist_image_item">
          <img src={Lil_Tjay} alt="" />
        </div>
      </div>

      <div className="artist_name-slider">
        <Slider {...settings}>
          {ArtistNames.map((artist, index) => (
            <div key={index} className="slider-item">
              <p className="artist_name_home_scroll">{artist}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Artists;
