import React from "react";
import "../stylesheets/Testimonies.css";
import iv from "../assets/investor/iv.jpg";
import ivv from "../assets/investor/ivv.jpg";
import ivvv from "../assets/investor/ivvv.jpg";
import ScrollAnimation from "./animations/ScrollAnimation";

const Testimonies = () => {
  return (
    <div className="t-container">
      <h2>Top Investors</h2>

      <section className="tcard-container">
        <div className="tcards">
          <ScrollAnimation animationType="fadeUp">

          <img src={iv} alt="" />
          <h4>Ryan McCormick</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa temporibus repudiandae, corrupti provident dolores in ipsam, assumenda iure consectetur exercitationem, mollitia ratione!
          </p>{" "}
          </ScrollAnimation>
        </div>
        <div className="tcards">
          <ScrollAnimation animationType="fadeUp">

          <img src={ivv} alt="" />
          <h4>Julian Styles</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reiciendis! Odit quasi numquam quisquam laboriosam natus ea ut alias eaque
           </p>
          </ScrollAnimation>
        </div>
        <div className="tcards">
          <ScrollAnimation animationType="fadeUp">

          <img src={ivvv} alt="" />
          <h4>Logan Russell</h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor deserunt voluptatibus omnis ducimus quasi eveniet magnam quas? Dolorum fugiat error
          </p>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
