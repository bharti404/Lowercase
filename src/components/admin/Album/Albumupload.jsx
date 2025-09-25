import React, { useState } from "react";
import axios from "axios";
import "./Albumupload.css";


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

  
  const [loading, setLoading] = useState(false);
  
  const [folderName, setFolderName] = useState("");
  const navigate = useNavigate();

  const token = cookies.get("token");
  const role = cookies.get("role");

  const baseUrl = process.env.REACT_APP_BASE_URL;
const urlRegex = /^(https?:\/\/)[\w.-]+([.][\w.-]+)+[/#?]?.*$/;

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
     if (!urlRegex.test(coverPhoto)) {
    alert("Please enter a valid URL for the cover photo.");
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



  return (
    <div className="album-upload-container">
      <div className="album-upload">
        <h2 className="album-heading">Upload New Album</h2>

      
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
            <label>Cover Photo(URL)</label>
            <input
              type="url"
              value={coverPhoto}
              onChange={(e) => setCoverPhoto(e.target.value)}
               pattern="https?://.+"
               placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="form-group">
            <label>Folder Name(GCS)</label>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>

        
          <button
            type="submit"
            className="fetch-button"
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px", 
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

      
    </div>
  );
};

export default AlbumUpload;
