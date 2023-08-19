import React from "react";
import { Container, Form, FormGroup, Table, Button } from "react-bootstrap";
import Message from './MessageBoard.js';
import { createRef, Component } from 'react';


export default function Announcements() {
    return(
        // Announcements will display all be the CRUD application to create, read, update, and delete upcoming show events
        <Container>
            <Message />
        </Container>
    )
}