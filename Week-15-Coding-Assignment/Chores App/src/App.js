import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


export default function App() {

  const API_URL = 'https://649a1bd479fbe9bcf8404a5a.mockapi.io/familyChores';

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
    <div>
      <h1>Family Chores App</h1>
    </div>

  );
}
