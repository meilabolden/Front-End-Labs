import React, {Component} from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Home from './Components/Home.js'
// import About from './Components/About.js'
// import Merch from './Components/Merch.js'
import TRHLogo from './TRH-images/TRH Logo.png';
import { Button, ButtonGroup } from 'react-bootstrap';
import {BrowserRouter as Link} from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className='nav'>
            <marquee><img src={TRHLogo} height="30px" /> </marquee>

                <Link to="home.html" >Home</Link>
                <Link to="about.html">About Us</Link>
                <Link to="contact.html">Contact Us</Link>
                <Link to="merch.html">Merch</Link>
                <Link target="_blank" to="https://www.facebook.com/therabbitholelv/">Facebook</Link>
                <Link target="_blank" to="https://www.instagram.com/therabbitholelv/?hl=en">Instagram</Link>
                <Link target="_blank" to="https://soundcloud.com/therabbitholelv">SoundCloud</Link>
           
            <div>
                <Link to='/' className='site-title'>The Rabbit Hole LV</Link><img src={TRHLogo} height="30px" />
            </div>
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
        
//                         <Switch>
//                             <Route path="/contact">
//                             <Shop />
//                             </Route>
        
//                             <Route path="/merch">
//                             <Shop />
//                             </Route>
        
//                             <Route path="/about">
//                             <About />
//                             </Route>
        
//                             <Route path="/">
//                             <Home />
//                             </Route>
        
//                         </Switch>
//                     </div>
//                 </Router>
//             </nav>
//         )
//     }
// }