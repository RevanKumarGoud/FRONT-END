import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#Navbar">
              React POC
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#Home">
                  Home
                </a>
                <a className="nav-link" href="#Features">
                  Features
                </a>
                <a className="nav-link" href="#Pricing">
                  Pricing
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
