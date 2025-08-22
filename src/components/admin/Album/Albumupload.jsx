import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Albumupload.css";
import { InfinitySpin } from "react-loader-spinner";

const AlbumUpload = () => {
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [dropboxImages, setDropboxImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleCoverPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverPhoto(e.target.files[0]);
    }
  };


  const openDropboxChooser = () => {
    const options = {
      success: function (files) {
       
        const folder = files[0];
        console.log("Selected folder:", folder);
        
        // Store the folder info in state
        setSelectedFolder(folder);
        
        // Automatically fetch images from this folder
        handleFetchDropboxFolder(folder);
      },
      cancel: function () {
        console.log("Chooser closed");
      },
      linkType: "preview",
      multiselect: false,
      folderselect: true, // Enable folder selection
    };

    window.Dropbox.choose(options);
  };

  // Function to fetch images from the selected folder
 const handleFetchDropboxFolder = async (folderPath) => {
    if (!folderPath) {
      alert("No folder path available.");
      return;
    }

    setLoading(true);
    try {
      // Use your existing endpoint with the folder path
      const response = await axios.get(
        `${baseUrl}/api/drropbox/fetch-files?path=/${folderPath}`
      );
      
      // Adjust this based on your actual API response structure
      const images = response.data.AllImages || response.data.images || [];
      
      setDropboxImages(images);
      setAssets(false);
      alert("Dropbox folder images fetched successfully!");
    } catch (error) {
      console.error("Error fetching Dropbox folder:", error);
      alert("Error fetching Dropbox folder. Check console.");
    }
    setLoading(false);
  }



  const handleFolderUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });
      formData.append("albumTitle", title || "untitled_album");

      // Your backend should handle uploading to Dropbox with its SDK
      const res = await axios.post(
        `${baseUrl}/api/dropbox/folder-upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setDropboxImages(res.data.links); // backend should return uploaded Dropbox links
      setAssets(false);
      alert("Folder uploaded successfully!");
    } catch (error) {
      console.error("Error uploading folder:", error);
      alert("Error uploading folder. Check console.");
    }
    setLoading(false);
  };

  // 🔹 Submit album metadata
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !club || !date || !coverPhoto) {
      alert("Please fill in all required fields.");
      return;
    }

    if (dropboxImages.length === 0) {
      alert("Please select or upload images first.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverPhoto", coverPhoto);
    formData.append("club", club);
    formData.append("eventName", eventName);
    formData.append("tags", tags);
    formData.append("date", date);
    formData.append("venue", venue);
    formData.append("dropboxImages", JSON.stringify(dropboxImages));

    try {
      const response = await axios.post(
        `${baseUrl}/api/album/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Album uploaded successfully.");
      console.log(response.data);

      // Reset form
      setTitle("");
      setCoverPhoto(null);
      setClub("");
      setEventName("");
      setTags("");
      setVenue("");
      setDate("");
      setDropboxImages([]);
      setAssets(true);
    } catch (error) {
      console.error("Error uploading album:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert("Error uploading album. Please try again.");
    }
  };

  useEffect(() => {
    if (dropboxImages.length > 0) {
      setAssets(false);
    }
  }, [dropboxImages]);

  return (
    <div className="album-upload-container">
      <div className="album-upload">
        <h2>Upload Album</h2>

        <button type="button" onClick={openDropboxChooser}>
          Select Dropbox Folder
        </button>

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
            <label>Cover Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              required
            />
          </div>

          <button type="submit" className="fetch-button">
            Upload Album
          </button>
        </form>
      </div>

      {/* 🔹 Preview */}
      <div className="dropboxpictures_container">
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
      </div>
    </div>
  );
};

export default AlbumUpload;
