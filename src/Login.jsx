import React, { useContext, useState } from "react";
import WhiteH from "./WhiteH";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { logStatus, setLogStatus, userId, password } = useContext(UserContext);
  console.log(logStatus);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = (e) => {
    // Here you can implement your login logic

    e.preventDefault();
    if (email === userId && pass === password) {
      setLogStatus(true);
      navigate("/");
      console.log(logStatus);
    } else {
      alert("email id and password don't match");
    }
  };

  return (
    <section className="login-section">
      <WhiteH />
      <div className="container">
        <div className="IITAA">
          <div className="login-content">
            <img src="/iithaa-hori.png" alt="" />
            <h2 className="login-heading">
              Indian Institute of Technology Hyderabad Alumni Association
            </h2>
            <div className="login-subheading">
              Sign up or log in to stay connected with your community
            </div>
          </div>
        </div>
        <div className="signIn">
          <h2>Sign in</h2>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={handlePasswordChange}
            />
            <div className="signInBt">
              <Link to={"/forgotPassword"}>Forgot password ?</Link>
              <button onClick={handleLogin}>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
