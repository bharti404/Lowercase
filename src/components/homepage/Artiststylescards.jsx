import React from 'react'
import './Artiststylescards.css'
import {Link} from 'react-router-dom';

const Artiststylescards = ({basePath}) => {
  return (
    <div className="artist_stylecard-container">
     
      <div className="card_artsist_stylsh">
        <Link to="/artist/details" className='no-underline-link'>
        <div className="content">
          <h2>A BOOGIE WITH A HOODIE</h2>
          <span>ARTISTS</span>
        </div>
        </Link>
      </div>
      <div className="card_artsist_stylsh">
        <Link to="/artist/details" className='no-underline-link'>
        <div className="content">
          <h2>LIL TJAY</h2>
          <span>ARTISTS</span>
        </div>
        </Link>
    
      </div>
      <div className="card_artsist_stylsh">
          <Link to="/artist/details" className='no-underline-link'>
        <div className="content">
          <h2>DRAKE</h2>
          <span>ARTISTS</span>
        </div>
        </Link>

       
      </div>
      <div className="card_artsist_stylsh">
        <Link to="/artist/details" className='no-underline-link'>
        <div className="content">
          <h2>GUNNA</h2>
          <span>ARTISTS</span>
        </div>
        </Link>
       
      </div>
      <div className="card_artsist_stylsh">
       <Link to="/artist/details" className='no-underline-link'>
        <div className="content">
          <h2>BRYSON TILLER</h2>
          <span>ARTISTS</span>
        </div>
        </Link>
      
      </div>
   
  </div>
  )
}

export default Artiststylescards