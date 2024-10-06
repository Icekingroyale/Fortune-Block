import React from "react";
import { Link, useNavigate } from "react-router-dom";
import btcgif2 from "../assets/btcgif2.gif";
import "../stylesheets/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBtnClick = () => {
    navigate("/register"); // Navigate to the Sign Up page
  };

  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <h1>
          WorldClass Crypto <span className="highlighted">Investment</span>{" "}
          Services
        </h1>
        <p className="hero-info-description">
          We provide cryptocurrency investment and trading solutions, our
          platform creates an accessible user-friendly and efficient environment
          for online trading and investment of crypto. Our revolutionary technology is
          taking the crypto investment industry by storm, empowering millions
          across the globe to participate and invest instantly.
        </p>
      </div>
      <div className="gif-container">
        <img src={btcgif2} alt="" />
      {/* </div>
          <Link> Backend </Link>
      <div> */}
        
      </div>

      <div>
        <button className="get-started" onClick={handleBtnClick}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
