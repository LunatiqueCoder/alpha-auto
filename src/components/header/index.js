import React from 'react';
import MobileMenu from '../../components/MobileMenu'
import logo from '../../images/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './style.css'

const Header = (props) => {
    return(
            <header>
                <div className="header-style-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-10 col-sm-10 col-10 col-t">
                                <div className="logo">
                                    <AnchorLink href='#hero'><img className={props.logoStyle} src={logo} alt="Alpha Auto Logo"/></AnchorLink>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 d-none d-lg-block col-m">
                                <div className={props.menuStyle}>
                                    <nav className="nav_mobile_menu">
                                        <ul>
                                            <li className="active">
                                              <AnchorLink href='#hero'>Acasă</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='100' href='#services'>Servicii</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='10' href='#contact'>Contact</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='10' href='#appointment'>Programări</AnchorLink>
                                            </li>
                                            <li>
                                              <AnchorLink offset='10' href='#feedback'>Feedback</AnchorLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-1 col-2">
                                <MobileMenu showMenuStyle={props.showMenuStyle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
     )

}

export default Header;
