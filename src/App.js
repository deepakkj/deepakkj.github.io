import React from "react";

import "./App.scss";

import Navbar from './components/Navbar/Navbar';
import HomePageBanner from './components/HomePageBanner/HomePageBanner';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import GetInTouchSection from './components/GetInTouchSection/GetInTouchSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePageBanner />
      <ProjectsSection />
      <AboutMeSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}

export default App;
