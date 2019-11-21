import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
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
            <li
              className={"nav-item" + (this.props.active === 1 ? "active" : "")}
            >
              <Link to={"/"} className="nav-link">
                Question1
              </Link>
            </li>
            <li
              className={"nav-item" + (this.props.active === 2 ? "active" : "")}
            >
              <Link to={"/question2"} className="nav-link">
                Question2
              </Link>
            </li>
            <li
              className={"nav-item" + (this.props.active === 3 ? "active" : "")}
            >
              <Link to={"/question3"} className="nav-link">
                Question3
              </Link>
            </li>
          </ul>
          <span className="navbar-text">INEC Polling Results</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
