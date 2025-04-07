import React from "react";
import { useNavigate } from "react-router-dom";
import btcgif2 from "../assets/btcgif2.gif";
import "../stylesheets/HeroSection.css";
import ScrollAnimation from "./animations/ScrollAnimation";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBtnClick = () => {
    navigate("http://localhost:3000/"); // Navigate to the Sign Up page
  };

  return (
    <div className="hero-section-container" >
      <div className="hero-info-wrapper">
        <ScrollAnimation animationType="fadeUp">

          <h1>
            World Class Crypto <span className="highlighted">Investment</span>{" "}
            Services
          </h1>
          <p className="hero-info-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum cumque, distinctio nihil porro praesentium quidem! Ad consequuntur corporis, eligendi iure, nihil nulla quam quod saepe tempore tenetur vel voluptas!
          </p>
        </ScrollAnimation>
      </div>
      <div className="gnb-div">
        <ScrollAnimation animationType="fadeDown">
          <div className="gif-container">

            <img src={btcgif2} alt="" />
            <button className="get-started" onClick={handleBtnClick}>
              GET STARTED
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HeroSection;
