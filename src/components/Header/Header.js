import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className="head-section">
        <h3>Search New Talent</h3>
        <div className="search-bar">
          <input />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
