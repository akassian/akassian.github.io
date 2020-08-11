import React from "react";

function About({ data }) {
  let { name, image, bio, address, phone, email, resumeDownload } = data;
  let { city, state } = address;

  return (
    <section id="about">
      <div className="row">
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{email}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  {city}, {state}
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
