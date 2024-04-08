import React, { useContext, useEffect } from "react";
import "./frontImg.css";
import { Link } from "react-router-dom";
import { UserContext } from "./context";
function FrontImg() {
  const { logStatus } = useContext(UserContext);

  return (
    <div className="mainImg">
      <div className="blackGrad">
        <div className="intro-font">Introducing Flash Mentorship</div>
        <div className="det-font">
          Flash Mentorship is a new faster way of mentorship where one can
          quickly connect with other members to help them in career guidance.
        </div>
        <div className="box">
          <div className="box1">
            <Link
              to={logStatus ? "become-a-mentor" : "/login"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Become a Mentor
            </Link>
          </div>
          <div className="box2">
            <Link
              to={logStatus ? "/become-a-mentee" : "login"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Become a Mentee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontImg;
