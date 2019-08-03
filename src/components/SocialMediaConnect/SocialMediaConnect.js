import React from "react";

// import IMG_LOGO from "../../images/homepagebanner.jpg";
import {ReactComponent as ICON_LINKEDIN} from "../../images/001-linkedin.svg";
// import {ReactComponent as ICON_LINKEDIN_1} from "../../images/002-linkedin-1.svg";
import {ReactComponent as ICON_FACEBOOK} from "../../images/003-facebook.svg";
// import {ReactComponent as ICON_FACEBOOK_1} from "../../images/004-facebook-1.svg";
import {ReactComponent as ICON_GITHUB} from "../../images/005-github.svg";
import {ReactComponent as ICON_TWITTER} from "../../images/006-twitter.svg";
// import {ReactComponent as ICON_TWITTER_1} from "../../images/007-twitter-1.svg";

import "./SocialMediaConnect.scss";


const SocialMediaConnect = ({ fillColor }) => {
  return (
    <div className="social-media-connect">
    <a href="https://www.linkedin.com/in/deepakkumarjain21" target="_blank" rel="noopener noreferrer">
      <ICON_LINKEDIN fill={fillColor} />
    </a>
    <a href="https://www.facebook.com/deepakkumarjain21" target="_blank" rel="noopener noreferrer">
      <ICON_FACEBOOK fill={fillColor} />
    </a>
    <a href="https://github.com/deepakkj" target="_blank" rel="noopener noreferrer">
      <ICON_GITHUB fill={fillColor} />
    </a>
    <a href="https://twitter.com/deepak_kj" target="_blank" rel="noopener noreferrer">
      <ICON_TWITTER fill={fillColor} />
    </a>
  </div>
  );
}

SocialMediaConnect.defaultProps = {
  fillColor: 'rgba(71, 82, 94, 0.8)'
}; 

export default SocialMediaConnect;
