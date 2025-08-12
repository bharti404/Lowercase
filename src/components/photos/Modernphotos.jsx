import React, { useEffect, useState } from "react";
import "./Modernphotos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Modernphotos = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/album/getall`
        );
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

  const limitedAlbums = albums.slice(0, 6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="modern_photo_parent_section">
      <div className="moodern_photos_text_sect">
        <p className="moder_photos_heading"> Event Albums</p>

        <Link to='/albums' className="moder_photos_btn">VIEW ALL ALBUMS </Link>
      </div>
      <hr className="horizontal_line"/>

      {/* <div className="moden_photos_section">
        <div className="moden_photos_section_container">
          {limitedAlbums.map((album) => (
            <div className="album_container">
              <div className="album_name_homepage_text">

                <p className="album_name_homepage_text_title">
                  {album.title.toUpperCase()}
                </p>
            
                <p className="album_name_homepage_text_venue">

                  {album.venue}
                  
                </p>
                
                <p className="album_name_homepage_text_venue">

                {new Date(album.date).toLocaleDateString()}
                </p>

              </div>
      
            <img
              key={album._id} // Add a key for list rendering
              src={album.coverPhoto || "fallback-image-url.jpg"} // Add fallback for missing image
              alt="Album Cover"

              />
              </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Modernphotos;
