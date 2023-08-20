// Coding Steps:
// Using the Houses API, or any open API of your choice you can find online, create a single page that 
//  allows for all 4 CRUD operations to be performed on a resource from the API. 
// Create a React component (or more, if needed) to represent the resource. 
// Make all forms and other necessary UI pieces their own components as reasonable.


import React, { Component } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Forms from './Components/Forms';
import TableInfo from './Components/Table';
import Banner from './Components/Images/choresBanner2.jpg';


export default function App() {
  
  const API_URL = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
  
  const [users, setUsers] = useState([{}]);

  const [newUserName, setNewUserName] = useState('');
  const [newChore, setNewChore] = useState('');


  function getUsers() {
    fetch(API_URL)
    .then(data => data.json())
    .then(data => setUsers(data))
  }
  
  useEffect(() => {
    getUsers()
    console.log(users)
  }, [])
  
  function deleteUser(id){
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getUsers())
  }





  return (
    <Container fluid>
      <div>
        <h1>Family Chores App</h1>
      </div>
      <img src={ Banner } className='banner'/>
      <Forms />
    </Container>

  );
}
