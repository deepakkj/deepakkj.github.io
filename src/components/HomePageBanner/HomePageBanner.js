import React from "react";

import SocialMediaConnect from './../SocialMediaConnect/SocialMediaConnect';
import "./HomePageBanner.scss";

const HomePageBanner = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body is-paddingless">
        <div className="container is-fluid is-marginless">
        <figure className="image">
            <div className="bg-img">
              <div className="content has-text-white has-text-centered">
                <h1 className="title has-text-white is-size-4-mobile is-size-1-tablet">Hi, I'm <span className="underline white">Deepak Kumar Jain</span>.</h1>
                <h2 className="subtitle has-text-white is-size-5-mobile is-size-3-tablet has-text-weight-light margin-top-0">An Engineer by passion <br/>who loves to build products that has <br />the potential to make an <span className="has-text-weight-normal">impact</span>.</h2>
                <SocialMediaConnect fillColor="rgba(255, 255, 255, 0.8)" />
              </div>
          </div>
        </figure>
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
