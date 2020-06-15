import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import TeamSection from '../../components/Team'


const TeamPage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Team'} bdsub={'Team'}/>
           <TeamSection/>
           <FooterSection/>
       </div>
    )
}

export default TeamPage;