import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Photobyalbum.css";
import Navbar from "../../navbar/Navbar";

const PhotobyAlbum = () => {
  const location = useLocation();
  const AlbumdTitle = location.state?.album?.title
  const albumPhotos = location.state?.album?.photos; // Access the album data

  const [coverAlbumIndex, setCoverAlbumIndex] = useState(0);

  useEffect(() => {
    if (albumPhotos && albumPhotos.length > 0) {
      const randomIndex = Math.floor(Math.random() * albumPhotos.length);
      setCoverAlbumIndex(randomIndex);
    }
  }, [albumPhotos]); // Runs only when albumPhotos changes

  if (!albumPhotos) {
    return <p>No album data available.</p>;
  }

  return (
    <>
      <div className="photobyalbum_headersect">
        <Navbar />
        <div className="album_show_headerpic">
          <img src={albumPhotos[coverAlbumIndex]?.url} alt="" />
        </div>

        <p className="photobyambum_head_text">Photos of : {AlbumdTitle}</p>
      </div>
      <div className="photobyalbum_section">
        {albumPhotos.map((photo, index) => (
          <div className="photobyalbum_pic_sect" key={index}>
            <img src={photo.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotobyAlbum;
