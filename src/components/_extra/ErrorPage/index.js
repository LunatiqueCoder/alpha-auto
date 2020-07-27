import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import FooterSection from "../../Footer";
import Error from "../404";

const ErrorPage = () => {
  return (
    <div className="page-wrapper inner-page home-s-3">
      <Navbar />
      <PageTitle bdtitle={"404"} bdsub={"404"} />
      <Error />
      <FooterSection />
    </div>
  );
};

export default ErrorPage;
