// import React from "react";
// import "./Artist.css";
// import banner from "../assests/banner.jpg";
// import band from "../assests/band.jpeg";
// import travis from "../assests/Travis.jpg";
// import rocky from "../assests/rocky.jpg";
// import Slider from "react-slick";
// import Navbartoplogo from "../navbar/Navbartoplogo";
// import Footer from "../footer/Footer";
// import Prefooter from "../footer/Prefooter";

// const artists = [
//   { name: "Banner", img: banner },
//   { name: "Rocky", img: rocky },
//   { name: "Band", img: band },
//   { name: "Travis", img: travis },
//   { name: "Rocky", img: rocky },
//   { name: "Banner", img: banner },
//   { name: "Travis", img: travis },
//   { name: "Band", img: band },

//   { name: "Banner", img: banner },
//   { name: "Band", img: band },
//   { name: "Travis", img: travis },
//   { name: "Rocky", img: rocky },
//   { name: "Banner", img: banner },
//   { name: "Band", img: band },
//   { name: "Travis", img: travis },
//   { name: "Rocky", img: rocky },
//   { name: "Banner", img: banner },
//   { name: "Band", img: band },
//   { name: "Travis", img: travis },
//   { name: "Rocky", img: rocky },
// ];

// const ArtistNames = [
//   "A BOOGIE WITH A HOODIE",
//   "LIL TJAY",
//   "DRAKE",
//   "GUNNA",
//   "BRYSON TILLER",
// ];

// const Artist = () => {
//   const settings = {
//     infinite: true,
//     speed: 4000, // Adjust the speed for smooth scrolling
//     slidesToShow: 4, // Number of logos visible at a time
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 0, // Continuous autoplay speed
//     cssEase: "linear", // Smooth linear transition
//     variableWidth: true, // Allow each logo to adjust its width
//     arrows: false, // Hide navigation arrows
//     pauseOnHover: true, // Keeps autoplaying even when hovered
//   };

//   return (
//     <div>
//       <Navbartoplogo />

//       <div className="artist_name_slider_artpage">
//         <Slider {...settings}>
//           {ArtistNames.map((artist, index) => (
//             <div key={index} className="slider-item">
//               <p className="artist_name_scroll">{artist}</p>
//             </div>
//           ))}
//         </Slider>

//         <div className="home_artist_name_items">
//           <p className="home_artists_section_heading">ARTISTS</p>
//         </div>
//       </div>

//       <div className="artists_callage_items">
//         {artists.map((artist) => (
//           <div className="artist_image_item">
//             <img src={artist.img} alt="" />
//           </div>
//         ))}
//       </div>

//       <Prefooter />

//       <Footer />
//     </div>
//   );
// };

// export default Artist;





// New Artist Page
import React from 'react';
import './Artist.css';
import Artiststylescards from '../homepage/Artiststylescards';
import Navbartoplogo from "../navbar/Navbartoplogo";
import Footer from "../footer/Footer";
import Prefooter from "../footer/Prefooter";

const ArtistNames = [
 `DRAKE, A BOOGIE WIT THA HOODIE, GUNNA, KELHANI, PARTYNEXTDOOR, 6LACK, BRYSON TILLER, LIL TJAY,DON TOLIVER, AND TORY LANEZ, D BLOCK EUROPE, M HUNCHO, NAFE SMALLZ, `,
 
 `WEWANTWRAITHS, SKEPTA, RUSS MILLIONS, TION WAYNE, AITCH, AJ TRACEY, KREPT & KONAN, DIGDAT, ABRA CADABRA, ARRDEE, NSG, MOSTACK, STEFFLON DON, ZIEZIE, B YOUNG, NOT3S, YOUNG T & BUGSEY, WSTRN, MISS DYNAMITE, MAJESTIC, S CLUB, DAPPY, YUNGEN, DEVILMAN, BIG NARSTIE, WILEY, LETHAL BIZZLE, JAY1, CEE CHYNA, GLIZZ, M DOT R, NINO UPTOWN, SWITCH OTR, RAMZ, SWARMZ, AND KOOMZ,`, 
 ` SUB FOCUS, PENDULUM, SIGMA, DJ FRESH, WILKINSON, S.P.Y, BENNY L, ED SOLO, DEEKLINEJORDAN NORTH, KINGS OF THE ROLLERS, HEDEX, MACKY GEE, SERUM, BOU, TURNO, SOTA, CAMO & KROOKED,
 CULTURE SHOCK, BASSIC, GEORGIE RIOT, DOM WHITING EMILY MAKIS, CHARLOTTE PLANK, MR TRAUMATIK, FERRY CORSTEN, BASSHUNTER, DARKZY, WINDOW KID, MY NU LENG, SAMMY VIRJI, SKREAM, REDLIGHT, JACK FOWLER, NATHAN DAWE, SHIFT K3Y, DEEPER PURPOSE, CHRIS LORENZO, ANNIE MAC, SECONDCITY, DENIS SULTA, PATRICK TOPPING, HOT SINCE 82, EWAN MCVICAR, SOLARDO, BEN HEMSLEY, GORGON CITY, PAWSA, SWITCH DISCO, AND ALAN FITZPATRICK, ARTFUL DODGER, DJ LUCK AND MC NEAT DJ PIED PIPER, OXIDE & NEUTRINO, MATT JAM LAMONT MAJESTIC SWEET FEMALE ATTITUDE, MC DT, MONSTA BOY, STICKY, DJ CARTIER, SMOKEY BUBBLIN' B, AND HEARTLESS CREW DJ PIONEER DAVID RODIGAN, PRINCE FATTY, HORSEMEN, TROJAN SOUND SYSTEM, AND GENERAL LEVY, ZANE LOWE, JAGUAR SKILLS, THE DIXON BROTHERS, RICKIE AND MELVIN, IAMPJAY, CHARLIE SLOTH, KENNY ALLSTAR, DJ ACE, DJ SEMTEX, DJ LIMELIGHT, DJ SIMZ, , STEEL BANGLEZ.` 
];

const Artist =()=>{

  return(
    <>
  
         <Navbartoplogo/>

   
    <div className="artistProfile">
         <Artiststylescards/>
    </div>
    
    <div className="artist-profiles-container">
      <h2>ARTIST PROFILES</h2>
      <div className="dropdown">
        <button className="dropdown-button">▼ DRAKE</button>
      </div>
      <div className="artist-names">
        {ArtistNames.map((group, index) => (
          <p key={index}>{group}</p>
        ))}
      </div>
    </div>

    <Prefooter/>
    <Footer/>
   
    </>
  )

}

export default Artist;