import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="lisenced">
        <div className="lisenced-logo">
          <div className="logo-border">Lower Case Events</div>
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
            <li>About</li>
            <li>Artist</li>
            <li>Collaborations</li>
            <li>Events</li>
            <li>Gallery</li>
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
