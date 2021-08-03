import React from "react";

import "./Footer.css";
import images from "../Utilities/Fanconvo-header-logo.png";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <img src={images} alt="fancove" />
        <p>How Famconvo works?</p>
        <p>Terms of use</p>
        <p>Contact us</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
