// Register.js

import React, { useState } from "react";
import "./Register.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import { GrDeliver } from "react-icons/gr";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
   
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Save user data to local storage
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("User registered:", userData);
    setEmail("");
    setPassword("");
    alert("register successfully !!")
    navigate("/login")
  };

  return (
    <>
      <div className="nav-section">
        <Navbar />
      </div>
      <div className="main-container-register">
        <div className="register-container">
          <h2 className="head-register">Register</h2>
          <p className="head-register">
            Please enter your e-mail and password:
          </p>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your e-mail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>

          <button className="register-btn" onClick={handleRegister}>
            REGISTER
          </button>
        </div>
      </div>

      <div className="container text-center mb-5 ">
        <div className="row">
          <div className="col">
            <GrDeliver className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">FREE & FAST DELIVERY</p>
                Shipping within 48 hours across India.
              </div>
            </div>
          </div>
          <div className="col">
            <PiKeyReturnFill className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">RETURN POLICY</p>
                Easy returns within 7 days.
              </div>
            </div>
          </div>
          <div className="col">
            <MdContacts className="fs-1" />
            <div class="row text-center pt-2">
              <div class="col-md-12 mx-auto">
                <p className="fw-semibold">CONTACT US</p>
                Write us at support@t-shaul.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
