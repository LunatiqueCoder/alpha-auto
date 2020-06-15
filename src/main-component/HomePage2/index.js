import React from  'react';

// components
import Navbar from '../../components/Navbar'
import SimpleSlider2 from '../../components/hero2'
import FooterSection from '../../components/Footer'
import Features from '../../components/features'
import AboutSection2 from '../../components/about2'
import Services from '../../components/services'
import FunFact2 from '../../components/FunFact2'
import Testimonial from '../../components/testimonial'
import TeamSection from '../../components/Team'
import BlogSection from '../../components/BlogSection'
import ContactSection from '../../components/ContactSection'
import PartnerSlider from '../../components/partner'


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