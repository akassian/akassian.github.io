import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";

function Portfolio({ data }) {
  let projects = data.projects.map(function (projects) {
    return (
      // <div key={projects.title} className="columns portfolio-item">
      //   <div className="item-wrap">
      //     <a href={projects.url} title={projects.title}>
      //       <img alt={projects.title} src={projectImage} />
      //       <div className="overlay">
      //         <div className="portfolio-item-meta">
      //           <h5>{projects.title}</h5>
      //           <p>{projects.category}</p>
      //         </div>
      //       </div>
      //       <div className="link-icon">
      //         <i className="fa fa-link"></i>
      //       </div>
      //     </a>
      //   </div>
      // </div>
      <Grid item xs={12} sm={6} key={projects.title}>
        <ProjectCard
          title={projects.title}
          description={projects.description}
          expandedDescription={projects.expandedDescription}
          image={projects.image}
          url={projects.url}
          urlSource={projects.urlSource}
        />
      </Grid>
    );
  });

  return (
    <section id="portfolio">
      <h1>Some of My Works</h1>
      <div className="card-container">
        {/* <p>test</p> */}
        <Grid container spacing={2}>
          {projects}
        </Grid>
      </div>
      {/* <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Portfolio;
