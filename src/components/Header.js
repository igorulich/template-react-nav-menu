import React, { Component } from 'react'
import { Container, Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap'
import logo from '../images/logo.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

import Home from '../pages/Home'
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
                    <Container fluid className='d-block'>
                        <NavbarToggle aria-controls='responsive-navbar-nav' />
                        <NavbarCollapse id='responsive-navbar-nav'>
                            <Nav className='container justify-content-between'>
                                <NavLink href='/about'>About</NavLink>
                                <NavLink href='/gallery'>Gallery</NavLink>

                                <NavbarBrand href='/'>
                                    <img
                                        src={logo}
                                        height={31}
                                        width={97}
                                        className='d-inline-block aligin-top'
                                        alt='Logo'
                                    />
                                </NavbarBrand>

                                <NavLink href='/blog'>Blog</NavLink>
                                <NavLink href='/contact'>Contact</NavLink>

                            </Nav>
                        </NavbarCollapse>

                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/gallery" component={Gallery} />
                                <Route exact path="/blog" component={Blog} />
                                <Route exact path="/contact" component={Contact} />
                            </Switch>
                        </Router>
                    </Container>
                </Navbar>
            </>
        )
    }
}
