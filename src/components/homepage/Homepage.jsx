import React from 'react'
import './Homepage.css'
import homevideo from '../assests/home-video.mp4'



const Homepage = () => {




    return (
        <div>
            <div className="homepage-container">
                <video className="background-video" src={homevideo} autoPlay loop muted></video>
                <div className="navbar">
                    <div className="navbar-logo">
                        <div className='hi' >

                            LOWER CASE EVENTS
                        </div>
                    </div>
                    <div className="navbar-bar">

                        <p className='navbar-items'>ABOUT</p>
                        <p className='navbar-items'>ARTIST</p>
                        <p className='navbar-items'>COLLABORATIONS</p>
                        <p className='navbar-items'>EVENTS</p>
                        <p className='navbar-items'>GALLERY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
