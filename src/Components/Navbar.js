import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg bg-black"
      data-bs-theme="dark"
    >
      <NavLink className="nav-link text-light mx-2 nav_title" aria-current="true" to="/">Ahuja Enterprise</NavLink>
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0 text-capitalize fs-5 fw-bold "
          >
            <li className="nav-item">
              <NavLink exact='true' activeclassname="active" className="nav-link text-light mx-2 a" aria-current="true" to="/">home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact='true' activeclassname="active" className="nav-link text-light mx-2 a" aria-current="true" to="/about"
              >About</NavLink
              >
            </li>
            <li className="nav-item">
              <NavLink exact='true' activeclassname="active" className="nav-link text-light mx-2 a" aria-current="true" to="/services"
              >Service</NavLink
              >
            </li>
            <li className="nav-item">
              <NavLink exact='true' activeclassname="active" className="nav-link text-light mx-2 a" aria-current="true" to="/contact">Contact</NavLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
