import React from "react";
import "../stylesheets/Footer.css";
import favicon from "../assets/favicon.png";
import location from "../assets/icons/location-dot-solid.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <img src={favicon} alt="" /> */}
      <div className="outro">
        <img src={favicon} alt=""/>
        <p>
          Get access to best of crypto investment and the tools and confidence
          to start ivesting with cryptocurrencies, faster than you can like
          never before.
        </p>
      </div>
      <hr />
      <div className="office">
        <img src={location} alt="" className="location-img" />
        <div className="location">
          <h4> Head Office </h4>
          <a href="/">183 Birchpond Road Coram New York, United States</a>
        </div>
      </div>
      <hr />
      <div className="contact-us">
        <h4>Contact Us</h4>
        <div className="contact-admin">
          <span>Admin</span>
          <h6>
            <a href="/">admin@fortuneblock.com</a>
          </h6>
        </div>
        <div className="contact-support">
          <span>support</span>
          <h6>
            <a href="/">support@fortuneblock.com</a>
          </h6>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
