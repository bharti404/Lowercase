import React from "react";
import "./Artist.css";
import banner from "../assests/banner.jpg";
import band from "../assests/band.jpeg";
import travis from "../assests/Travis.jpg";
import rocky from "../assests/rocky.jpg";
import Slider from "react-slick";
import Navbartoplogo from "../navbar/Navbartoplogo";
import Footer from "../footer/Footer";
import Prefooter from "../footer/Prefooter";

const artists = [
  { name: "Banner", img: banner },
  { name: "Rocky", img: rocky },
  { name: "Band", img: band },
  { name: "Travis", img: travis },
  { name: "Rocky", img: rocky },
  { name: "Banner", img: banner },
  { name: "Travis", img: travis },
  { name: "Band", img: band },

  { name: "Banner", img: banner },
  { name: "Band", img: band },
  { name: "Travis", img: travis },
  { name: "Rocky", img: rocky },
  { name: "Banner", img: banner },
  { name: "Band", img: band },
  { name: "Travis", img: travis },
  { name: "Rocky", img: rocky },
  { name: "Banner", img: banner },
  { name: "Band", img: band },
  { name: "Travis", img: travis },
  { name: "Rocky", img: rocky },
];

const ArtistNames = [
  "A BOOGIE WITH A HOODIE",
  "LIL TJAY",
  "DRAKE",
  "GUNNA",
  "BRYSON TILLER",
];

const Artist = () => {
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
    <div>
      <Navbartoplogo />

      <div className="artist_name_slider_artpage">
        <Slider {...settings}>
          {ArtistNames.map((artist, index) => (
            <div key={index} className="slider-item">
              <p className="artist_name_scroll">{artist}</p>
            </div>
          ))}
        </Slider>

        <div className="home_artist_name_items">
          <p className="home_artists_section_heading">ARTISTS</p>
        </div>
      </div>

      <div className="artists_callage_items">
        {artists.map((artist) => (
          <div className="artist_image_item">
            <img src={artist.img} alt="" />
          </div>
        ))}
      </div>

      <Prefooter />

      <Footer />
    </div>
  );
};

export default Artist;
