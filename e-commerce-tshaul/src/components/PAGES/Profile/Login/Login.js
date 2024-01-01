// Login.js

import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import { GrDeliver } from "react-icons/gr";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { app } from "../../../../firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, get, child, ref } from "firebase/database";

const Login = () => {
  const auth = getAuth(app);
  const dbRef = ref(getDatabase(app));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [isUserLogin, setUserLogin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((usercredential) => {
        // console.log(usercredential.user);
        alert("login successfully");
        setUserLogin(true);

        //read the data

        get(child(dbRef, `users/${usercredential.user.uid}`)).then(
          (snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setUserData(userData); // Update state
              console.log("userData:", userData.email);
            } else {
              console.log("No data available");
            }
          }
        );
      })
      .catch((error) => {
        console.log(error.message);
        alert("not login");
      });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="nav-section">
        <Navbar />
      </div>

      {isUserLogin ? (
        <div className="profile-section">
          <img
            src="https://img.freepik.com/free-vector/young-man-workplace_24877-52694.jpg?w=740&t=st=1703526930~exp=1703527530~hmac=1306a983d2db0ecb0e6c70510a50f95f15db0f4221a38d9e74a8d616cfdf2ea9"
            alt="User Profile"
            className="proo-imge"
          />
          <p>{userData.email}</p>
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  alert("Sign out successful");
                  setUserData("");
                  setUserLogin(false)
                })
                .catch(() => {
                  alert("Sign out failed");
                });
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="main-container-login">
          <div className="login-container">
            <h2 className="head-login">Login</h2>
            <p className="head-login">Please enter your e-mail and password:</p>

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

            <button className="login-btn" onClick={userLogin}>
              LOGIN
            </button>

            <p className="new-customer">
              New customer? <Link to="/login/register">Create an account</Link>
            </p>
          </div>
        </div>
      )}

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

      <Footer />
    </>
  );
};

export default Login;
