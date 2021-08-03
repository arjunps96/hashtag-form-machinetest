import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import images from "../Utilities/Fanconvo-header-logo.png";
const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo-image">
        <img src={images} alt="fancove" />
        <span>
          A marketplace for conversations,mentorships and performances
        </span>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/link-2">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/link-1">login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
