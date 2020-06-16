import React from 'react';
import {Link} from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import logo from '../../images/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.css'

const Header = (props) => {
    const SubmitHandler = ( e ) => {
       e.preventDefault()
    }

    const ClickHandler = () => {
      window.scrollTo(500, 0);
    }

    return(
            <header>
                <div className="header-style-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
                                <div className="logo">
                                    <AnchorLink href='#hero'><img className={props.logoStyle} src={logo} alt=""/></AnchorLink>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block col-m">
                                <div className="main-menu">
                                    <nav className="nav_mobile_menu">
                                        <ul>
                                            <li className="active">
                                              <AnchorLink href='#hero'>Acasă</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='100' href='#services'>Servicii</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='27' href='#packages'>Pachete</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='10' href='#contact'>Contact</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='10' href='#team'>Despre</AnchorLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 col-2">
                                <MobileMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
     )

}

export default Header;
