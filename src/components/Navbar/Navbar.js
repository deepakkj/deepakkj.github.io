import React, { Component } from "react";
import IMG_LOGO from "../../images/dkj.svg";
import "./navbar.scss";

class Navbar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const isTop = window.scrollY < 180;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }
  }

  componentWillUnmount() {
    document.addEventListener('scroll');
  }

  render() {
    return (
      <nav
        className={`navbar is-spaced is-fixed-top ${this.state.isTop ? 'transparent-navbar is-transparent' : 'dark-navbar is-dark'}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              className="navbar-brand-logo"
              src={IMG_LOGO}
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {/* <a className="navbar-item has-text-white" href="#">Home</a> */}
            <a className="navbar-item has-text-white">Projects</a>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-inverted is-outlined">
                  Download CV
                </a>
                <a className="button is-border-white is-inverted" href="#getInTouchSection">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;