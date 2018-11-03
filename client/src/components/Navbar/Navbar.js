import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div>
    <col-md-12>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Rate My Project
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li>
              <a className="nav-item" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a className="nav-item" href="/CreateUser">
                Create User
              </a>
            </li>
            <li>
              <a className="nav-item" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-item" href="/features">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </col-md-12>
  </div>
);

export default Navbar;