import React from "react";
import "./NewArtist.css";

import Navbartoplogo from "../navbar/Navbartoplogo";
import Footer from "../footer/Footer";
import Prefooter from "../footer/Prefooter";
import NewArtiststylescards from "../homepage/NewArtiststylescards";
import artistData from "../../data/ArtistData";

const NewArtist = () => {
  return (
    <>
      <Navbartoplogo />

      <div className="marquee-container">
        <h1 className="marquee-heading">LowerCase Artist</h1>
      </div>

      <div className="artistProfile">
        {artistData.map((cur, index) => (
          <NewArtiststylescards data={cur} />
        ))}
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default NewArtist;
