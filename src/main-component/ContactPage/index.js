import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import Contactpage from '../../components/Contactpage'


const ContactPages = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Contact'} bdsub={'Contact'}/>
           <Contactpage/>
           <FooterSection/>
       </div>
    )
}

export default ContactPages;
