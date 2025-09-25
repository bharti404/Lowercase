import React, { useState } from 'react';

import banner from '../assests/banner.jpg';
import './About.css';
import gallery from '../assests/rocky.jpg';
import artist from '../assests/Travis.jpg';
import event from '../assests/event.jpg';
import collab from '../assests/Production.png';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import video1 from '../assests/video1.mp4';
import video2 from '../assests/video2.mp4';
import video3 from '../assests/video3.mp4';
import video4 from '../assests/video4.mp4';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Prefooter from "../footer/Prefooter";

// import { GrSend } from "react-icons/gr";





const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [artist, gallery, event, collab];
    const videos = [video1, video2, video3, video4];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <Navbar />
            <div className="about_container">

                {/* Box1 banner */}
                <div className="banner">
                    <img src={banner} alt="banner" />
                </div>


                {/* Box2 About */}

                <div className="about_content">
                    <div className="left_des_heading">
                        ABOUT US
                    </div>


                    <div className="left_des_text">
                        Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry. Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry. Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry...
                    </div>

                </div>




                {/* Box3 Collage */}


                <div className="collage">
                    <div className="box_about">
                        <img src={artist} alt="artist" />
                        <div className="overlay">ARTIST</div>
                    </div>
                    <div className="box_about">
                        <img src={collab} alt="collab" />
                        <div className="overlay">COLLABORATIONS</div>
                    </div>
                    <div className="box_about">
                        <img src={event} alt="event" />
                        <div className="overlay">EVENTS</div>
                    </div>
                    <div className="box_about">
                        <img src={gallery} alt="gallery" />
                        <div className="overlay">PHOTOS</div>
                    </div>
                </div>



                {/* box4 slider */}



                <div className="slider_about">

                    <div className="slider_about_title">RECENT COLLABORATIONS</div>

                    <div className="carousel">
                        <button onClick={prevImage} className="prev_button"><GrPrevious /></button>
                        <div className="video-container">
                            <video
                                src={videos[currentIndex]}
                                className="carousel_video"
                                muted
                                loop
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <img
                                src={images[currentIndex]}
                                alt="carousel"
                                className="carousel_image"
                                onMouseEnter={() => document.querySelector(`video`).play()}
                                onMouseLeave={() => document.querySelector(`video`).pause()}
                            />
                        </div>
                        <button onClick={nextImage} className="next_button"><GrNext /></button>
                    </div>
                </div>

                {/* <div className="reach_out">
                    <div className="reach_out_title">Reach Out to US!!!</div>
                    <div className="reach_out_name">Name:</div>
                    <div className="reach_out_mail">Mail:</div>
                    <div className="reach_out_contact">Our Contact: xyz@example.com</div>
                    <div className="reach_out_button"><GrSend /></div>
                </div> */}

             
            </div>
            <Prefooter/>
            <Footer />
        </div>


    )
}

export default About;