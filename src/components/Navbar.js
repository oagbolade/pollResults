import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"} className="navbar-brand">
        Bincom
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to={"/"} className="nav-link">
              Question1 <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/question2"} className="nav-link">
              Question2 <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/question3"} className="nav-link">
              Question3 <span class="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <span class="navbar-text">INEC Polling Results</span>
      </div>
    </nav>
  );
}

export default Navbar;
