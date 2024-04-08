import React from "react";
import img1 from "./assets/icon1.png";
import img2 from "./assets/icon2.png";
import img3 from "./assets/icon3.png";
import img4 from "./assets/icon4.png";

function Areas() {
  return (
    <div className="about">
      <p className="how">Areas of Mentorship</p>
      <div className="work_imgs">
        <div className="work_imgs_div">
          <div className="img1">
            <img className="imgs" src={img1} alt="" />
            <div className="head4 posrel">Job Search Strategy</div>
          </div>
          <div className="img1">
            <img className="imgs" src={img2} alt="" />
            <div className="head4">Career Guidance</div>
          </div>
          <div className="img1">
            <img className="imgs" src={img3} alt="" />
            <div className="head4">Academic Guidance</div>
          </div>
          <div className="img1">
            <img className="imgs" src={img4} alt="" />
            <div className="head4">Mock Interview</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Areas;
