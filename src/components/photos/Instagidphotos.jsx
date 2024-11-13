import React, { useEffect, useState } from "react";
import './Instagidphotos.css'
import axios from "axios";

const Instagidphotos = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/album/getall`);
          console.log(response.data); // Verify the structure of the data
          setAlbums(response.data.data); // Adjust this to match the data structure returned by the API
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [baseUrl]);
  
    const limitedAlbums = albums.slice(0, 5); 
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="instagrid_photo_section">  <div className="photo-grid">
    {limitedAlbums.map((photo, index) => (
      <div className="photo-item" key={index}>
        <img src={photo.coverPhoto} alt={`photo-${index}`} />
        <div className="overlay_photo">{photo.title}</div>
      </div>
    ))}
  </div></div>
  )
}

export default Instagidphotos