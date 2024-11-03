import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import LowercaseeventsLogo from '../assests/LowercaseLogo.png'

const Navbar = () => {
  return (
    <div className="navbar">
                <div className="navbar-logo">
                <Link to='/'> 
                    <img src={LowercaseeventsLogo} alt="" />
                  </Link>
                </div>
                <div className="navbar-bar">
                    <Link  to='/about' className='navbar-items' >ABOUT</Link>
                    <Link  to='/events' className='navbar-items'>EVENTS</Link>
                    <Link  to='/photos' className='navbar-items'>PHOTOS</Link>
                    <Link  to='/artist' className='navbar-items'>ARTIST</Link>
                    <Link  to='/collab' className='navbar-items'>BRANDS</Link>
                    <Link  to='/' className='navbar-items'>CONTACT US</Link>


                 
                </div>
            </div>
  )
}

export default Navbar