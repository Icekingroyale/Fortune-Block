import React from "react";
import "../stylesheets/Testimonies.css";
import iv from "../assets/investor/iv.jpg";
import ivv from "../assets/investor/ivv.jpg";
import ivvv from "../assets/investor/ivvv.jpg";

const Testimonies = () => {
  return (
    <div className="t-container">
      <h2>Top Investors</h2>

      <section className="tcard-container">
        <div className="tcards">
          <img src={iv} alt="" />
          <h4>Ryan McCormick</h4>
          <p>
            "This is a realistic program for anyone looking for site to invest.
            Paid to me regularly, keep up good work!
          </p>{" "}
        </div>
        <div className="tcards">
          <img src={ivv} alt="" />
          <h4>Julian Styles</h4>
          <p>
            "Bitcoin doubled in 7 days. You should not expect anything less.
            Excellent customer service!”
          </p>
        </div>
        <div className="tcards">
          <img src={ivvv} alt="" />
          <h4>Logan Russell</h4>
          <p>
            "I have decided to use Freeinvestment for Bitcoin packages because
            all other investment companies don't provide the same level of packages and service. Highly recommend it."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
