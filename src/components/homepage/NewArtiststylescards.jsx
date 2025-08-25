// import React from "react";

// function ArtistCard({
//   image = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
//   title = "DEAR SUNDAY",
//   subtitle = "LEARN MORE →",
//   onClick = () => alert("Learn more clicked"),
// }) {
//   return (
//     <div className="card" onClick={onClick}>
//       <img className="card__img" src={image} alt={title} />

//       <div className="card__vignette" aria-hidden />

//       <div className="card__text">
//         <div className="card__title">{title}</div>
//         {subtitle && <div className="card__subtitle">{subtitle}</div>}
//       </div>

//       <style>{`
//         .card {
//           position: relative;
//           width: 320px;
//           height:480px;
//           border-radius: 22px;
//           overflow: hidden;
//           box-shadow: 0 8px 24px rgba(0,0,0,.25);
//           transition: transform .25s ease, box-shadow .25s ease;
//           cursor: pointer;
//           margin: 16px;
//         }
//         .card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 16px 40px rgba(0,0,0,.35);
//         }

//         .card__img {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transform: scale(1.02);
//           transition: transform .35s ease;
//         }
//         .card:hover .card__img { transform: scale(1.07); }

//         .card__vignette {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(0,0,0,.65) 15%, transparent 55%);
//           z-index: 1;
//         }

//         .card__text {
//           position: absolute;
//           left: 18px;
//           bottom: 18px;
//           z-index: 2;
//           color: #f8f8f8;
//           letter-spacing: .5px;
//         }
//         .card__title {
//           font-weight: 800;
//           font-size: 22px;
//           line-height: 1;
//         }
//         .card__subtitle {
//           opacity: .9;
//           font-size: 13px;
//           margin-top: 6px;
//           font-weight: 600;
//           text-decoration: underline;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function NewArtiststylescards() {
//   return (
//     <div className="demo-wrap">
//       <div className="cards-container">
//         <ArtistCard />
//         <ArtistCard
//           image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//           title="DRAKE"
//           subtitle="DISCOVER →"
//         />
//         <ArtistCard
//           image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//           title="LIL TJAY"
//           subtitle="EXPLORE →"
//         />
//         <ArtistCard
//           image="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//           title="GUNNA"
//           subtitle="LISTEN →"
//         />
//       </div>

//       <style>{`
//         .demo-wrap {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #111;
//           padding: 24px;
//         }
        
//       .cards-container {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   flex-wrap: wrap;       
//   max-width: 1400px;     
// }
// .cards-container > .card {
//   flex: 1 1 calc(25% - 20px); 
//   max-width: 320px;           
// }

        
//         @media (max-width: 768px) {
//           .cards-container {
//             flex-direction: column;
//             align-items: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }




import React from 'react'
import './NewArtiststylescards.css'
import {Link} from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const NewArtiststylescards = ({data})=>{
    return(
    <Link className='image-box' to={`/artist/${data.id}`}>
    <img src ={data.image}alt="image"/>
    <div className='image-box-content'>
          <h1 className='artist-name'>{data.name}</h1>
    <button  className='image-box-btn'> Learn More <span> <FaLongArrowAltRight /></span></button>

    </div>

  

    </Link>
    )
}

export default NewArtiststylescards