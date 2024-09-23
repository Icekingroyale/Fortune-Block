import React from "react";
import btcgif2 from "../assets/btcgif2.gif";
import "../stylesheets/HeroSection.css";


const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <h1>
          WorldClass Crypto <span className="highlighted">Investment</span> Services
        </h1>
        <p className="hero-info-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          magnam aperiam doloremque quibusdam laborum facilis molestiae at.
          Ipsum atque, accusamus aliquam alias a et ullam iste odit porro
          delectus quibusdam.
        </p>
      </div>
      <div className="gif-container">
        <img src={btcgif2} alt="" />
      </div>

      <div>
        <button className="get-started">GET STARTED</button>
      </div>
    </div>
  );
};

export default HeroSection;
