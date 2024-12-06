import React from "react";

import "./Footer.css";
// import fatsomabglogo from '../assests/fatsomabglogo.png'

import LowercaseEventsLogo from "../assests/LowercaseLogoRect.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_main_parent">
      <div className="lisenced">
        <div className="lisenced-logo">
          <Link to="/">
            <img src={LowercaseEventsLogo} alt="" />
          </Link>
          <p className="footer__beow_ogo_txt">
            CONTACT<span>@</span>LOWERCASEEVENTS.CO.UK <strong>|</strong>{" "}
          </p>
        </div>
        {/* <div className="lisenced-note">
          COPYRIGHT © 2024 Lower Case Events | Lower Case Events ltd. ALL RIGHTS
          RESERVED.
        </div> */}

        <div className="footer">
          <div className="footer-box1">

            <ul>

            <li>
                <Link to="/about">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/events">Events</Link>
              </li>

              <li>
                <Link to="/photos">Photos</Link>
              </li>

              <li>
                <Link to="/artist">Artist</Link>
              </li>

              <li>
                <Link to="/collab">Brands</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box4">
     
     <ul>
       <li>
         <Link to="/">Email us</Link>
       </li>
       <li>
         <Link to="/">Group Bookings</Link>
       </li>
       <li>
         <Link to="/">University Partners</Link>
       </li>
       <li>
         <Link to="/">Birthdays</Link>
       </li>{" "}
       <li>
         <Link to="/">Societies</Link>
       </li>{" "}
       <li>
         <Link to="/">FAQ's</Link>
       </li>
       <li>
         <Link to="/">Playlist</Link>
       </li>
       <li>
         <Link to="/">Our Story</Link>
       </li>
     </ul>
   </div>

          <div className="footer-box4">
     
            <ul>
              <li>
                <Link to="/">Carrers</Link>
              </li>
              <li>
                <Link to="/">Partners</Link>
              </li>
              <li>
                <Link to="/">University Partners</Link>
              </li>
              <li>
                <Link to="/">Our Network</Link>
              </li>{" "}
              <li>
                <Link to="/">University Partners</Link>
              </li>{" "}
              <li>
                <Link to="/">FAQ's</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box2">

          </div>

          <div className="footer-box1">

            <div className="social-icons">
              <ul>
                <li>
                  <a href="/"> Instagam </a>
                </li>

                <li>
                  <a            href="https://wa.me/447568564663"
                  target="_blank"
                  rel="noreferrer"> Whatsapp </a>
                </li>

                <li>
                  <a href="/"> Facebook </a>
                </li>

                <li>
                  <a href="/"> Fatsoma </a>
                </li>

                <li>
                  <a href="/"> Youtube </a>
                </li>

                <li>
                  <a href="/"> Vimeo </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="lisenced-note">
        <span> ©</span>   2024 LOWERCASE EVENTS, ALL RIGHTS RESERVED. WEB DEVELOPMENT <a href="/">LOWERCASE AGENCY</a>
        </div>

        <ul>
          <li>
            <Link>Privacy Policy</Link>
            <Link>|</Link>

            <Link>Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
