import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LowerCaseLogo from "../assests/LowercaseLogoRect.png";
import Brandslogocarousel from "../brandscarousel/Brandslogocarousel";
import Artists from "./Artistshome";

// import FatosmaImg from "../assests/fatsoma_home.jpg";
// import Contact from "./Contact";
import InstagramEmbed from "../Insta/Insta";
import Modernphotos from "../photos/Modernphotos";
import Lowercaseticketwidget from "../LowercaseTicket/Lowercaseticketwidget";
import BrandCreator from "./BrandCreator";
// import Supportinghome from "./Supportinghome";
// import Instagidphotos from "../photos/Instagidphotos";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const viewportHeight = window.innerHeight; // Total viewport height
      const triggerHeight = viewportHeight * 0.22; // 22% of the viewport height

      if (scrollPosition > triggerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div
          className={`vdo_home_content_main ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <div className="vdo_home_content_logo">
            <img src={LowerCaseLogo} alt="" />
          </div>

          <div className="vdo_home_content_text">
            <p className="vdoheadhomepage">
              Transforming The scene, one Event <br /> at a Time since 2010 _
            </p>
            <p className="vdohome_contentone">
              Founded in 2010, Lowercase Events has become a leading name in the
              student nightlife scene. Specialising in unforgettable club nights
              and unique experiences, we’ ve spent over a decade curating events
              that celebrate youth culture, diversity, and creativity
            </p>

            <p className="vdohome_contenttwo">
              Our mission is to provide a space where students can connect, let
              loose, and make memories. From iconic DJ performances to exclusive
              takeovers, we strive to create experiences that resonate with the
              next generation of partygoers
            </p>
          </div>
        </div>
      </div>

      <Brandslogocarousel />
      <Lowercaseticketwidget />


      <Modernphotos />
      {/* <Instagidphotos /> */}

      <BrandCreator />

      <Artists />


      {/* <Supportinghome /> */}

      {/* <div className="home_fatsoma">
        <img src={FatosmaImg} alt="" />
      </div> */}

      <InstagramEmbed />

      {/* <Contact /> */}

      <Footer />
    </div>
  );
};

export default Homepage;
