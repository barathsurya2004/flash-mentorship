import React from "react";
import "./Option.css";
import img1 from "./assets/mentee.png";
import img2 from "./assets/mentor.png";

function Option() {
  return (
    <div className="option">
      <p className="how">Choose Your Option</p>
      <div className="par">
        <div className="options">
          <div className="item1">
            <div class="module">
              <div className="head3">“I'm ready to become a mentee”</div>
              <div className="smpara">
                Students | Young Alumni | Working Professionals
              </div>
              <div className="optbtn">Get Started</div>
            </div>
          </div>
          <div className="item1">
            <div class="module">
              <div className="head3">“I'm ready to become a mentor”</div>
              <div className="smpara">Any alumnus who wants to help</div>
              <div className="optbtn">Get Started</div>
            </div>
          </div>
          <div className="item1">
            <div class="module">
              <div className="head3">“I'm am not sure right now”</div>
              <div className="smpara">
                Help us to improve our mentorship program{" "}
              </div>
              <div className="optbtn">Get Started</div>
            </div>
          </div>
        </div>
        <div className="why">
          <div className="item2">
            <div className="module1">
              <img src={img1} alt="" className="imgopt brl" />
              <div className="optdiv">
                <div className="head3">Why become a mentor?</div>
                <ul>
                  <li>Improve your listening and interpersonal skills</li>
                  <li>Get recognition across the alumni network</li>
                  <li>Opportunity to help and serve your institute</li>
                  <li>Reinforce your knowledge</li>
                  <li>Expand your network</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="module1 fdrr">
              <img src={img2} alt="" className="imgopt brr" />
              <div className="optdiv">
                <div className="head3">Why become a mentee ?</div>
                <ul>
                  <li>Free of cost</li>
                  <li>Feel more confident with better decision making</li>
                  <li>Alumni are most trustworthy mentors</li>
                  <li>One call to solve all of your queries</li>
                  <li>Best way to connect with top alumni of your institute</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
