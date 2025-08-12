import React, { useState, useEffect } from "react";

import "./Photobyalbum.css";
import { FaShare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Socialshare from "../../Tools/Social/Socialshare";
import { CiHeart } from "react-icons/ci";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoHeart } from "react-icons/io5";
import axios from "axios";
import { useParams } from 'react-router-dom';


const PhotobyAlbum = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState(null);
  const [albumPhotos , setAlbumPhotos] = useState([])
  const [albumdTitle, setAlbumdTitle] = useState('')
  const [lovedPhotos, setLovedPhotos] = useState({}); // Track loved status for each photo

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShareUrl(null); // Reset shareUrl when modal closes
  };

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  // const AlbumdTitle = location.state?.album?.title;
  // const albumPhotos = location.state?.album?.photos;



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    if (shareUrl) {
      console.log("Updated Share URL:", shareUrl); // Log updated shareUrl after it changes
    }
  }, [shareUrl]);

  const HandleCopyLink = (photoUrl) => {
    navigator.clipboard
      .writeText(photoUrl)
      .then(() => {
        console.log("Photo URL copied to clipboard: ", photoUrl);
        alert("Link copied to clipboard!");
        setShareUrl(photoUrl); // Set the URL for sharing
        handleOpen(); // Open Modal
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };

  const handleDownload = (photoUrl, customFileName, PhotoId) => {
    // Log the original URL for debugging
    console.log("The photo URL:", photoUrl);
    
    // Modify the URL to force the download if it's a Dropbox URL
    const downloadUrl = photoUrl.includes("dropbox.com")
      ? photoUrl.replace("&raw=1", "&dl=1") // Replace ?raw=1 with ?dl=1 for Dropbox download
      : photoUrl;
  
    console.log("The modified download URL:", downloadUrl);
  
    // Ensure the file name is provided, otherwise default to "download.jpg"
    const fileName = customFileName ? `${customFileName}.png` : "download.png";
    
    // Trigger the download process
    triggerDownload(downloadUrl, fileName, PhotoId);
  };
  
  
  
  const triggerDownload = (url, fileName, photoId) => {

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", fileName); // Set the file name for download
    a.style.display = "none"; // Hide the link element
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Remove the link element after download is triggered
  
    // Increase download count after the download is triggered
    IncreaseDownload(photoId);
  };
  
  
  

  const toggleLove = (photoUrl, index, photoId) => {

    IncreaseLike(photoId);
    setLovedPhotos((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the love status for the specific photo
    }));
    HandleCopyLink(photoUrl); // Pass the photo URL to function
  };

  const IncreaseLike = async (photoId) => {
    const response = await axios.patch(`http://localhost:9000/api/album/albums/${id}/photos/${photoId}/increase-likes`, {});
    console.log("IncreaseLikeIncreaseLike IncreaseLike:", response.data);
  };


  const IncreaseDownload = async (photoId) => {
    const response = await axios.patch(`http://localhost:9000/api/album/albums/${id}/photos/${photoId}/increase-downloads`, {});
    console.log("IncreaseLikeIncreaseLike IncreaseLike:", response.data);
  };


  const FetchAlbumById = async () => {
    const response = await axios.get(`${BaseUrl}/api/album/get/${id}`);
    console.log("The response from backend:", response.data.data);
    setAlbumdTitle(response.data?.data.club)
    setAlbumPhotos( response.data?.data.photos)

  };

  // Ensure useEffect is always called
  useEffect(() => {
    FetchAlbumById();
    // eslint-disable-next-line
  }, []); 

  if (!albumPhotos) {
    return <p>No album data available.</p>;
  }

  return (
    <>
      <div className="photobyalbum_headersect">
        <Navbartoplogo />
      </div>

      <p className="photobyambum_head_text">ALBUM : {albumdTitle}</p>
      <div className="photobyalbum_section">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {albumPhotos.map((photo, index) => (
              <div className="photobyalbum_pic_sect" key={index}>
                <img src={photo.url} alt={`photo-${index}`} />

                <div className="photobyalbum_pic_content">
                  <div className="photobyalbum_pic_content_item">
                    {lovedPhotos[index] ? (
                      <>
                        <p className="photobyalbum_icon_txt">Dislike</p>
                      
                      <p className="photoallbum_like_count">{photo.likes}</p>
                        <IoHeart
                          className="photobyalbum_icon_heart"
                          onClick={() => toggleLove(photo.url, index)} // Toggle love for this specific photo
                        />
                      </>
                    ) : (
                      <>
                        <p className="photobyalbum_icon_txt">Like</p>
                        {/* <p className="photoallbum_like_count">{photo.likes}</p> */}
                        <CiHeart
                          className="photobyalbum_icon"
                          onClick={() => 
                            toggleLove(photo.url, index, photo._id)
                          } // Toggle love for this specific photo
                        />
                      </>
                    )}
                  </div>

                  <div className="photobyalbum_pic_content_item">
                    <p className="photobyalbum_icon_txt">Share</p>
                    <FaShare
                      className="photobyalbum_icon"
                      onClick={() => {
                        HandleCopyLink(photo.url); // Pass the photo URL to function
                      }}
                    />
                  </div>

                  <div className="photobyalbum_pic_content_item">
                    <p className="photobyalbum_icon_txt">Download</p>
                    <p className="photoallbum_like_count">{photo.downloads}</p>
    

                    <IoMdDownload
                      className="photobyalbum_icon"
                      onClick={() => handleDownload(photo.url, albumdTitle, photo._id)} // Trigger download when clicked
                    />
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Modal for social sharing */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {shareUrl ? (
            <Socialshare url={shareUrl} /> // Pass shareUrl to Socialshare component
          ) : (
            <p>Loading...</p>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default PhotobyAlbum;
