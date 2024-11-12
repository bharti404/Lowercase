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
  const [coverAlbumIndex, setCoverAlbumIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/album/getall"
        );
        setData(response.data); 
        setLoading(false);

        // Set random cover album index based on the data length
        if (response.data.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.data.length);
          console.log("i ma the ndom genreated", randomIndex)
          setCoverAlbumIndex(randomIndex);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const groupedData = groupAlbumsByYear(data.data);
  const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="albumshow_navbr">
        <Navbar />
      </div>

      <div className="allbimshow_section">
        <div className="album_show_headerpic">
          <img src={data.data[coverAlbumIndex]?.coverPhoto} alt="" />
        </div>
        {sortedYears.map((year) => (
          <div key={year} className="year-section">
            <h2 className="albumshow_year_text">{year}</h2>
            <Curvedcard albums={groupedData[year]} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Albumshow;
