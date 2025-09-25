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
// import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import { TbEdit, TbTrash } from "react-icons/tb";
import cookies from "js-cookie";
import { CircularProgress } from "@mui/material";

import axios from "axios";

import "./Curvedcard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Curvedcard = ({ Albums, refetch }) => {
  // const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  // const { albums, setAlbums } = props;
  // const Albums = props.albums.data || props.albums;

  // modal + selected album
  const [open, setOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // form states
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [tags, setTags] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [folderName, setFolderName] = useState("");
  const [loading, setLoading] = useState(false);

  // const [dropboxImages, setDropboxImages] = useState([]);

  const token = cookies.get("token");
  const role = cookies.get("role");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // useEffect(() => {
  //   if (localStorage.getItem("token")) setAdmin(true);
  // }, []);

  // prefill form when an album is selected
  useEffect(() => {
    if (selectedAlbum) {
      setTitle(selectedAlbum.title || "");
      setClub(selectedAlbum.club || "");
      setEventName(selectedAlbum.eventName || "");
      setVenue(selectedAlbum.venue || "");
      setDate(selectedAlbum.date || "");
      setTags(selectedAlbum.tags || "");
      // setDropboxImages(selectedAlbum.photos || []);
      setCoverPhoto(selectedAlbum.coverPhoto || null);
      setFolderName(selectedAlbum.folderName || null);
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

    if (!token || (role === "admin" && role === "superadmin")) {
      alert("For Uploading Please Login ");
      navigate("/admin/login");
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
      const response = await axios.patch(
        `${baseUrl}/api/album/update/${selectedAlbum?._id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Album upDate successfully.");
      console.log(response.data);

      if (refetch) {
        await refetch();
      }

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
      console.error("Error upDating album:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert("Error Up-Dating album. Please try again.");
    } finally {
      setLoading(false);
      setOpen(false)
    }
  };

  const handleDelete = async (album) => {
    if (!token || (role !== "admin" && role !== "superadmin")) {
      alert("For Deleting Please Login ");
      navigate("/admin/login");
      return;
    }
    try {
      // 🔹 confirm delete
      const confirmDelete = window.confirm(
        `Are you sure you want to delete "${album.title}"?`
      );
      if (!confirmDelete) return;

      // 🔹 API call
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/album/delete/${album._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete album");
      }

      alert("Album deleted successfully ✅");

      // 🔹 Update local state (remove deleted album from list)
      refetch();
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="card_album_section">
      {Albums?.map((album) => (
        <Card
          key={album._id}
          className="curvedcard_custom"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <CardActionArea onClick={() => SendToPhotobyAlbum(album)}>
            <CardMedia
              component="img"
              height="200"
              image={album.coverPhoto}
              alt={album.title}
              sx={{
                objectFit: "cover",
                borderRadius: "8px",
                objectPosition: "top",
              }}
            />
            <CardContent sx={{ p: 1.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: 1.3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {album.title}
                </Typography>

                {
                  role === "superadmin" ?(<Box sx={{ display: "flex", gap: 1, ml: 1 }}>
                  <TbEdit
                    style={{
                      fontSize: "22px",
                      color: "#2075ca",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(album);
                    }}
                  />

                  <TbTrash
                    style={{
                      fontSize: "22px",
                      color: "#d32f2f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(album);
                    }}
                  />
                </Box>) : ""
                }

                {/* <Box sx={{ display: "flex", gap: 1, ml: 1 }}>
                  <TbEdit
                    style={{
                      fontSize: "22px",
                      color: "#2075ca",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(album);
                    }}
                  />

                  <TbTrash
                    style={{
                      fontSize: "22px",
                      color: "#d32f2f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(album);
                    }}
                  />
                </Box> */}
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0.25rem 0.5rem",
                  mt: 1,
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Date:
                </Typography>
                <Typography variant="caption">{new Date(album.date).toLocaleDateString()}</Typography>

                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Club:
                </Typography>
                <Typography variant="caption">{album.club}</Typography>

                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Venue:
                </Typography>
                <Typography variant="caption">{album.venue}</Typography>

                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Event:
                </Typography>
                <Typography variant="caption">{album.eventName}</Typography>

                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Photos:
                </Typography>
                <Typography variant="caption">{album.photos.length}</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          {/* {admin && (
            <CardActions sx={{ p: 1, pt: 0 }}>
              <Button size="small" onClick={() => handleEdit(album)}>
                Edit
              </Button>
              <Button size="small" color="error">
                Delete
              </Button>
            </CardActions>
          )} */}
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

            <TextField
              label="CoverPhoto"
              fullWidth
              value={coverPhoto}
              onChange={(e) => setCoverPhoto(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Folder Name"
              fullWidth
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* <input

              type="file"
              accept="image/*"
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            /> */}

            {/* <input
              type="file"
              accept="image/*"
              id="coverPhotoInput"
              style={{ display: "none" }}
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            /> */}

            {/* <label htmlFor="coverPhotoInput" className="file-upload-btn">
              Choose Cover Photo
            </label> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          {/* <Button
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
          </Button> */}

          <Button
            type="submit"
            form="edit-album-form"
            disabled={loading} // disable button while updating
            sx={{
              background: "linear-gradient(90deg, #3279c0, #184674)",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              textTransform: "none", // remove uppercase
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              "&:hover": {
                background: "linear-gradient(90deg, #184674, #3279c0)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              },
            }}
          >
            {loading ? (
              <>
                <CircularProgress size={16} sx={{ color: "#fff" }} />
                <span>Updating...</span>
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Curvedcard;
