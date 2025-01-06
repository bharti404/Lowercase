import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Albumupload.css";
import { FallingLines, InfinitySpin } from "react-loader-spinner";

const AlbumUpload = () => {
  const [title, setTitle] = useState("");
  const [folderPath, setFolderPath] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [dropboxImages, setDropboxImages] = useState([]);
  const [loading, setLoading] = useState(false);

  var assets = true;

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleFetchDropbox = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!folderPath) {
      alert("Please enter a folder path.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `${baseUrl}/api/drropbox/fetch-files?path=/${folderPath}`
      );
      const images = response.data.AllImages;

      setDropboxImages(images);
      alert("Dropbox album fetched successfully.");
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Dropbox files:", error);
      alert("Error fetching Dropbox files. Please try again.");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !club || !date || !coverPhoto) {
      alert("Please fill in all required fields.");
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

    // Append dropboxImages as a JSON string
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
    } catch (error) {
      console.error("Error uploading album:", error);
      alert("Error uploading album. Please try again.");
    }
  };

  useEffect(() => {
    if (dropboxImages.length > 0) {
      assets = false;
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="album-upload-container">
      <div className="album-upload">
        <h2>Upload Album</h2>

        <div className="dropbox-fetch">
          <form onSubmit={handleFetchDropbox}>
            <input
              type="text"
              placeholder="Folder Name"
              value={folderPath}
              onChange={(e) => setFolderPath(e.target.value)}
              required
            />

            {loading ? (
              <span>
                <FallingLines
                  color="#4fa94d"
                  width="100"
                  visible={true}
                  ariaLabel="falling-circles-loading"
                />
              </span>
            ) : (
              <button type="submit" className="fetch-button mrgnbtm-2">
                <span>Fetch Dropbox Album</span>
              </button>
            )}
          </form>
        </div>

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
            <span>Upload Album</span>
          </button>
        </form>
      </div>

      <div className="dropboxpictures_container">
        {assets ? (
          <>
            <p className="selecteddropbox_head">
              Plese choose Dropbox Folder to fetch Images
            </p>

            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          </>
        ) : (
          <>
            <p className="selecteddropbox_head">
              Selected Dropbox Album Images
            </p>
            <div className="dropboxpictures_container_items">
              {dropboxImages.map((urlpic) => (
                <div className="dropboxpictures_container_item" key={urlpic}>
                  <img
                    src={urlpic}
                    alt=""
                    className="dropboxpictures_container_item_pic"
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
