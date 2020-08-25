import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar fixed-top">
        <ul className="row">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/friends">Friends</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
