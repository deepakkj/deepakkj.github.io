import React from "react";

import "./HomePage.scss";

import Navbar from './../../components/Navbar/Navbar';
import HomePageBanner from './../../components/HomePageBanner/HomePageBanner';
import ProjectsSection from './../../components/ProjectsSection/ProjectsSection';
import AboutMeSection from './../../components/AboutMeSection/AboutMeSection';
import GetInTouchSection from './../../components/GetInTouchSection/GetInTouchSection';
import ClientsListSection from './../../components/ClientsListSection/ClientsListSection';
import Footer from './../../components/Footer/Footer';

import allProjectData from '../../allProjects.js'

function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageBanner />
      <ProjectsSection projects={allProjectData} limit={3} />
      <AboutMeSection />
      <ClientsListSection />
      <GetInTouchSection />
      <Footer />
    </>
  );
}

export default HomePage;
