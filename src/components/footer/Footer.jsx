import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { CiTwitter } from "react-icons/ci";
import { FaVimeo } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import "./Footer.css";
import fatsomabglogo from '../assests/fatsomabglogo.png'

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
          <p className="footer__beow_ogo_txt"></p>
        </div>
        <div className="lisenced-note">
          COPYRIGHT © 2024 Lower Case Events | Lower Case Events ltd. ALL RIGHTS
          RESERVED.
        </div>
      </div>

      <div className="footer">
        <div className="footer-box1">
          <p className="footer-heading">LOWER CASE EVENTS</p>
          <ul>
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
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box4">
          <p className="footer-heading">ENQUIRIES</p>
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
            <li>
              <Link to="/">Playlist</Link>
            </li>
            <li>
              <Link to="/">Our Story</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box2">
          <p className="footer-heading">ENQUIRIES</p>
          <ul>
            <li>info@lowercasegroup.co.uk</li>
            <li>
              <a
                href="https://wa.me/447568564663"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-box3">
          <div className="footer-heading">SOCIAL MEDIA</div>
          <div className="social-icons">
            <FaInstagram className="footer-icons" />
            <FaWhatsapp className="footer-icons" />
            <FaFacebookSquare className="footer-icons" />
            {/* <CiTwitter className="footer-icons" /> */}
            <FaYoutube className="footer-icons" />

            <FaVimeo className="footer-icons" />
            <img src={fatsomabglogo} alt="" />

          </div>
        </div>
      </div>

      <div className="bottom_footer">

        <ul>
          <li>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Footer;
