import React from "react";
import "../stylesheets/Footer.css";
import favicon from "../assets/favicon.png";
import location from "../assets/icons/location-dot-solid.svg";
import ScrollAnimation from "./animations/ScrollAnimation";


const Footer = () => {
  return (

    <div className="footer-container">
      {/* <img src={favicon} alt="" /> */}
        <div className="outro">
      <ScrollAnimation animationType="fadeUp">
          <img src={favicon} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus qui nam alias harum dignissimos rem culpa autem corrupti esse! Quae optio ipsam ab esse facilis quis nemo quod vitae quibusdam.
          </p>
      </ScrollAnimation>
        </div>
      <hr />

      <div className="office">
      <ScrollAnimation animationType="fadeUp">
        <img src={location} alt="" className="location-img" />
        <div className="location">
          <h4> Head Office </h4>
          <a href="/">042 Mongo-Park Rd, London, United Kingdom</a>
        </div>
      </ScrollAnimation>
      </div>
      <hr />

      <div className="contact-us">
      <ScrollAnimation animationType="fadeUp">
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
      </ScrollAnimation>
      </div>
    </div>

  );
};

export default Footer;
