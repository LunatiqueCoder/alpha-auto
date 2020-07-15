import React from  'react';

// components
import Navbar from '../../Navbar'
import SimpleSlider2 from '../hero2'
import FooterSection from '../../Footer'
import Features from '../features'
import AboutSection2 from '../about2'
import Services from '../../ServicesSection/Desktop'
import FunFact2 from '../FunFact2'
import Testimonial from '../testimonial'
import TeamSection from '../TeamSection'
import BlogSection from '../BlogSection'
import ContactSection from '../ContactSection'
import PartnerSlider from '../partner'


const Homepage2 = () => {
    return(
       <div className="page-wrapper">
           <Navbar/>
           <SimpleSlider2/>
           <Features/>
           <AboutSection2/>
           <Services/>
           <FunFact2/>
           <Testimonial/>
           <TeamSection/>
           <BlogSection/>
           <ContactSection/>
           <PartnerSlider/>
           <FooterSection/>
       </div>
    )
}

export default Homepage2;