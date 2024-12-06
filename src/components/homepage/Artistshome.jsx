import React from "react";
import "./Artistshome.css";
import BoogieWithHoodie from "../assests/Artists/boogie_with_hoodie.jpg";
import Brysontiller from "../assests/Artists/brysontiller.avif";
import Drake from "../assests/Artists/drake.jpg";
import Gunna from "../assests/Artists/Gunna.jpg";
import Lil_Tjay from "../assests/Artists/lil_Tjay.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Artiststylescards from "./Artiststylescards";

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
      <div className="artist_name-slider">
        <Slider {...settings}>
          {ArtistNames.map((artist, index) => (
            <div key={index} className="slider-item">
              <p className="artist_name_home_scroll">{artist}</p>
            </div>
          ))}
        </Slider>

        <div className="home_artist_name_items">
          <p className="home_artists_section_heading">ARTISTS</p>

          <div className="home_artist_name_items_right">
            <button className="home_artists_view_morebtn">VIEW ALL</button>
          </div>
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

      <Artiststylescards />
    </div>
  );
};

export default Artists;
