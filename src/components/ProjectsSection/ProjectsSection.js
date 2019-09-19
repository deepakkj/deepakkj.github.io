import React from "react";

import ProjectCard from './../ProjectCard/ProjectCard';
import "./ProjectsSection.scss";

const ProjectsSection = ({ sectionTitle, sectionSubtitle, projects, limit }) => {

  const renderProjectList = (projects) => {
    return projects.map(project => (
      <div className="column is-4" key={project.id}>
        <ProjectCard
          cardThumbnailImg={project.cardThumbnailImg}
          cardTitle={project.cardTitle}
          cardSubtitle={project.cardSubtitle}
          cardDesc={project.cardDesc}
          cardDate={project.cardDate}
          dateTime={project.dateTime}
        />
      </div>
    ));
  }

  return (
    <section className="section container" id="projects">
      <div className="">
        <h2 className="title section-title is-spaced has-text-centered is-size-3-tablet title-text-color"><span className="underline dark-grey">{sectionTitle}</span></h2>
        <h3 className="subtitle section-subtitle has-text-centered has-text-weight-normal subtitle-text-color">{sectionSubtitle}</h3>
      </div>
      <div className="margin-bottom-2">
        <div className="columns is-flex-wrap is-variable is-5-tablet is-6-desktop is-8-widescreen is-8-fullhd">
          {renderProjectList(projects.slice(0, limit))}
        </div>
      </div>
      {
        (limit && limit !== projects.length) ?
      <div className="has-text-centered">
        <a className="button is-outlined is-primary" href="/project">View All Projects</a>
      </div>
      : null
      }
    </section>
  );
}

ProjectsSection.defaultProps = {
  sectionTitle: 'Projects',
  sectionSubtitle: 'Below are few of my select work that I have worked upon.'
};

export default ProjectsSection;
