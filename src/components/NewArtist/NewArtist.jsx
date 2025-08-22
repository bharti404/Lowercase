import React from "react";
import "./NewArtist.css"
import Artiststylescards from "../homepage/Artiststylescards";
import Navbartoplogo from "../navbar/Navbartoplogo";
import Footer from "../footer/Footer";
import Prefooter from "../footer/Prefooter";
import NewArtiststylescards from "../homepage/NewArtiststylescards";

const ArtistNames = [
  `DRAKE, A BOOGIE WIT THA HOODIE, GUNNA, KELHANI, PARTYNEXTDOOR, 6LACK, BRYSON TILLER, LIL TJAY,DON TOLIVER, AND TORY LANEZ, D BLOCK EUROPE, M HUNCHO, NAFE SMALLZ, `,

  `WEWANTWRAITHS, SKEPTA, RUSS MILLIONS, TION WAYNE, AITCH, AJ TRACEY, KREPT & KONAN, DIGDAT, ABRA CADABRA, ARRDEE, NSG, MOSTACK, STEFFLON DON, ZIEZIE, B YOUNG, NOT3S, YOUNG T & BUGSEY, WSTRN, MISS DYNAMITE, MAJESTIC, S CLUB, DAPPY, YUNGEN, DEVILMAN, BIG NARSTIE, WILEY, LETHAL BIZZLE, JAY1, CEE CHYNA, GLIZZ, M DOT R, NINO UPTOWN, SWITCH OTR, RAMZ, SWARMZ, AND KOOMZ,`,
  ` SUB FOCUS, PENDULUM, SIGMA, DJ FRESH, WILKINSON, S.P.Y, BENNY L, ED SOLO, DEEKLINEJORDAN NORTH, KINGS OF THE ROLLERS, HEDEX, MACKY GEE, SERUM, BOU, TURNO, SOTA, CAMO & KROOKED,
 CULTURE SHOCK, BASSIC, GEORGIE RIOT, DOM WHITING EMILY MAKIS, CHARLOTTE PLANK, MR TRAUMATIK, FERRY CORSTEN, BASSHUNTER, DARKZY, WINDOW KID, MY NU LENG, SAMMY VIRJI, SKREAM, REDLIGHT, JACK FOWLER, NATHAN DAWE, SHIFT K3Y, DEEPER PURPOSE, CHRIS LORENZO, ANNIE MAC, SECONDCITY, DENIS SULTA, PATRICK TOPPING, HOT SINCE 82, EWAN MCVICAR, SOLARDO, BEN HEMSLEY, GORGON CITY, PAWSA, SWITCH DISCO, AND ALAN FITZPATRICK, ARTFUL DODGER, DJ LUCK AND MC NEAT DJ PIED PIPER, OXIDE & NEUTRINO, MATT JAM LAMONT MAJESTIC SWEET FEMALE ATTITUDE, MC DT, MONSTA BOY, STICKY, DJ CARTIER, SMOKEY BUBBLIN' B, AND HEARTLESS CREW DJ PIONEER DAVID RODIGAN, PRINCE FATTY, HORSEMEN, TROJAN SOUND SYSTEM, AND GENERAL LEVY, ZANE LOWE, JAGUAR SKILLS, THE DIXON BROTHERS, RICKIE AND MELVIN, IAMPJAY, CHARLIE SLOTH, KENNY ALLSTAR, DJ ACE, DJ SEMTEX, DJ LIMELIGHT, DJ SIMZ, , STEEL BANGLEZ.`,
];
const artistName =["jiya" , "dfikj" ,"dfghj" , "monkia" , "bharti" , "arti"]
const NewArtist = () => {
  return (
    <>


      <Navbartoplogo />

      <div className="marquee-container">
        <h1 className="marquee-heading">LowerCase Artist</h1>
      
    </div>

      <div className="artistProfile"> 
        <NewArtiststylescards/>
        <NewArtiststylescards/>
        <NewArtiststylescards/>
        <NewArtiststylescards/>
         <NewArtiststylescards/>
          <NewArtiststylescards/>
      </div>

      

      <Prefooter />
      <Footer />
    </>
  );
};

export default NewArtist;
