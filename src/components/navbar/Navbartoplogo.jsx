import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LowercaseeventsLogo from "../assests/LowercaseLogoRect.png";
import './Navbartoplogo.css'

const Navbartoplogo = () => {
  return (
    <div className="navbar_with_top_logo">
      <div className="navbar-logo">
        <Link to="/">
          <img src={LowercaseeventsLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-bar_wtl">
        <Link to="/" className="navbar-items">
          HOME
        </Link>

        <Link to="/events" className="navbar-items">
          EVENTS
        </Link>
        <Link to="/photos" className="navbar-items">
          PHOTOS 
        </Link>
        <Link to="/artist" className="navbar-items">
          ARTISTS
        </Link>
      </div>
    </div>
  );
};

export default Navbartoplogo;
