import React from "react";
import "../../stylesheets/pagestyles/About.css";
import cert from "../../assets/cert.jpg";
// import bg from '../../assets/bg/about-bg.png'
import Footer from "../Footer";
import Copyright from "../Copyright";

const About = () => {
  return (
    <div className="about-container">
      <div className="abt-hero">
        <h1>About Investor</h1>
      </div>
      <div className="abt-container">
        <h2>About Us</h2>
        <p>
          Investor has molded an all-around client-driven experience that
          focuses on the latest value adding market insights and customizing our
          broad range of investment opportunities to meet the diverse needs of
          high net worth and institutional clients.
        </p>
        <br />
        <p>
          Our aim is a professional investment corporation found in the year
          27th June 2017. we engage in cryptocurrency exchange, real estate
          management and agricultural production. Our goal at Investor is
          to provide our clients with a comprehensive market with new resources.
          Currently, AIM operates as an independently investment management
          company. We are very concerned about how we relate with and deal with
          our clients. When it comes to delivering on our words and relating to
          clients, we take no half measures. We do not undermine the role of
          teamwork in the success of our company and that of our clients.
        </p>
        <br />
        <p>
          We tend to achieve this by diversifying into various sectors of the
          economy and making good impacts in all. Capitalessence has molded an
          all-around client-driven experience that focuses on the latest value
          adding market insights and customizing our broad range of investment
          opportunities to meet the diverse needs of high net worth and
          institutional clients. We deliver high performance with the clients’
          projected satisfaction We are Constantly ready to assist you make
          positive investment decisions, earning as much return as possible from
          selected investment instruments and markets.
        </p>
      </div>
      <img src={cert} alt="" />
      <div className="register-btn">
        <button> CREATE ACCOUNT </button>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
