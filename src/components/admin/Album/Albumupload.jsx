// components/AlbumUpload.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './Albumupload.css';

const AlbumUpload = () => {
  const [title, setTitle] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [club, setClub] = useState('');
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [files, setFiles] = useState([]);

  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

  const onDrop = (acceptedFiles) => {
    const invalidFiles = [];
    const validFiles = acceptedFiles.filter((file) => {
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        invalidFiles.push(file.name);
        return false;
      }
      return true;
    });

    const folderFiles = validFiles.filter((file) => file.webkitRelativePath);
    setFiles(folderFiles);

    if (invalidFiles.length > 0) {
      alert(`The following files were skipped due to invalid extensions: ${invalidFiles.join(', ')}`);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !coverPhoto || !club || !date) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('coverPhoto', coverPhoto);
    formData.append('club', club);
    formData.append('eventName', eventName);
    formData.append('venue', venue);
    formData.append('date', date);
    formData.append('tags', tags);

    files.forEach((file) => {
      formData.append('photos', file);
    });

    try {
      const response = await axios.post(`http://localhost:9000/api/album/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Album uploaded successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading album:', error);
      alert('Error uploading album');
    }
  };

  return (
    <div className="album-upload">
      <h2>Upload Album</h2>
      <form onSubmit={handleSubmit}>
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

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
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

        <label>
          Cover Photo:
          <input type="file" accept="image/*" onChange={handleCoverPhotoChange} required />
        </label>

        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps({ directory: true, webkitdirectory: true })} />
          <p>Drag & drop a folder here with all album images, or click to select</p>
        </div>

        <button type="submit">Upload Album</button>
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
