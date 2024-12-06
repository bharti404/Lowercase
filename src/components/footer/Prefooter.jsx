import React from "react";
import "./Prefooter.css";
import FatosmaImg from "../assests/fatsoma_home.jpg";

const Prefooter = () => {
  return (
    <div>
      <div className="prefooter_main">
        <div className="prefooter_main_left">
          <div className="prefooter_main_left_top">
            <img src={FatosmaImg} alt="" />
          </div>

          <div className="prefooter_main_left_bottom">
          <img src={FatosmaImg} alt="" />
          </div>
        </div>




        <div className="prefooter_main_right">
          <div className="prefooter_main_right_top">

            <p className="prefooter_right_top_head">
              Join the announcement here
            </p>

            <p className="prefooter_right_bottom_head">
              From zero to lit in one click - <strong>Lowercase Events </strong>{" "}
              got you!
            </p>

          </div>

          <div className="prefooter_main_right_middle">
            <div className="prefooter_formform">
              <form action="">

                <div className="preefooter_right_form_top">

                <input type="text"  placeholder="Enter your number*"/>
                <button className="prefooter_sbmtbtn">Submit</button>
                </div>

                <div className="preefooter_right_form_btm">


                
                <input type="text" placeholder="Enter your city*" />
                </div>
              </form>
            </div>
          </div>

          <div className="prefooter_main_right_bottom">
            <p className="prefooter_bottom_text">
              By submitting this form, you are agreeing to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
