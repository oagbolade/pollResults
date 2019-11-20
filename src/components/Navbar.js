import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"} className="navbar-brand">
        Bincom
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              Question1 <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/question2"} className="nav-link">
              Question2 <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/question3"} className="nav-link">
              Question3 <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <span className="navbar-text">INEC Polling Results</span>
      </div>
    </nav>
  );
}

export default Navbar;
