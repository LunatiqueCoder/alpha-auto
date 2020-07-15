import React from  'react';

// components
import Navbar from '../../Navbar'
import PageTitle from '../breadcumb'
import FooterSection from '../../Footer'
import BlogList from '../BlogList'


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