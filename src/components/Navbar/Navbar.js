import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { IMG_LOGO } from "../../images";
import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      showHamburgerMenu: false
    };
    this.toggleContainer = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener("click", this.onClickOutsideHandler);
  }

  onScroll = () => {
    const isTop = window.scrollY < 10;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener("click", this.onClickOutsideHandler);
  }

  getNavbarClass = () => {
    const { theme } = this.props;
    const { isTop, showHamburgerMenu } = this.state;
    if(showHamburgerMenu) {
      return isTop ? 'dark-navbar is-dark' : 'dark-navbar is-dark navbar-decrease';
    }
    if (theme === 'dark') {
      return isTop ? 'dark-navbar is-dark' : 'dark-navbar is-dark navbar-decrease'
    } else {
      return isTop ? 'transparent-navbar is-transparent' : 'dark-navbar is-dark navbar-decrease';
    }
  }

  handleCloseMobileHamburger = () => {
    this.setState({ showHamburgerMenu: false });
  }

  handleMobileHamburgerClick = () => {
    this.setState(prevState => ({ showHamburgerMenu: !prevState.showHamburgerMenu }));
  }

  onClickOutsideHandler = (event) => {
    if (
      this.state.showHamburgerMenu &&
      !this.toggleContainer.current.contains(event.target)
    ) {
      this.setState({ showHamburgerMenu: false });
    }
  }

  gotoSection = (el) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  render() {
    const navBarClass = this.getNavbarClass();
    return (
      <nav
        className={`navbar is-spaced is-fixed-top ${navBarClass}`}
        role="navigation"
        aria-label="main navigation"
        ref={this.toggleContainer}
      >
        <div className="navbar-brand">
          <Link className="navbar-item navbar-brand-logo-item" to="/">
            <img
              className="navbar-brand-logo"
              src={IMG_LOGO}
              width="112"
              height="28"
              alt="Deepak Kumar Jain"
            />
          </Link>

          <button
            className={`navbar-burger burger ${this.state.showHamburgerMenu ? 'is-active': null}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            rel="noopener noreferrer"
            onClick={this.handleMobileHamburgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id="navbarBasicExample" onClick={this.handleCloseMobileHamburger} className={`navbar-menu ${this.state.showHamburgerMenu ? 'is-active has-text-centered': null}`}>
          <div className="navbar-end">
            {/* <a className="navbar-item has-text-white" href="#">Home</a> */}
            <Link className="navbar-item has-text-white" to="/#aboutMeSection" scroll={this.gotoSection}>About Me</Link>
            <Link className="navbar-item has-text-white" to="/project">All Projects</Link>
            <div className="navbar-item">
                <a className="button is-primary is-inverted is-outlined" href="http://bit.ly/deepakkumarjain_cv_resume" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
            </div>
            <div className="navbar-item">
              <Link className="button is-border-white is-inverted" to="/#getInTouchSection" scroll={this.gotoSection}>Get In Touch</Link>
                {/* <a className="button is-border-white is-inverted" href="#getInTouchSection" rel="noopener noreferrer">Get In Touch</a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  theme: 'transparent'
};

export default Navbar;
