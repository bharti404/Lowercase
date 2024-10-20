import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import "./Footer.css";

import LowercaseEventsLogo from "../assests/LowercaseLogoRect.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="lisenced">
        <div className="lisenced-logo">
            <Link to='/'> 
          <img src={LowercaseEventsLogo} alt="" />
            </Link>
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
              <Link to="/artist">Artist</Link>
            </li>

            <li>
              <Link to="/collab">Collaborations</Link>
            </li>

            <li>
              <Link to="/events">Events</Link>
            </li>

            <li>
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box2">
          <p className="footer-heading">ENQUIRIES</p>
          <ul>
            <li>Reach us by email or chat for enquiries and bookings.</li>
            <li>info@lower-case.co London UK</li>
          </ul>
        </div>
        <div className="footer-box3">
          <div className="footer-heading">SOCIAL MEDIA</div>
          <div className="social-icons">
            <FaInstagram className="footer-icons" />
            <FaWhatsapp className="footer-icons" />
            <FaFacebookSquare className="footer-icons" />
            <CiTwitter className="footer-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
