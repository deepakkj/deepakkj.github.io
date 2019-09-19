import React from "react";

import "./AllProjectsPage.scss";

import Navbar from '../../components/Navbar/Navbar';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Footer from '../../components/Footer/Footer';
import GetInTouchSection from '../../components/GetInTouchSection/GetInTouchSection';
import allProjectData from '../../allProjects.js'

function AllProjectsPage() {
  return (
    <>
      <Navbar theme="dark" />
      <div className="project-page-wrapper">
        <ProjectsSection sectionTitle={"All Projects"} sectionSubtitle={"Below is the list of all projects I have worked on."} projects={allProjectData} />
        <GetInTouchSection />
      </div>
      <Footer />
    </>
  );
}

export default AllProjectsPage;
