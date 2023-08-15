import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Home from './Home.js';
import About from './About.js';
import Merch from './Merch.js';
import Contact from './Contact.js';
import TRHLogo from './TRH-images/TRH Logo.png';
import { Button, ButtonGroup } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Header.js';
import Cart from './Cart.js';
import {Cart3} from 'react-bootstrap-icons';
import Announcements from './Announcements.js';


export default function NavBar() {
    return (
        <nav className='nav'>
            
            <Header />

                <Nav variant='underline' className='nav-links'>
                     <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/merch">Merch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/announcements">Announcements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.facebook.com/therabbitholelv/" target="_blank" rel="noreferrer">Facebook</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.instagram.com/therabbitholelv/?hl=en" target="_blank" rel="noreferrer">Instagram</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://soundcloud.com/therabbitholelv" target="_blank" rel="noreferrer">SoundCloud</Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/cart">My Cart<Cart3 size={20}/></Nav.Link>
                    </Nav.Item>
                </Nav>


            

           
            <Router>
            <Route path="/cart">
                <Cart />
                </Route>

                <Route path="/contact">
                <Contact />
                </Route>
        
                <Route path="/merch">
                <Merch />
                </Route>

                <Route path="/announcements">
                <Announcements />
                </Route>
        
                <Route path="/about">
                <About />
                </Route>
        
                <Route path="/home">
                <Home />
                </Route>
        
            </Router>
                       
        </nav>
        
    )
}

