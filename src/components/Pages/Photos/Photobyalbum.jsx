import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const PhotobyAlbum = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState(null);
  const [lovedPhotos, setLovedPhotos] = useState({}); // Track loved status for each photo

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShareUrl(null); // Reset shareUrl when modal closes
  };

  const AlbumdTitle = location.state?.album?.title;
  const albumPhotos = location.state?.album?.photos;

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

  if (!albumPhotos) {
    return <p>No album data available.</p>;
  }

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

  const handleDownload = (photoUrl, customFileName) => {
    const downloadUrl = `${photoUrl.replace(
      "/upload",
      "/upload/fl_attachment"
    )}`;

    const fileName = customFileName ? `${customFileName}.jpg` : "download.jpg";
    triggerDownload(downloadUrl, fileName); // Call triggerDownload here
  };

  const triggerDownload = (url, fileName) => {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", fileName); // Set file name for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleLove = (photoUrl, index) => {
    setLovedPhotos((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the love status for the specific photo
    }));
    HandleCopyLink(photoUrl); // Pass the photo URL to function
  };

  return (
    <>
      <div className="photobyalbum_headersect">
        <Navbartoplogo />
      </div>

      <p className="photobyambum_head_text">ALBUM : {AlbumdTitle}</p>
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
                        <IoHeart
                          className="photobyalbum_icon_heart"
                          onClick={() => toggleLove(photo.url, index)} // Toggle love for this specific photo
                        />
                      </>
                    ) : (
                      <>
                        <p className="photobyalbum_icon_txt">Like</p>
                        <CiHeart
                          className="photobyalbum_icon"
                          onClick={() => toggleLove(photo.url, index)} // Toggle love for this specific photo
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
                    <IoMdDownload
                      className="photobyalbum_icon"
                      onClick={() => handleDownload(photo.url, AlbumdTitle)} // Trigger download when clicked
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
