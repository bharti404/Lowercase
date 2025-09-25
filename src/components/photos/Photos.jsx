import React from 'react'
import video2 from '../assests/video2.mp4'
import travis from '../assests/Travis.jpg';
import rocky from '../assests/rocky.jpg';

import paris from '../assests/eiffel_tour.jpg';
import london from '../assests/london.jpg';
import newyork from '../assests/new_york.jpg';
import italy from '../assests/italy.jpeg';
import vegas from '../assests/vegas.jpg';
import chicago from '../assests/chicago.jpg';
import './Photos.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Prefooter from "../footer/Prefooter";


const Photos = () => {
    return (
        <div>
            <Navbar />
            <div className="gallery-heading">
                PHOTOS
            </div>
            <div className="gallery-banner">
                <video src={video2} loop autoPlay muted />
            </div>
            <div className="gallery-images">
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={newyork} alt="travis" /></div>
                <div className="gallery-card"><img src={italy} alt="rocky" /></div>
                <div className="gallery-card"><img src={vegas} alt="travis" /></div>
                <div className="gallery-card"><img src={chicago} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={newyork} alt="travis" /></div>
                <div className="gallery-card"><img src={italy} alt="rocky" /></div>
                <div className="gallery-card"><img src={vegas} alt="travis" /></div>
                <div className="gallery-card"><img src={chicago} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={newyork} alt="travis" /></div>
                <div className="gallery-card"><img src={italy} alt="rocky" /></div>
                <div className="gallery-card"><img src={vegas} alt="travis" /></div>
                <div className="gallery-card"><img src={chicago} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={newyork} alt="travis" /></div>
                <div className="gallery-card"><img src={italy} alt="rocky" /></div>
                <div className="gallery-card"><img src={vegas} alt="travis" /></div>
                <div className="gallery-card"><img src={chicago} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>
                <div className="gallery-card"><img src={paris} alt="travis" /></div>
                <div className="gallery-card"><img src={london} alt="rocky" /></div>
                <div className="gallery-card"><img src={travis} alt="travis" /></div>
                <div className="gallery-card"><img src={rocky} alt="rocky" /></div>


            </div>



            <div className="gallery-banner-end">
                <video src={video2} loop autoPlay muted />
            </div>
            <Prefooter/>
            <Footer />
        </div>
    )
}

export default Photos