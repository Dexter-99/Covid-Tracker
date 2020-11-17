import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-4">
      <div className="container ">
        <a className="title" href="#" style={{ fontWeight: "1000" }}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mx-1 mt-2"
            alt="logo"
          />
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto links">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/overview" className="nav-link">
                Overview
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/world-tracker" className="nav-link">
                World Tracker
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/indian-Tracker" className="nav-link">
                India Tracker
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
