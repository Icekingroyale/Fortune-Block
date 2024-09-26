import React from "react";
import "../stylesheets/Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright-container">
      <hr />
      <div className="copyright">
        <p>
          &copy; 2020 Copyright<a href="./">fortuneblock.com</a>- All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Copyright;
