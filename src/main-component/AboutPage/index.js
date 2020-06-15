import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import AboutSection from '../../components/about'
import Services from '../../components/services'
import FunFact2 from '../../components/FunFact2'
import TeamSection from '../../components/Team'


const Aboutpage = () => {
    return(
       <div className="page-wrapper inner-page">
           <Navbar/>
           <PageTitle bdtitle={'About Us'} bdsub={'About'}/>
           <AboutSection/>
           <FunFact2/>
           <Services/>
           <TeamSection/>
           <FooterSection/>
       </div>
    )
}

export default Aboutpage;