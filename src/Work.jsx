import React from "react";
import "./Work.css";
import img1 from "./assets/icon-01-1.png";
import img2 from "./assets/icon-01-2.png";
import img3 from "./assets/icon-01-3.png";

function Work() {
  return (
    <div className="work">
      <p className="how">How does flash mentorship work?</p>
      <div className="work_imgs">
        <div className="work_imgs_div">
          <div className="img1">
            <img className="imgs" src={img1} alt="" />
            <div className="head4 posrel">
              Step 1
            </div>
            <div className="head8">Register as a mentee or a mentor</div>
          </div>
          <div className="img1">
            <img className="imgs" src={img2} alt="" />
            <div className="head4">
              Step 2
            </div>
            <div className="head8">Find mentor and schedule a call</div>
          </div>
          <div className="img1">
            <img className="imgs" src={img3} alt="" />
            <div className="head4">
              Step 3
            </div>
            <div className="head8">Connect over a 20 mins call. That's it</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
