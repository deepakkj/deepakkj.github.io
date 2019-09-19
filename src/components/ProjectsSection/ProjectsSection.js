import React from "react";

import "./ProjectsSection.scss";

import { IMG_PROJECT_PREVIEW_MUTEX, IMG_PROJECT_PREVIEW_DECO_TRANSACTIONAL, IMG_PROJECT_PREVIEW_DECO_TRANSACTIONAL_BACKOFFICE } from './../../images';

const ProjectsSection = () => {
  return (
    <section className="section container" id="projects">
      <div className="">
        <h2 className="title section-title is-spaced has-text-centered is-size-3-tablet title-text-color"><span className="underline dark-grey">Projects</span></h2>
        <h3 className="subtitle section-subtitle has-text-centered has-text-weight-normal subtitle-text-color">Below are few of my select work that I have worked upon.</h3>
      </div>
      <div className="margin-bottom-2">
        <div className="columns is-variable is-5-tablet is-6-desktop is-8-widescreen is-8-fullhd">
  
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={IMG_PROJECT_PREVIEW_MUTEX} alt="Mutex Homes: Refer real estates and earn" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media margin-bottom-0point5">
                  <div className="media-content">
                    <p className="title is-5 has-text-weight-normal">Mutex Homes</p>
                    <p className="subtitle is-7 has-text-weight-light">React Engineer</p>
                  </div>
                </div>
                <div className="content">
                Mutex is a new platform which gives everyday people the opportunity to earn money for introducing realtors or home sellers to potential home buyers in their network.
                  <br />
                  <time dateTime="2018-12-12" className="is-size-7">December, 2018 - Current</time>
                </div>
              </div>
            </div>
          </div>
         
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={IMG_PROJECT_PREVIEW_DECO_TRANSACTIONAL} alt="Deco Transactional" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media margin-bottom-0point5">
                  <div className="media-content">
                    <p className="title is-5 has-text-weight-normal">Deco Transactional</p>
                    <p className="subtitle is-7 has-text-weight-light">Front End Architect</p>
                  </div>
                </div>
                <div className="content">
                A digital platform providing inspiration, ideas and advice, making it easier for home customers to realize their projects.
                  <br />
                  <time dateTime="2018-4-4" className="is-size-7">April 2018 - Current</time>
                </div>
              </div>
            </div>
          </div>
         
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={IMG_PROJECT_PREVIEW_DECO_TRANSACTIONAL_BACKOFFICE} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media margin-bottom-0point5">
                  <div className="media-content">
                    <p className="title is-5 has-text-weight-normal">Deco Transactional - Back Office</p>
                    <p className="subtitle is-7 has-text-weight-light">Front End Architect</p>
                  </div>
                </div>
                <div className="content">
                  A complete CMS based Backoffice system that enables designers to create multiple projects and campaigns across countries
                  <br />
                  <time dateTime="2019-1-1" className="is-size-7">January 2019 - Current</time>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="has-text-centered">
        <a className="button is-outlined is-primary" href="#getInTouchSection">View All Projects</a>
      </div>
    </section>
  );
}

export default ProjectsSection;
