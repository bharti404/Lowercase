import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "./Albumupload.css";

const AlbumUpload = () => {
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [files, setFiles] = useState([]);

  const [venue, setVenue] = useState([]);
  const [date, setDate] = useState([]);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);


  const onDrop = (acceptedFiles) => {
    // Filter files that include directory path for folder uploads
    const folderFiles = acceptedFiles.filter((file) => file.webkitRelativePath);
    setFiles(folderFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    directory: true,
    webkitdirectory: true, // Allow folder uploads in supported browsers
    multiple: true,
  });

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverPhoto", coverPhoto);
    formData.append("club", club);
    formData.append("eventName", eventName);
    formData.append("tags", tags);
    formData.append("date", date);
    formData.append("venue", venue);

    // Append each photo in the folder to formData
    files.forEach((file) => {
      formData.append("photos", file);
    });

    try {
      const response = await axios.post(
        `${baseUrl}/api/album/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Album uploaded successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading album:", error);
      alert("Error uploading album");
    }
  };

  return (
    <div className="album-upload">
      <h2 className="abumupaod_head">Upload Album</h2>
      <form onSubmit={handleSubmit}>
        <div className="album_form_two_items">
          <label>
            Album Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Club Name:
            <input
              type="text"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="album_form_two_items">
          <label>
            Event Name (Optional):
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </label>

          <label>
            Venue:
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </label>
        </div>

        <div className="album_form_two_items">
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Tags (comma-separated):
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </div>

        <label>
          Cover Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverPhotoChange}
          />
        </label>

        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} directory="" webkitdirectory="" />
          <p>
            Drag & drop a folder here with all album images, or click to select
          </p>
        </div>

        <button type="submit" className="upload_albumbtn">Upload Album</button>
      </form>

      <h3>Selected Files:</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.webkitRelativePath || file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumUpload;
