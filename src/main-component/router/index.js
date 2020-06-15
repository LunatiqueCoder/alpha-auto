import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Aboutpage from '../AboutPage'
import ServicePage from '../ServicePage'
import ServiceDetails from '../ServiceSingle'
import PricingPage from '../PricingPage'
import TeamPage from '../TeamPage'
import TestimonialPage from '../TestimonialPage'
import ErrorPage from '../ErrorPage'
import ContactPages from '../ContactPage'
import BlogPage from '../BlogPage'
import BlogPageSidebar from '../BlogPageSidebar'
import BlogSingleSidebar from '../BlogSingleSidebar'


const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/home' component={Homepage} />
              <Route path='/home2' component={Homepage2} />
              <Route path='/home3' component={Homepage3} />
              <Route path='/about' component={Aboutpage} />
              <Route path='/services' component={ServicePage} />
              <Route path='/service-details' component={ServiceDetails} />
              <Route path='/Pricing' component={PricingPage} />
              <Route path='/team' component={TeamPage} />
              <Route path='/testimonials' component={TestimonialPage} />
              <Route path='/404' component={ErrorPage} />
              <Route path='/contact' component={ContactPages} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/blog-grid' component={BlogPageSidebar} />
              <Route path='/blog-details' component={BlogSingleSidebar} />
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
