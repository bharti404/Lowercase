import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import LowercaseeventsLogo from '../assests/LowercaseLogo.png'

const Navbar = () => {
  return (
    <div className="navbar">
                <div className="navbar-logo">
                    <img src={LowercaseeventsLogo} alt="" />
                  
                </div>
                <div className="navbar-bar">
                    <Link  to='/about' className='navbar-items' >ABOUT</Link>
                    <Link  to='/artist' className='navbar-items'>ARTIST</Link>
                    <Link  to='/collab' className='navbar-items'>COLLABORATIONS</Link>
                    <Link  to='/events' className='navbar-items'>EVENTS</Link>
                    <Link  to='/photos' className='navbar-items'>PHOTOS</Link>

                 
                </div>
            </div>
  )
}

export default Navbar