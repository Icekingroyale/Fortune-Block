import React from "react";
import "../stylesheets/Iframe.css";
import powered from "../assets/comm008.png";
import ScrollAnimation from "./animations/ScrollAnimation";

const Iframe = () => {
  return (

      <div className="Iframe-container">
        <div className="Iframe">
          <iframe
            width="100%"
            height="400px"
            src="https://ng.widgets.investing.com/top-cryptocurrencies?theme=darkTheme"
            frameborder="0"
            allowtransparency="true"
            marginwidth="0"
            marginheight="0"
          ></iframe>
        </div>


          <div className="powered">
            <img src={powered} alt="" />
          </div>
      </div>
  );
};

export default Iframe;
