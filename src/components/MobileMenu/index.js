import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";

class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  render() {
    const { isMenuShow } = this.state;

    return (
      <div>
        <PerfectScrollbar>
          <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
            <ul className="responsivemenu">
              <li className="active">
                <AnchorLink
                  onClick={() => this.setState({ isMenuShow: false })}
                  href="#hero"
                >
                  Acasă
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={() => this.setState({ isMenuShow: false })}
                  offset="50"
                  href="#services-mobile"
                >
                  Servicii
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={() => this.setState({ isMenuShow: false })}
                  offset="20"
                  href="#contact"
                >
                  Contact
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={() => this.setState({ isMenuShow: false })}
                  offset="10"
                  href="#appointment"
                >
                  Programări
                </AnchorLink>
              </li>
              {/*<li>*/}
              {/*  <AnchorLink onClick={() => this.setState({isMenuShow: false})}  offset='10' href='#feedback'>Feedback</AnchorLink>*/}
              {/*</li>*/}
            </ul>
          </div>
        </PerfectScrollbar>
        <div className={this.props.showMenuStyle} onClick={this.menuHandler}>
          <i
            className={`fa ${this.state.isMenuShow ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
}

export default MobileMenu;
