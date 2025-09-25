import React from "react";
import "./Artistdetail.css";
import Navbartoplogo from "../navbar/Navbartoplogo";
import Prefooter from "../footer/Prefooter";
import Footer from "../footer/Footer";

import { useParams } from "react-router-dom";
import artistData from "../../data/ArtistData";

const Artistdetail = (props) => {
  const { id } = useParams();
  const artist = artistData.find((a) => a.id === parseInt(id));
  if (!artist) {
    return <h1>hey</h1>;
  }

  return (
    <div>
      <Navbartoplogo />

      <div className="breadcrumb_top">
        <p className="breadcribm_txt">
          LOWERCASE EVENTS / <span> &nbsp;{`${artist.name}`}</span>
        </p>
      </div>

      <div className="artist_detail_sect">
        <div className="artist_detail_sect_pic">
          <img src={artist.image} alt="" />
        </div>

        <div className="artist_detail_sect_cont">
          <p>{artist.description}</p>
        </div>
      </div>

      <div className="artist_detail_vdo">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/5FH534hKrs8?si=7VFdJIEZQc29OL3r"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default Artistdetail;
