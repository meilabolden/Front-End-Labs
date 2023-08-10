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


export default function NavBar() {
    return (
        <nav className='nav'>
            <marquee><img src={TRHLogo} height="30px" /> </marquee>

            <ul>
                <ButtonGroup className='nav-button'>
                     <Button>
                        <a href="/">Home</a>
                    </Button>
                    <Button>
                        <a href="/about">About</a>
                    </Button>
                    <Button>
                        <a href="/merch">Merch</a>
                    </Button>
                    <Button>
                        <a href="/contact">Contact Us</a>
                    </Button>
                    <Button>
                        <a target="_blank" href="https://www.facebook.com/therabbitholelv/">Facebook</a>
                    </Button>
                    <Button>
                        <a target="_blank" href="https://www.instagram.com/therabbitholelv/?hl=en">Instagram</a>
                    </Button>
                    <Button>
                        <a target="_blank" href="https://soundcloud.com/therabbitholelv">SoundCloud</a> 
                    </Button>
                </ButtonGroup>
            </ul>

            <div>
                <h1 className='site-title'>The Rabbit Hole LV</h1><img src={TRHLogo} height="30px" />
            </div>

           
            <Router>
                <Route path="/contact">
                <Contact />
                </Route>
        
                <Route path="/merch">
                <Merch />
                </Route>
        
                <Route path="/about">
                <About />
                </Route>
        
                <Route path="/">
                <Home />
                </Route>
        
            </Router>
            

                {/* <Link to="home.html" >Home</Link>
                <Link to="about.html">About Us</Link>
                <Link to="contact.html">Contact Us</Link>
                <Link to="merch.html">Merch</Link>
                <Link target="_blank" to="https://www.facebook.com/therabbitholelv/">Facebook</Link>
                <Link target="_blank" to="https://www.instagram.com/therabbitholelv/?hl=en">Instagram</Link>
                <Link target="_blank" to="https://soundcloud.com/therabbitholelv">SoundCloud</Link> */}
           
        </nav>
    )
}


// export default class Nav extends React.Component {
	
//     render() {
//         return (
//             <nav className='navBar'>
//                 <Router>
//                 {/* This is the Nav element, that users can see. */}
//                     <div>
//                         <ButtonGroup>
//                             <Button variant="outline-warning">
//                                 <Link to="/">Home</Link>
//                             </Button>
//                             <Button variant="warning">
//                                 <Link to="/about">About</Link>
//                             </Button>
//                             <Button variant="dark">
//                                 <Link to="/merch">Merch</Link>
//                             </Button>
//                             <Button variant="info">
//                                 <Link to="/contact">Contact Us</Link>
//                             </Button>
//                         </ButtonGroup>
        
                        // <Switch>
                        //     <Route path="/contact">
                        //     <Shop />
                        //     </Route>
        
                        //     <Route path="/merch">
                        //     <Shop />
                        //     </Route>
        
                        //     <Route path="/about">
                        //     <About />
                        //     </Route>
        
                        //     <Route path="/">
                        //     <Home />
                        //     </Route>
        
                        // </Switch>
//                     </div>
//                 </Router>
//             </nav>
//         )
//     }
// }