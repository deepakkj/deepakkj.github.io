import React from "react";

import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-white has-text-centered">
        <p>
          © 2019 &amp; ℗ by <a className="has-text-white" href="https://www.deepakkumarjain.com" rel="noopener noreferrer" target="_blank">Deepak Kumar Jain</a>.
          <a href="https://bulma.io" className="is-pulled-right line-height-0">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
          </a>
        </p>
      </div>
    </footer>
      );
    }
    
    export default Footer;
