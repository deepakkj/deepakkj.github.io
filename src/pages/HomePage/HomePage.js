import React, { PureComponent } from "react";

import "./HomePage.scss";

import Navbar from './../../components/Navbar/Navbar';
import HomePageBanner from './../../components/HomePageBanner/HomePageBanner';
import ProjectsSection from './../../components/ProjectsSection/ProjectsSection';
import AboutMeSection from './../../components/AboutMeSection/AboutMeSection';
import GetInTouchSection from './../../components/GetInTouchSection/GetInTouchSection';
import ClientsListSection from './../../components/ClientsListSection/ClientsListSection';
import Footer from './../../components/Footer/Footer';

import allProjectData from '../../allProjects.js'

class HomePage extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Deepak Kumar Jain';
  }
  render() {
    const { history } = this.props;
    return (
      <>
        <Navbar history={history} />
        <HomePageBanner />
        <ProjectsSection projects={allProjectData} limit={3} />
        <AboutMeSection />
        <ClientsListSection />
        <GetInTouchSection />
        <Footer />
      </>
    );
  }
}

export default HomePage;
