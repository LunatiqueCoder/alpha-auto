import React from  'react';
import CallNowSection from '../CallNowButton';
import ContactSection from '../ContactSection';
import FooterSection from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';
import ServicesSectionDesktop from '../ServicesSection/Desktop';
import ServicesSectionMobile from '../ServicesSection/Mobile';

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
