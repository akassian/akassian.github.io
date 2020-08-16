import React from "react";
import waves from "./images/waves.png";

function Header({ data }) {
  let { firstName, lastName, image, occupation, address, social } = data;
  let { city, state } = address;
  let networks = social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <div>
      <header className="intro" id="home">
        {/* <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}

        <div className="row banner">
          <div className="banner-text">
            <img
              className="profile-pic"
              src={require("./images/" + image)}
              alt="Profile Pic"
            />
            <h3>Hi, I'm</h3>
            <h1 className="responsive-headline">
              {firstName} {lastName}
            </h1>
            <hr />
            <h3>
              <span>{occupation}</span> from {city}, {state}
            </h3>
            <ul className="social">{networks}</ul>
            {/* <div className="test" />
            <div>words</div> */}
            <img
              className="wave-horizontal"
              src={waves}
              width="70%"
              alt="bg design"
            />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </div>
  );
}

export default Header;