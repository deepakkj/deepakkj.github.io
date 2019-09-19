import React, { PureComponent } from "react";

import "./AllProjectsPage.scss";

import Navbar from '../../components/Navbar/Navbar';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Footer from '../../components/Footer/Footer';
import GetInTouchSection from '../../components/GetInTouchSection/GetInTouchSection';
import allProjectData from '../../allProjects.js'

class AllProjectsPage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Deepak Kumar Jain';
  }
  render() {
    const { history } = this.props;
    return (
      <>
        <Navbar theme="dark" history={history} />
        <div className="project-page-wrapper">
          <ProjectsSection sectionTitle={"All Projects"} sectionSubtitle={"Below is the list of all projects I have worked on."} projects={allProjectData} />
          <GetInTouchSection />
        </div>
        <Footer />
      </>
    );
  }
}

export default AllProjectsPage;
