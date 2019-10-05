import React from "react";

import { IMG_PERSON } from './../../images';
import "./AboutMeSection.scss";


function AboutMeSection() {
  return (
    <section className="section section-dark green container is-fluid is-marginless bg-aboutme" id="aboutMeSection">
      <div className="">
        <h2 className="title section-title is-spaced has-text-centered is-size-3-tablet title-text-color"><span className="underline white">About Me</span></h2>
        <h3 className="subtitle section-subtitle has-text-centered has-text-weight-normal subtitle-text-color">I am using this section, to brag about myself.</h3>
      </div>
      <div className="empty-div-aboutme" />
      <div className="margin-bottom-2">
        <div className="columns is-variable is-5-tablet is-6-desktop is-8-widescreen is-8-fullhd is-centered is-vcentered">

          <div className="column is-6-tablet is-5-desktop is-4-widescreen is-4-fullhd content-wrapper">
            <div className="content">
              <h4 className="title">I currently work at Falabella <br />as Senior Software Engineer.</h4>
              <p>
                I'm a product enthusiast while always working hard to solve  users problems with an entrepreneurial mindset.
              </p>
              <p>
                Though my expertise lies in  bringing great user experience to life, I don't limit myself to just front end development.
              </p>
              <p>
                I banter between scaling front-end applications
  and learning back-end development.
              </p>
              <p>
                I also keep an eye on user experience, design
  and artificial intelligence .
              </p>
              <br />
            </div>
          </div>
          <div className="column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen is-3-fullhd is-centered">
            {/* <figure className="image about-me-person-img">
              <img src={IMG_PERSON} alt="Deepak Kumar Jain" />
            </figure> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
