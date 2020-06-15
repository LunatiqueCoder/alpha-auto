import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import Error from '../../components/404'


const ErrorPage = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'404'} bdsub={'404'}/>
           <Error/>
           <FooterSection/>
       </div>
    )
}

export default ErrorPage;