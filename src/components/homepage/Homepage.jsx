import React from "react";
import "./Homepage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />

      <div className="belownavbar">
        <video
          className="background-video"
          src={
            "https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
          }
          autoPlay
          loop
          muted
        ></video>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
