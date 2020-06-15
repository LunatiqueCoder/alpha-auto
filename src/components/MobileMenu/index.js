import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'

import PerfectScrollbar from 'react-perfect-scrollbar'

import './style.css';

import 'react-perfect-scrollbar/dist/css/styles.css';
const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
        ]
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        title: 'Service',
        submenu: [
            {
                id: 31,
                title: 'Service',
                link: '/services',
            },
            {
                id: 32,
                title: 'Service single',
                link: '/service-details',
            },

        ]
    },
    {
        id: 7,
        title: 'Pages',
        submenu: [
            {
                id: 71,
                title: 'Pricing',
                link: '/pricing',
            },
            {
                id: 72,
                title: 'Team',
                link: '/team',
            },
            {
                id: 73,
                title: 'Testimonials',
                link: '/testimonials',
            },
            {
                id: 74,
                title: '404',
                link: '/404',
            },
        ]
    },
    {
        id: 4,
        title: 'Blog',
        submenu: [
            {
                id: 41,
                title: 'Blog',
                link: '/blog',
            },
            {
                id: 42,
                title: 'Blog List',
                link: '/blog-grid',
            },
            {
                id: 43,
                title: 'Blog single',
                link: '/blog-details',
            },
        ]
    },
  
    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    },
    
]


class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <PerfectScrollbar >
                    <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                        {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                        <ul className="responsivemenu">
                            {menus.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                            {item.title}
                                            {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                        </p> : <Link to={item.link}>{item.title}</Link>}
                                        {item.submenu ?
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                        : ''}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </PerfectScrollbar>
                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default MobileMenu;