import React from "react";

/* Resume Section */
function Resume({ data }) {
  /* Map over skills data,
  (array of objects with category: [array languages]),
  and generate display HTML for each */
  let skills = data.skills.map(function (skill) {
    let languages = skill.languages.map(function (language) {
      return (
        <div key={language} className="box">
          {/* ✔ ✓ ✗ √ */}✓ {language}
        </div>
      );
    });

    return (
      <div key={skill.category} className="row work">
        <div className="three columns header-col">
          <h1>
            <span>{skill.category}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {/* <div key={skill.category}> */}
          {/* <h3>{skill.category}</h3> */}
          <p className="date">{languages}</p>
          {/* </div> */}
        </div>
      </div>
    );
  });

  /* Map over education data,
  (array of objects with school, degree, graduated, description),
  and generate display HTML for each */
  let education = data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });
  /* Map over work data,
  (array of objects with company, title, years, description),
  and generate display HTML for each */
  let work = data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  return (
    <section id="resume">
      {skills}

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>

        {/* CURRENTLY DISABLED; Download Button For Resume */}
        {/* <div className="nine columns main-col download">
          <p>
            <a href={data.resumeDownload} className="button">
              <i className="fa fa-download"></i>Download Resume
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Resume;
