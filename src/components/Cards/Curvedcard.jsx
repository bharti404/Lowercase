import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import { TbEdit } from "react-icons/tb";
import axios from "axios";

import "./Curvedcard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

const Curvedcard = (props) => {
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const Albums = props.albums.data || props.albums;

  // modal + selected album
  const [open, setOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // form states
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [dropboxImages, setDropboxImages] = useState([]);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (localStorage.getItem("token")) setAdmin(true);
  }, []);

  // prefill form when an album is selected
  useEffect(() => {
    if (selectedAlbum) {
      setTitle(selectedAlbum.title || "");
      setClub(selectedAlbum.club || "");
      setEventName(selectedAlbum.eventName || "");
      setVenue(selectedAlbum.venue || "");
      setDate(selectedAlbum.date || "");
      setTags(selectedAlbum.tags || "");
      setDropboxImages(selectedAlbum.photos || []);
      setCoverPhoto(selectedAlbum.coverPhoto || null);
    }
  }, [selectedAlbum]);

  const SendToPhotobyAlbum = (album) => {
    navigate(`/photobyalbum/${album._id}`);
  };

  const handleEdit = (album) => {
    setSelectedAlbum(album);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("club", club);
    formData.append("eventName", eventName);
    formData.append("venue", venue);
    formData.append("date", date);
    formData.append("tags", tags);
    formData.append("dropboxImages", JSON.stringify(dropboxImages));
    if (coverPhoto && typeof coverPhoto !== "string") {
      formData.append("coverPhoto", coverPhoto);
    }

    try {
      const res = await axios.put(
        `${baseUrl}/api/album/update/${selectedAlbum._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("Album updated successfully");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error updating album");
    }
  };

  return (
    <div className="card_album_section">
      {Albums?.map((album) => (
        <Card key={album._id} className="curvedcard_cutsom">
          <CardActionArea onClick={() => SendToPhotobyAlbum(album)}>
            <CardMedia
              component="img"
              height="180"
              image={album.coverPhoto}
              alt={album.title}
            />
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography gutterBottom variant="h5">
                  <strong>Title:</strong> {album.title}
                </Typography>
                <TbEdit
                  style={{ fontSize: "22px", color: "#2075caff" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(album);
                  }}
                />
              </Box>
              <Typography variant="body2">
                <strong>Date:</strong> {album.date}
              </Typography>
              <Typography variant="body2">
                <strong>Club:</strong> {album.club}
              </Typography>
              <Typography variant="body2">
                <strong>Venue:</strong> {album.venue}
              </Typography>
              <Typography variant="body2">
                <strong>Event:</strong> {album.eventName}
              </Typography>
              <Typography variant="body2">
                <strong>Total Photos:</strong> {album.photos.length}
              </Typography>
            </CardContent>
          </CardActionArea>
          {admin && (
            <CardActions>
              <Button onClick={() => handleEdit(album)}>Edit</Button>
              <Button color="error">Delete</Button>
            </CardActions>
          )}
        </Card>
      ))}

      {/* 🔹 Edit Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Album</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="edit-album-form">
            <TextField
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              label="Club"
              fullWidth
              value={club}
              onChange={(e) => setClub(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Event"
              fullWidth
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Venue"
              fullWidth
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              type="date"
              label="Date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Tags"
              fullWidth
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              sx={{ mb: 2 }}
            />
            {/* <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            /> */}

            <input
              type="file"
              accept="image/*"
              id="coverPhotoInput"
              style={{ display: "none" }}
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            />

            <label htmlFor="coverPhotoInput" className="file-upload-btn">
              Choose Cover Photo
            </label>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            type="submit"
            form="edit-album-form"
            sx={{
              background: "linear-gradient(90deg, #3279c0, #184674)",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              textTransform: "none", // remove uppercase
              "&:hover": {
                background: "linear-gradient(90deg, #184674, #3279c0)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              },
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Curvedcard;
