import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import './Curvedcard.css'
const Curvedcard = (props) => {
  // console.log("i am the prrops hee", props.albums);

  const Albums = props.albums.data || props.albums;
  // console.log("wekjbwefnlfdn", Albums)
  return (
    <div className="card_album_section">
      {Albums?.map((album) => (
        <Card sx={{ minWidth: 345 }} className="curvedcard_cutsom">
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={album.coverPhoto}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong> Title:</strong> {album.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong> Date:</strong> {album.date}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong> Club:</strong> {album.club}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong> Venue:</strong> {album.venue}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong> Event:</strong>{" "}
                {album.eventName ? album.eventName : ""}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>Total Photos:</strong> {album.photos.length}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button size="small" color="primary">
              Edit
            </Button>

            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Curvedcard;
