import React, { useState } from "react";
import axios from "axios";
import "./Albumupload.css";

// import { RxUpload } from "react-icons/rx";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const AlbumUpload = () => {
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  // const [dropboxImages, setDropboxImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [assets, setAssets] = useState(true);
  // const [selectedFolder, setSelectedFolder] = useState(null);
  const [folderName, setFolderName] = useState("");
  const navigate = useNavigate();

  const token = cookies.get("token");
  const role = cookies.get("role");

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || (role === "admin" && role === "superadmin")) {
      alert("For Uploading Please Login ");
      navigate("/admin/login");
      return;
    }

    if (!title || !club || !date || !coverPhoto) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      title,
      coverPhoto,
      club,
      eventName,
      tags,
      date,
      venue,
      folderName,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/album/create-from-folder`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Album uploaded successfully.");
      console.log(response.data);

      // Reset form
      setTitle("");
      setCoverPhoto("");
      setClub("");
      setEventName("");
      setTags("");
      setVenue("");
      setDate("");
      setFolderName("");
    } catch (error) {
      console.error("Error uploading album:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert("Error uploading album. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if(!token ||(role === "admin" && role ==="superadmin")){
  //     alert("For Uploading Please Login ")
  //     navigate("/admin/login")
  //   }

  //   if (!title || !club || !date || !coverPhoto) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("coverPhoto", coverPhoto);
  //   formData.append("club", club);
  //   formData.append("eventName", eventName);
  //   formData.append("tags", tags);
  //   formData.append("date", date);
  //   formData.append("venue", venue);
  //   formData.append("folderName", folderName);

  //   try {
  //     const response = await axios.post(
  //       `https://lowercase-backend.onrender.com/api/album/create-from-folder`,
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //          Authorization: `Bearer ${token}`,
  //       }
  //     );

  //     alert("Album uploaded successfully.");
  //     console.log(response.data);

  //     // Reset form
  //     setTitle("");
  //     setCoverPhoto("");
  //     setClub("");
  //     setEventName("");
  //     setTags("");
  //     setVenue("");
  //     setDate("");
  //     setFolderName("");
  //     setAssets(true);
  //   } catch (error) {
  //     console.error("Error uploading album:", error);
  //     if (error.response) {
  //       console.error("Server response:", error.response.data);
  //     }
  //     alert("Error uploading album. Please try again.");
  //   }
  // };

  // useEffect(() => {
  //   if (dropboxImages.length > 0) {
  //     setAssets(false);
  //   }
  // }, [dropboxImages]);

  return (
    <div className="album-upload-container">
      <div className="album-upload">
        <h2 className="album-heading">Upload New Album</h2>

        {/* <button type="button" onClick={openDropboxChooser} className="dropbox-button">
           <span ><RxUpload className="dropbox-icon" /></span>Select Dropbox Folder
        </button> */}

        <form onSubmit={handleSubmit} className="album-form">
          <div className="form-group">
            <label>Album Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Club Name:</label>
            <input
              type="text"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Event Name (Optional):</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Venue:</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="custom-date-input"
            />
          </div>

          <div className="form-group">
            <label>Tags (comma-separated):</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Cover Photo</label>
            <input
              type="text"
              value={coverPhoto}
              onChange={(e) => setCoverPhoto(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Folder Name</label>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>

          {/* <div className="form-group cover-photo">
            <label>Cover Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              required
            />
          </div> */}

          <button
            type="submit"
            className="fetch-button"
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px", // space between spinner and text
            }}
          >
            {loading ? (
              <>
                <CircularProgress  sx={{color:"white"}} />
                <span style={{ marginLeft: "8px" }}>Submitting...</span>
              </>
            ) : (
              "Upload Album"
            )}
          </button>
        </form>
      </div>

      {/* 🔹 Preview */}

      {/* 🔹 Show/Hide the whole box */}
      {/* {loading || !assets ? (
        <div className="dropboxpictures_container">
          {loading ? (
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          ) : (
            <>
              <p className="selecteddropbox_head">
                Selected Dropbox Images ({dropboxImages.length})
              </p>
              <div className="dropboxpictures_container_items">
                {dropboxImages.map((url, index) => (
                  <div className="dropboxpictures_container_item" key={index}>
                    <img
                      src={url}
                      alt={`Selected ${index + 1}`}
                      className="dropboxpictures_container_item_pic"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=Image+Error";
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : null} */}

      {/* <div  className={`dropboxpictures_container ${assets ? "visable" : ""}`}>
        {assets ? (
          <>
            <p className="selecteddropbox_head">
              Please select images from Dropbox
            </p>
            {loading && (
              <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
              />
            )}
          </>
        ) : (
          <>
            <p className="selecteddropbox_head">
              Selected Dropbox Images ({dropboxImages.length})
            </p>
            <div className="dropboxpictures_container_items">
              {dropboxImages.map((url, index) => (
                <div className="dropboxpictures_container_item" key={index}>
                  <img
                    src={url}
                    alt={`Selected ${index + 1}`}
                    className="dropboxpictures_container_item_pic"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=Image+Error";
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};

export default AlbumUpload;
