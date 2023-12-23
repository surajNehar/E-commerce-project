// Login.js

import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import { GrDeliver } from "react-icons/gr";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
    
    const handleLogin = () => {
      // Retrieve user data from local storage
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.email === email && userData.password === password) {
          alert('Login successful!');
        } else {
          console.log('Incorrect credentials. Please try again.');
        }
      } else {
        console.log('No user registered. Please register first.');
      }
      console.log('Logging in with:', { email, password });
      setEmail(" ");
      setPassword(" ");
    };
   
  

  return (
    <>
    <div className='nav-section'>
       <Navbar/>
    </div>
    
    <div className='main-container-login'>
    <div className="login-container">
      <h2 className='head-login'>Login</h2>
      <p className='head-login'>Please enter your e-mail and password:</p>

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
        <span className="forgot-password">Forgot password?</span>
      </div>

      <button className="login-btn" onClick={handleLogin}>
        LOGIN
      </button>

      <p className="new-customer">
        New customer? <Link to = "/login/register">Create an account</Link>
      </p>
    </div>
    </div>
   
    <div className="container text-center mt-1 mb-5 ">
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

    <Footer/>
    </>
  );
};

export default Login;
