import React from "react";

import CustomCarousel from './../CustomCarousel/CustomCarousel';
import "./ClientsListSection.scss";

import {
  IMG_CLIENTS_LOGO_FALABELLA,
  IMG_CLIENTS_LOGO_HARMAN,
  IMG_CLIENTS_LOGO_HEPSIBURADA,
  IMG_CLIENTS_LOGO_MICROSOFT,
  IMG_CLIENTS_LOGO_SIMMONS,
  IMG_CLIENTS_LOGO_SODIMAC,
  IMG_CLIENTS_LOGO_UNDERARMOUR
} from './../../images';

const ClientsListSection = () => {
  const logos = [{
    id: 1,
    img: IMG_CLIENTS_LOGO_FALABELLA,
    title: 'falabella'
  }, {
    id: 2,
    img: IMG_CLIENTS_LOGO_SODIMAC,
    title: 'sodimac'
  }, {
    id: 3,
    img: IMG_CLIENTS_LOGO_HARMAN,
    title: 'harman'
  }, {
    id: 4,
    img: IMG_CLIENTS_LOGO_SIMMONS,
    title: 'simmons research'
  }, {
    id: 5,
    img: IMG_CLIENTS_LOGO_UNDERARMOUR,
    title: 'under armour'
  }, {
    id: 6,
    img: IMG_CLIENTS_LOGO_MICROSOFT,
    title: 'microsoft'
  }, {
    id: 7,
    img: IMG_CLIENTS_LOGO_HEPSIBURADA,
    title: 'hepsiburada'
  }];
return (
  <section className="section container" id="clients">
    <div className="">
      <h2 className="title section-title is-spaced has-text-centered is-size-3-tablet title-text-color"><span className="underline dark-grey">Clients</span></h2>
      <h3 className="subtitle section-subtitle has-text-centered has-text-weight-normal subtitle-text-color">Some of the amazing clients that I have got an opportunity to worked with.</h3>
    </div>
    <CustomCarousel cards={logos} />
  </section>
);
}

export default ClientsListSection;
