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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui nam alias harum dignissimos rem culpa autem corrupti esse! Quae optio ipsam ab esse facilis quis nemo quod vitae quibusdam.
        </p>
      </div>
      <hr />
      <div className="office">
        <img src={location} alt="" className="location-img" />
        <div className="location">
          <h4> Head Office </h4>
          <a href="/">042 Mongo-Park Rd, London, United Kingdom</a>
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
