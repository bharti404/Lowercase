import React, { useEffect, useState } from "react";
import axios from "axios";
import Curvedcard from "../../Cards/Curvedcard";
import Navbar from "../../navbar/Navbar";
import "./Albumshow.css";
import Footer from "../../footer/Footer";

const Albumshow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/album/getall`);
        const albumData = response.data.data || [];
        setData(albumData); 
        setLoading(false);
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();


  }, [baseUrl]);

  const groupAlbumsByYear = (albums) => {
    const albumsByYear = {};

    albums?.forEach((album) => {
      const year = new Date(album.date).getFullYear();
      if (!albumsByYear[year]) {
        albumsByYear[year] = [];
      }
      albumsByYear[year].push(album);
    });

    return albumsByYear;
  };

  const groupedData = groupAlbumsByYear(data);
  const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="albumshow_navbr">
        <Navbar />
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

      <div className="allbimshow_section">
      
        {sortedYears.map((year) => (
          <div key={year} className="year-section">
            <h2 className="albumshow_year_text">{year}</h2>
            <Curvedcard albums={groupedData[year]}   />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Albumshow;
