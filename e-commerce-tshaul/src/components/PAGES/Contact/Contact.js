import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Contact.css";
import { GrDeliver } from "react-icons/gr";
import { PiKeyReturnFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import Footer from "../../Footer/Footer";

function Contact() {
  return (
    <>
      <div className="nav-section">
        <Navbar />
      </div>

      <div className="container text-center custom-margin ">
        <div className="row">
          <div className="col pt-5">
            <h1>Contact Us </h1>
          </div>
          <div class="row text-center pt-2">
            <div class="col-md-12 mx-auto">
              If you have any queries you can reach us at
              support@t-shaul.com.
              <br />
              <br />
              You can also use WhatsApp at the right bottom corner of the
              website!
              <br />
              <br />
              We'll get back to you as soon as possible!
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5 mb-5 ">
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
}

export default Contact;
