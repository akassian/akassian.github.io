import React from "react";
import waves from "../images/waves.png";

/* Header / Intro Section */
function Header({ data }) {
  let { firstName, lastName, image, occupation, address, social } = data;
  let { city, state } = address;

  /* Map over social
  (array of objects with name, url, and className values)
  and generate HTML for each in the form of an li */
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
        <div className="row banner">
          <div className="banner-text">
            {/* Profile Pic */}
            <img
              className="profile-pic"
              src={require("../images/" + image)}
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
            {/* Social Icon Liks */}
            <ul className="social">{networks}</ul>
            {/* Animated waves */}
            <img
              className="wave-horizontal"
              src={waves}
              width="70%"
              alt="animated gold waves"
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
