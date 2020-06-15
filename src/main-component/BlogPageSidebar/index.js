import React from  'react';

// components
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/breadcumb'
import FooterSection from '../../components/Footer'
import BlogList from '../../components/BlogList'


const BlogPageSidebar = () => {
    return(
       <div className="page-wrapper inner-page home-s-3">
           <Navbar/>
           <PageTitle bdtitle={'Latest News'} bdsub={'Blog'}/>
           <BlogList/>
           <FooterSection/>
       </div>
    )
}

export default BlogPageSidebar;