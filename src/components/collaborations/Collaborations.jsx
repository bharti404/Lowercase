import React from "react";
import "./Collaborations.css";
import video2 from "../assests/video2.mp4";
import travis from "../assests/Travis.jpg";
import rocky from "../assests/rocky.jpg";

import paris from "../assests/eiffel_tour.jpg";
import london from "../assests/london.jpg";
import newyork from "../assests/new_york.jpg";
import italy from "../assests/italy.jpeg";
import vegas from "../assests/vegas.jpg";
import chicago from "../assests/chicago.jpg";
import Navbar from "../navbar/Navbar";

const Collaborations = () => {
  return (
    <div>
      <Navbar />
      <div className="collab_container">
        <div className="collab_banner">
          <video src={video2} loop autoPlay muted></video>
        </div>

        <div className="content1">
          <div className="event_title">PAST NATIONAL EVENTS</div>
          <div className="collab_events">
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>{" "}
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={travis} alt="travis" />
            </div>
            <div className="event_card">
              <img src={rocky} alt="rocky" />
            </div>
          </div>
        </div>

        <div className="content1">
          <div className="event_title">PAST INTERNATIONAL TOURS</div>
          <div className="collab_events">
            <div className="event_card">
              <img src={paris} alt="travis" />
            </div>
            <div className="event_card">
              <img src={london} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={newyork} alt="travis" />
            </div>
            <div className="event_card">
              <img src={italy} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={vegas} alt="travis" />
            </div>
            <div className="event_card">
              <img src={chicago} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={paris} alt="travis" />
            </div>
            <div className="event_card">
              <img src={london} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={newyork} alt="travis" />
            </div>
            <div className="event_card">
              <img src={italy} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={vegas} alt="travis" />
            </div>
            <div className="event_card">
              <img src={chicago} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={italy} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={vegas} alt="travis" />
            </div>
            <div className="event_card">
              <img src={chicago} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={vegas} alt="travis" />
            </div>
            <div className="event_card">
              <img src={chicago} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={italy} alt="rocky" />
            </div>
            <div className="event_card">
              <img src={vegas} alt="travis" />
            </div>
            <div className="event_card">
              <img src={chicago} alt="rocky" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
