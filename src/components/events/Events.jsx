import React from 'react'
import './Events.css'
import travis from '../assests/Travis.jpg';
import rocky from '../assests/rocky.jpg';
import paris from '../assests/eiffel_tour.jpg';
import london from '../assests/london.jpg';
import newyork from '../assests/new_york.jpg';
import italy from '../assests/italy.jpeg';
import vegas from '../assests/vegas.jpg';
import chicago from '../assests/chicago.jpg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';






const Events = () => {
    return (
        <div>
            <div className="event-container">
                <Navbar />

                <div className="event-heading">
                    EVENTS
                </div>
                <div className="belownavbar">
        <video
          className="background-video"
          src={
            "https://res.cloudinary.com/doph28x3i/video/upload/v1729323634/Lowercase%20Events/jwm2qahfxoikoudl7kkc.mp4"
          }
          autoPlay
          loop
          muted
        ></video>
      </div>
                <div className="artist-event">
                    <div className="events-card"><img src={travis} alt="travis" /></div>
                    <div className="events-card"><img src={rocky} alt="rocky" /></div>
                    <div className="events-card"><img src={paris} alt="travis" /></div>
                    <div className="events-card"><img src={london} alt="rocky" /></div>
                    <div className="events-card"><img src={newyork} alt="travis" /></div>
                    <div className="events-card"><img src={italy} alt="rocky" /></div>
                    <div className="events-card"><img src={vegas} alt="travis" /></div>
                    <div className="events-card"><img src={chicago} alt="rocky" /></div>
                    <div className="events-card"><img src={travis} alt="travis" /></div>
                    <div className="events-card"><img src={rocky} alt="rocky" /></div>
                    <div className="events-card"><img src={paris} alt="travis" /></div>
                    <div className="events-card"><img src={london} alt="rocky" /></div>
                    <div className="events-card"><img src={newyork} alt="travis" /></div>
                    <div className="events-card"><img src={italy} alt="rocky" /></div>
                    <div className="events-card"><img src={vegas} alt="travis" /></div>
                    <div className="events-card"><img src={chicago} alt="rocky" /></div>
                    <div className="events-card"><img src={travis} alt="travis" /></div>
                    <div className="events-card"><img src={rocky} alt="rocky" /></div>
                    <div className="events-card"><img src={paris} alt="travis" /></div>
                    <div className="events-card"><img src={london} alt="rocky" /></div>
                    <div className="events-card"><img src={newyork} alt="travis" /></div>
                    <div className="events-card"><img src={italy} alt="rocky" /></div>
                    <div className="events-card"><img src={vegas} alt="travis" /></div>
                    <div className="events-card"><img src={chicago} alt="rocky" /></div>
                </div>
                <div className="events-year">
                    <div className="year-heading">
                        2024
                    </div>
                    <div className="year-events">
                        <div className="events-card"><img src={paris} alt="travis" /></div>
                        <div className="events-card"><img src={london} alt="rocky" /></div>

                    </div>
                </div>
                <div className="events-year">
                    <div className="year-heading">
                        2023
                    </div>
                    <div className="year-events">
                        <div className="events-card"><img src={italy} alt="rocky" /></div>
                        <div className="events-card"><img src={vegas} alt="travis" /></div>
                        <div className="events-card"><img src={chicago} alt="rocky" /></div>
                        <div className="events-card"><img src={newyork} alt="travis" /></div>
                    </div>
                </div>
                <div className="events-year">
                    <div className="year-heading">
                        2022
                    </div>
                    <div className="year-events">
                        <div className="events-card"><img src={paris} alt="travis" /></div>
                        <div className="events-card"><img src={london} alt="rocky" /></div>

                    </div>
                </div>
                <div className="events-year">
                    <div className="year-heading">
                        2021
                    </div>
                    <div className="year-events">
                        <div className="events-card"><img src={paris} alt="travis" /></div>
                        <div className="events-card"><img src={london} alt="rocky" /></div>
                        <div className="events-card"><img src={newyork} alt="travis" /></div>
                        <div className="events-card"><img src={newyork} alt="travis" /></div>
                    </div>
                </div>
            <Footer />
            </div>

        </div>

    )
}

export default Events