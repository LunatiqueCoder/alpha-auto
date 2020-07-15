import React from 'react';

import {Link} from 'react-router-dom'

import './style.css'

const PageTitle = (props) => {

    return(
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.bdtitle}</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><span>{props.bdsub}</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default PageTitle;
