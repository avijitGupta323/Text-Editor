import React from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>
      <div className="container-fluid text-white">
        <Link className="navbar-brand fs-3 text-white" to="/">
          Text Editor
        </Link> 
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-check form-switch text-light pe-5">
        <input onClick={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchDefult"></input>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode</label>
      </div>
    </nav>
  );
}
