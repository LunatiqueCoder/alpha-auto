import React from  'react';
import Navbar from '../../components/Navbar';
import SimpleSlider from '../../components/hero';
import FooterSection from '../../components/Footer';
import Services from '../../components/services';
import ContactSection from '../../components/Contactpage';
import CallNowSection from '../../components/CallNow';
import FeedbackForm from '../../components/FeedbackForm';
import Pricing from '../../components/Pricing';
import TeamSection from '../../components/Team';

const Homepage = () => {
  return (
   <div className="page-wrapper">
     <CallNowSection/>
     <Navbar/>
     <SimpleSlider/>
     <Services/>
     <Pricing/>
     <ContactSection/>
     {/*<FeedbackForm/>*/}
     {/*<TeamSection/>*/}
     <FooterSection/>
   </div>
  )
}

export default Homepage;
