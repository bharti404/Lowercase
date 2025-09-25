import React from "react";
import "./Contact.css";
import SendMessage from "../assests/sendmessage.png";

const Contact = () => {
  return (
    <div className="contact_home">
      <div className="contact_homne_left">
        <p className="contact_heading">GET IN <br /> TOUCH</p>

        <div className="contact_get_in_touch_box">
          <img src={SendMessage} alt="" />
          <p className="conbtact_home_box_text">Contact</p>

          <p className="conbtact_home_box_text_bottom">CLICK HERE</p>
        </div>
      </div>

      <div className="contact_homne_right">
        <p className="contact_homne_right_heading_top">
          Get news and event updates
        </p>

        <div className="contact_homne_right_mid_section">
  <input
    type="text"
    placeholder="enter your email *"
    className="styled-input"
  />
  <button className="contact_homne_right_mid_section_btn">
    Submit
  </button>
</div>

        <p className="contact_homne_right_heading_bottom">
          By submitting this form, you are agreeing to our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Contact;
