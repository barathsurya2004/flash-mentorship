import React, { useState } from "react";
import "./MenteeReg.css";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";

function MentorReg() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#808" : "#fff",
    borderColor: isChecked ? "#808" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <div className="menteereg">
      <div className="regdiv">
        <div className="head4">Become a Mentor</div>
        <div className="mentorForm">
          <label>
            <div className="formtxt">Your Name *</div>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="formtxt">
          1. What topics do you think you can mentor
        </div>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Resume Review</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Mock HR Interview</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Help in career choices</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Help for higher studies choises</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Help to startup founders</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">
            Help in anxiety, motivation, personal issues
          </span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Other</span>
        </label>
        <br />
        <div className="formtxt">2. Who would you like to mentor?</div>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Students</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Young alumni, recent passouts</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <animated.svg
            style={checkboxAnimationStyle}
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <animated.path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke="#fff"
              ref={(ref) => {
                if (ref) {
                  setCheckmarkLength(ref.getTotalLength());
                }
              }}
              strokeDasharray={checkmarkLength}
              strokeDashoffset={checkmarkAnimationStyle.x}
            />
          </animated.svg>
          <span className="checktxt">Alumni</span>
        </label>
        <br />
      </div>
    </div>
  );
}

export default MentorReg;
