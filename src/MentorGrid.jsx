import { useState } from "react";
import "./MentorGrid.css";
import WhiteH from "./WhiteH";
import { useNavigate } from "react-router-dom";
const MentorGrid = () => {
  const navigate = useNavigate();
  const userinfo = {
    name: "Keerthi",
  };
  const Mentors = [
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
    {
      Name: "Senthil Muthu",
      Designation:
        "Deputy Vice president at renault Nissan Technology Business Center India PVT Ltd",
      OfferingHelp:
        "Help in career choices, Hilp in anxiety, Modivation , Personal Issues , Resume Review, Leadership, Career Opportunities and Choices",
      LinkToProfile: "mentorLink",
      mentorId: 123123,
    },
  ];
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <WhiteH />
      <div className="mentorsContainer">
        <div className="mentorHeader">
          <h1
            style={{
              fontWeight: 600,
            }}
          >
            <span
              style={{
                color: "rgb(142, 142, 142)",
                fontWeight: 400,
              }}
            >
              Welcome
            </span>{" "}
            {userinfo.name}
          </h1>
          <div className="mentorRight">
            <div className="dropDown">
              <select>
                <option value="fruit">My Preference</option>

                <option value="vegetable">123123123</option>

                <option value="meat">123123</option>
              </select>
            </div>
            <div className="mentorButton">
              <button>Mentorship HomePage</button>
            </div>
          </div>
        </div>
        <h2
          style={{
            marginLeft: "100px",
            fontWeight: 300,
            fontSize: "25px",
          }}
        >
          Top Mentor for you
        </h2>
        <div className="mentorGrid">
          {Mentors.map((mentor) => {
            return (
              <div className="grid" key={mentor.mentorId}>
                <img src="https://picsum.photos/64/64" alt="" />
                <h3>{mentor.Name}</h3>
                <h4>{mentor.Designation}</h4>
                <div className="help">
                  <p>offering Help in </p>
                  <p>{mentor.OfferingHelp}</p>
                </div>
                <button
                  onClick={() => {
                    navigate(`${mentor.LinkToProfile}`);
                  }}
                >
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MentorGrid;
