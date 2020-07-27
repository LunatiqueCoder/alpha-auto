import React from "react";
import pr1 from "../../../images/404.png";
import { Link } from "react-router-dom";
import "./style.css";

const Error = (props) => {
  const ClickHandler = () => {
    window.scrollTo(500, 0);
  };
  return (
    <section className="error-404-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="content clearfix">
              <div className="error">
                <img src={pr1} alt="" />
              </div>
              <div className="error-message">
                <h3>Oops! Page Not Found!</h3>
                <p>
                  We’re sorry but we can’t seem to find the page you requested.
                  This might be because you have typed the web address
                  incorrectly.
                </p>
                <Link onClick={ClickHandler} to="/" className="theme-btn-s2">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
