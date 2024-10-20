import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
                <div className="navbar-logo">
                    <div className='navbar-logo-border'>
                        LOWER CASE EVENTS
                    </div>
                </div>
                <div className="navbar-bar">
                    <Link  to='/about' className='navbar-items' >ABOUT</Link>
                    <Link  to='/artist' className='navbar-items'>ARTIST</Link>
                    <Link  to='/collab' className='navbar-items'>COLLABORATIONS</Link>
                    <Link  to='/events' className='navbar-items'>EVENTS</Link>
                    <Link  to='/gallery' className='navbar-items'>GALLERY</Link>

                 
                </div>
            </div>
  )
}

export default Navbar