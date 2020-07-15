import React from  'react';
import ContactSection from '../ContactSection';
import CallNowSection from '../CallNowButton';
import FooterSection from '../Footer';
import Navbar from '../Navbar';
import ServicesSectionDesktop from '../ServicesSection/Desktop';
import ServicesSectionMobile from '../ServicesSection/Mobile';
import Hero from '../Hero';

// import FeedbackForm from '../../components/FeedbackForm';
// import TeamSection from '../../components/Team';

const Homepage = () => {
  return (
   <div className="page-wrapper">
     <CallNowSection/>
     <Navbar/>
     <Hero/>
     <ServicesSectionDesktop/>
     <ServicesSectionMobile/>
     <ContactSection/>
     <FooterSection/>
   </div>
  )
}

export default Homepage;
