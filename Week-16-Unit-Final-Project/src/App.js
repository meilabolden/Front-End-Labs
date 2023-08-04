// Coding Steps:
// Using an online API of your choice (or if no API can be found, using an array for in-memory storage is okay as well), create a React project of your choice. You will be working on this for the next three weeks. 
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 components
// Allow for all CRUD operations


import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// import Home from './Components/Home.js'
// import About from './Components/About.js'
// import Merch from './Components/Merch.js'
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './Components/Nav.js';
import './App.css';


function App() {

  return <NavBar />


    
}

export default App;


// export default function App() {
//   return (
//     <main>
//       <Nav />
//     </main>

    // Your entire App.js is the router.
    // <Container>
    //   <Router>
    //   {/* This is your Nav element, that users can see. */}
        // <div>
        //   <ButtonGroup>
        //       <Button variant="outline-warning">
        //         <Link to="/">Home</Link>
        //       </Button>
        //       <Button variant="warning">
        //         <Link to="/about">About</Link>
        //       </Button>
        //       <Button variant="dark">
        //         <Link to="/merch">Merch</Link>
        //       </Button>
        //       <Button variant="info">
        //         <Link to="/contact">Contact Us</Link>
        //       </Button>
        //   </ButtonGroup>

        //   <Switch>
        //     <Route path="/contact">
        //       <Shop />
        //     </Route>

        //     <Route path="/merch">
        //       <Shop />
        //     </Route>

        //     <Route path="/about">
        //       <About />
        //     </Route>

        //     <Route path="/">
        //       <Home />
        //     </Route>

        //   </Switch>
        // </div>
    //   </Router>
    // </Container>
    
//   )
// }
