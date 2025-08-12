import React from "react";
import "./Artistshome.css";
import Artiststylescards from "./Artiststylescards";

const ArtistName = "DRAKE, A BOOGIE WIT THA HOODIE, GUNNA, KELHANI, PARTYNEXTDOOR, 6LACK, BRYSON TILLER, LIL TJAY, DON TOLIVER, AND TORY LANEZ, D BLOCK EUROPE, M HUNCHO, NAFE SMALLZ, WEWANTWRAITHS, SKEPTA, RUSS MILLIONS, TION WAYNE, AITCH, AJ TRACEY, KREPT & KONAN, DIGDAT, ABRA CADABRA, ARRDEE, NSG, MOSTACK, STEFFLON DON, ZIEZIE, B YOUNG, NOT3S, YOUNG T & BUGSEY, WSTRN, MISS DYNAMITE, MAJESTIC, S CLUB, DAPPY, YUNGEN, DEVILMAN, BIG NARSTIE, WILEY, LETHAL BIZZLE, JAY1, CEE CHYNA, GLIZZ, M DOT R, NINO UPTOWN, SWITCH OTR, RAMZ, SWARMZ, KOOMZ, SUB FOCUS, PENDULUM, SIGMA, DJ FRESH, WILKINSON, S.P.Y ...";

const Artists = () => {
  return (
    <>
    <div className="home_artists_section">
      
      {/* 🔁 Marquee Section */}
      <div className="marquee_wrapper">
      {Array.from({ length: 16}).map((_, index) => (
        <div
          key={index}
          className={`marquee_row ${index % 2 === 0 ? "normal" : "reverse"}`}
        >
          <div className="marquee_text">
            <span>{ArtistName}</span>
            <span>{ArtistName}</span>
            <span>{ArtistName}</span>
          </div>
        </div>
      ))}
    </div>

      {/* Foreground Content */}
      <div className="home_artist_content">
        <div className="home_artist_name_items">
          <p className="home_artists_section_heading">Artists</p>
        </div>

        <div className="artist_cards_container">
          <Artiststylescards />
        </div>

      
        </div>
     
    </div>
     <div className="bottom_row">
        <div className="left_text">LOWERCASE LIVE</div>
        <button className="full_lineup_button">VIEW THE FULL LINE UP</button>
      </div>
      </>
  );
};

export default Artists;
