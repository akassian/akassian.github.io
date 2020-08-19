import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";

/* Projects Section */
function Projects({ data }) {
  /* Map over projects,
  (array of objects with title, description, expandedDecription, image, url, urlSource),
  and generate display for each via Material UI */
  let projects = data.projects.map(function (projects) {
    return (
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={projects.title}>
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
    <section id="projects">
      <h1>Some Of My Works</h1>
      <div className="card-container">
        <Grid container spacing={1}>
          {projects}
        </Grid>
      </div>
    </section>
  );
}

export default Projects;
