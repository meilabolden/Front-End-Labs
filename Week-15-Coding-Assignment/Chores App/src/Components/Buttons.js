import React from "react";
import { Form, Button } from "react-bootstrap";



export default function Buttons() {
// button will delete data from the table
    function deleteUser(id){
        fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        }).then(() => getUsers())
      }
    return (
        <Button onClick={deleteUser}>DELETE</Button>
    )
}