import React from "react";
import "./EventAlbums.css";

import event1 from "../assests/event.jpg"

const eventData = [
  {
    id: 1,
    title: "F*ck Me It's Halloween",
    location: "Studio 338, London",
    date: "31/10/2024",
    image: event1, // no image
  },
  {
    id: 2,
    title: "Play - XOXO Every Monday",
    location: "Studio 338, London",
    date: "31/10/2024",
    image:event1,
  },
  {
    id: 3,
    title: "F*ck Me It's Halloween",
    location: "Studio 338, London",
    date: "31/10/2024",
    image:event1, // no image
  },
  {
    id: 4,
    title: "Lowercase Live: PartyNextDoor",
    location: "Studio 338, London",
    date: "31/10/2024",
    image: event1, // no image
  },
  {
    id: 5,
    title: "The Freshers Rave",
    location: "Studio 338, London",
    date: "31/10/2024",
    image:event1,
  },
  {
    id: 6,
    title: "Gin & Juice - Hip Hop Halloween Festival",
    location: "Studio 338, London",
    date: "31/10/2024",
    image: event1,
  },
];

const EventAlbums = () => {
  return (
    <div className="event-albums-container">
  
      <div className="albums-grid">
        {eventData.map((event) => (
          <div className="album-card" key={event.id}>
            {event.image ? (
              <img src={event.image} alt={event.title} />
            ) : (
              <div className="empty-box"></div>
            )}
            <div className="album-info">
              <p className="event-title">{event.title}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAlbums;
