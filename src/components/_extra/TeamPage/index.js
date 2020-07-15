import React from  'react';

// components
import Navbar from '../../Navbar'
import PageTitle from '../breadcumb'
import FooterSection from '../../Footer'
import TeamSection from '../TeamSection'


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