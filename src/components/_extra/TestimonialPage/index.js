import React from "react";

// components
import Navbar from "../../Navbar";
import PageTitle from "../breadcumb";
import FooterSection from "../../Footer";
import Testimonial from "../testimonial";

const TestimonialPage = () => {
  return (
    <div className="page-wrapper inner-page home-s-3">
      <Navbar />
      <PageTitle bdtitle={"Testimonials"} bdsub={"Testimonials"} />
      <Testimonial />
      <FooterSection />
    </div>
  );
};

export default TestimonialPage;
