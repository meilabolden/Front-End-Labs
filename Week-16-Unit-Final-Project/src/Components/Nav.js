import React, {Component} from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Home from './Components/Home.js'
// import About from './Components/About.js'
// import Merch from './Components/Merch.js'
import TRHLogo from './TRH-images/TRH Logo.png';
import { Button, ButtonGroup } from 'react-bootstrap';


export default function NavBar() {
    return <nav className='nav'>
            <marquee><img src={TRHLogo} height="30px" /> </marquee>

            <ButtonGroup variant='Dark'>
                <Button><a href="home.html" >Home</a></Button>
                <Button><a href="about.html">About Us</a></Button>
                <Button><a href="contact.html">Contact Us</a></Button>
                <Button><a href="merch.html">Merch</a></Button>
                <Button><a target="_blank" href="https://www.facebook.com/therabbitholelv/">Facebook</a></Button>
                <Button><a target="_blank" href="https://www.instagram.com/therabbitholelv/?hl=en">Instagram</a></Button>
                <Button><a target="_blank" href="https://soundcloud.com/therabbitholelv">SoundCloud</a></Button>
            </ButtonGroup>
            <a href='/' className='site-title'>The Rabbit Hole LV</a>
        </nav>
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