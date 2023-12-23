import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='main-container'>

    <div className='main-footer'>
       <div className='Aboutus-section'>
        <p className='heading'>ABOUT US</p>
        <p>Explore to CHANGE.<br/>
          <Link className='link' to="./about">Learn More</Link></p>

       </div>

       <div className='policies-section'>
       <p className='heading'>POLICIES</p>
       <div className='content-policy'>
       <p className='policy-data'>Exchange/Return Your Order</p>
        <p className='policy-data'>Shipping Policy</p>
        <p className='policy-data'>Exchange and Refund Policy</p>
        <p className='policy-data'>Terms and Conditions</p>
        <p className='policy-data'>Privacy Policy</p>
        <p className='policy-data'>Privacy Policy</p>
       </div>
        

       </div>

       <div className='newsletter-section'>
       <p className='heading'>NEWSLETTER</p>
       You can be the first one to know about our <br/>
       new releases, latest offers and more.<br/>
        <Link className='link' to="./register">Sign up</Link> now!

       </div>

       <div className='followus-section'>
       <p className='heading'>FOLLOW US </p>
         <p className='heading-icons'> Stay in touch!</p>
       <div className='social-icon'>
       <FaFacebook className='icon'/>
       <FaTwitter className='icon'/>
       <FaInstagram className='icon'/>
       <FaYoutube className='icon'/>
       </div>

       </div>

    </div>
    <p style={{textAlign:'center'}}>
    &copy; copyright by suraj neharkar,Ts haul</p>
    </div>
    
    </>
  )
}

export default Footer