import React from "react";

import SocialMediaConnect from './../SocialMediaConnect/SocialMediaConnect';
import ContactMeForm from './ContactMeForm';

import { ReactComponent as ICON_MAIL } from "../../images/001-envelope.svg";
import { ReactComponent as ICON_WHATSAPP } from "../../images/002-phone-call.svg";
import { ReactComponent as ICON_HOME } from "../../images/003-house.svg";
import "./GetInTouchSection.scss";


const GetInTouchSection = () => {
  return (
    <section className="section container" id="getInTouchSection">
      <div className="">
        <h2 className="title section-title is-spaced has-text-centered is-size-3-tablet title-text-color"><span className="underline dark-grey">Get In Touch</span></h2>
        <h3 className="subtitle section-subtitle has-text-centered has-text-weight-normal subtitle-text-color">
          <span className="tag-pill bg-9C27B0">Do you have ideas that you want to share or co-create with me?</span>
          <span className="tag-pill bg-673AB7">Do you want to hire me(part-time/full-time/freelance/remote)?</span>
          <span className="tag-pill bg-3F51B5">Do you want to give feedback about this site?</span>
          <span className="tag-pill bg-2196F3">Do you want to give feedback about me?</span>
          <span className="tag-pill bg-03A9F4">Do you just want to know me better?</span>
          <span className="tag-pill bg-00BCD4">Do you want me to start-up with you?</span>
          <span className="tag-pill bg-969FAA">Do you want to discuss problems?</span>
        </h3>
      </div>
      <div className="margin-bottom-0">
        <div className="columns is-variable is-5-tablet is-6-desktop is-8-widescreen is-8-fullhd is-centered">
          <div className="column is-5">
            <div className="contact-info-section margin-bottom-3">
              <h4 className="subtitle has-text-dark-theme has-text-weight-semibold margin-bottom-1">You can reach me via</h4>
              <p className="contact-info has-text-weight-light margin-bottom-0point5 is-size-5"><a href="mailto: deepakkumarjain21@gmail.com"><span className="svg-icon">
                <ICON_MAIL />
              </span>deepakkumarjain21@gmail.com</a></p>
              <p className="contact-info has-text-weight-light margin-bottom-0point5 is-size-5"><a href="tel:+91-9036871823"><span className="svg-icon">
                <ICON_WHATSAPP />
              </span>+91-9036871823</a></p>
              <p className="contact-info has-text-weight-light margin-bottom-0point5 is-size-5"><a href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9542946,77.4908545,11z/"><span className="svg-icon">
                <ICON_HOME />
              </span>Bengaluru, India</a></p>
            </div>
            <div className="contact-info-section">
              <h4 className="subtitle has-text-dark-theme has-text-weight-semibold margin-bottom-0point5">Social Connect</h4>
              <SocialMediaConnect />
            </div>
          </div>
          <div className="column is-0">
            <div className="center-or-div">
              <div className="vertical-line is-size-4">OR</div>
            </div>
          </div>
          <div className="column is-5">
            <ContactMeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchSection;
