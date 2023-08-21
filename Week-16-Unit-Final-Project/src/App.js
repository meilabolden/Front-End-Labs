// Coding Steps:
// Using an online API of your choice (or if no API can be found, 
//  using an array for in-memory storage is okay as well), create a 
//  React project of your choice. You will be working on this for the next three weeks. 
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

import Home from './Components/Home.js';
import About from './Components/About.js';
import Merch from './Components/Merch.js';
import Contact from './Components/Contact.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './Components/Nav.js';
import './App.css';


function App() {

  return (
    <>
      <NavBar />
      <Footer />
    </>
  )
}

export default App;

