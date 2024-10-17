import React, { useState } from 'react';
import './Homepage.css';
import homevideo from '../assests/home-video.mp4';

const Homepage = () => {
    const [activePage, setActivePage] = useState('home'); 

    const handleNavbarClick = (page) => {
        setActivePage(page); 
    };

    return (
        <div className="homepage-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <div className='navbar-logo-border'>
                        LOWER CASE EVENTS
                    </div>
                </div>
                <div className="navbar-bar">
                    <p className='navbar-items' onClick={() => handleNavbarClick('about')}>ABOUT</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('artist')}>ARTIST</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('collaborations')}>COLLABORATIONS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('events')}>EVENTS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('gallery')}>GALLERY</p>
                </div>
            </div>

            <div className="belownavbar">
                {activePage === 'home' && (
                    <video className="background-video" src={homevideo} autoPlay loop muted></video>
                )}

                {activePage === 'about' && <div className="content">About Us Content</div>}
                {activePage === 'artist' && <div className="content">Artist Information</div>}
                {activePage === 'collaborations' && <div className="content">Collaborations Info</div>}
                {activePage === 'events' && <div className="content">Upcoming Events</div>}
                {activePage === 'gallery' && <div className="content">Gallery Images</div>}
            </div>
        </div>
    );
};

export default Homepage;
