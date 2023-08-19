import React from "react";
import { useState, useEffect } from 'react';
import { func } from "prop-types";
import { Container, Form, FormGroup, Table, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Create from "./CreatePost.js";

export default function Message() {
    
    // Host API
    const API_URL = 'https://649a1bd479fbe9bcf8404a5a.mockapi.io/familyChores';

    const [posts, setPosts] = useState([{}]);

    const [newUserName, setNewUserName] = useState('');
    const [newEventName, setNewEventName] = useState('');
    const [newEventDate, setNewEventDate] = useState('');
    const [newCommentBox, setNewCommentBox] = useState('');

    const [updatedUserName, setUpdatedUserName] = useState('');
    const [updatedEventName, setUpdatedEventName] = useState('');
    const [updatedEventDate, setUpdatedEventDate] = useState('');
    const [updatedCommentBox, setUpdatedCommentBox] = useState('');


    function getPosts() {
        fetch(`${API_URL}`)
        .then(data => data.json())
        .then(data => setPosts(data))
    }

    useEffect(() => {
        getPosts()
        console.log(posts)
    }, [])

    function deletePost(id) {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        }).then(() => getPosts())
    }

    function postNewPosts(e) {
        e.preventDefault()

        fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: newUserName,
                event: newEventName,
                eventDate: newEventDate,
                comment: newCommentBox
            })
        }).then(() => getPosts());
    }

    function updatePost(e, userObject) {
        e.preventDefault()

        let updatedUserObject = {
            ...userObject,
            name: updatedUserName,
            event: updatedEventName,
            eventDate: updatedEventDate,
            comment: updatedCommentBox
        }

        fetch(`${API_URL}/${userObject.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUserObject),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => getPosts());
    }

    // .get will display input on the table

    // $.get(API_URL).then(data => {
    //     data.map(post => {
    //         $('body').append(
    //             $(`
    //             <tr>
    //                 <td>${post.id}</td>
    //                 <td>${post.name}</td>
    //                 <td>${post.event}</td>
    //                 <td>${post.eventDate}</td>
    //                 <td>${post.commentBox}</td>
    //                 <td>${post.createdDate}</td>
    //                 <button id="deletePost" onClick="deletePost(${post.id})" className="btn btn-danger">Delete</button>
    //             </tr>
    //             `)
    //         )
    //     })
    // })

    // //.post will add input to the table

    // $('#addPost').on('click', function () {

    //     $.post(API_URL, {
    //         name: $('#new-name').val(),

    //         event: $('#new-event').val(),
    //         eventDate: $('#new-event-date').val(),
    //         commentBox: $('#new-comment').val(),
    //     })
    // }) 

    // // Delete will remove items by ID from the table

    // function deletePost(id) {
    //     $.ajax(`${API_URL}/${id}`, {
    //         method: 'DELETE'
    //     })
    // }

    // // Put will edit/update items by ID on the table

    // function updatePost() {
    //     $.ajax(`${API_URL}/${id}`, )
    // }

    return(
        <Container fluid>
         

            <h1 className="text-center">Post Upcoming Events</h1>

            {/* Not using Create component due to error that I can't figure out */}
            {/* <Create /> */}

            {/* Form should post the input data to the mockAPI and update the table, 
                however, it will only update the mockAPI and not the table */}

            <Form id="new-post">
                <FormGroup>
                    <h1 className="text-center">Upcoming Events</h1>
                        <Form.Label  htmlFor="new-name">Name</Form.Label >
                            <Form.Control onChange={(e) => setNewUserName(e.target.value)}></Form.Control>
                        <Form.Label htmlFor="new-event-name">Event Name</Form.Label>
                            <Form.Control onChange={(e) => setNewEventName(e.target.value)}></Form.Control>
                        <Form.Label htmlFor="new-event-date">Event Date</Form.Label>
                            <Form.Control onChange={(e) => setNewEventDate(e.target.value)} type="date"></Form.Control>  
                        <Form.Label htmlFor="new-comment-box">Comment Box</Form.Label>
                            <Form.Control as={'textarea'} onChange={(e) => setNewCommentBox(e.target.value)}></Form.Control>    
                        <Button type="submit" id="addPost" className="btn btn-outline-info" onClick={(e) => postNewPosts(e, posts)}>Add Post</Button>
                </FormGroup>
            </Form>

          

            {/* <Form>
                <FormGroup>
                    <h1 className="text-center">Upcoming Events</h1>
                        <Form.Label  htmlFor="new-name">Name</Form.Label >
                            <Form.Control type="text" className="form-control" id="new-name"></Form.Control>
                        <Form.Label htmlFor="new-event">Event</Form.Label>
                            <Form.Control type="text" className="form-control" id="new-event"></Form.Control>
                        <Form.Label htmlFor="new-event-date">Event Date</Form.Label>
                            <Form.Control type="date" className="form-control" id="new-start-date"></Form.Control>  
                        <Form.Label htmlFor="new-comment">Comment Box</Form.Label>
                            <Form.Control as={'textarea'} id="form-text"></Form.Control>    
                        <div>
                            <Button type="submit" value="Submit" id="addPost" className="btn btn-outline-info">Add Post</Button>
                        </div>
                </FormGroup>
            </Form> */}

            {/* Update Post Form */}

            <h1 className="text-center">Update Upcoming Events</h1>

            {/* Code should update the API and table onClick but it will not update in the 
                API when submitted and I'm having trouble with the table linking*/}

            <Form id="update-post">
                <FormGroup>
                    <Form.Label htmlFor="id">ID</Form.Label >
                        <Form.Control type="text" className="form-control" id="id"></Form.Control>
                     <Form.Label  htmlFor="new-name">Update Name</Form.Label >
                        <Form.Control type="text" className="form-control" id="new-name" onChange={(e) => setUpdatedUserName(e.target.value)}></Form.Control>
                    <Form.Label htmlFor="new-event">Update Event Name</Form.Label>
                        <Form.Control type="text" className="form-control" id="new-event" onChange={(e) => setUpdatedEventName(e.target.value)}></Form.Control>
                    <Form.Label htmlFor="new-event-date">Update Event Date</Form.Label>
                        <Form.Control type="date" className="form-control" id="new-start-date" onChange={(e) => setUpdatedEventDate(e.target.value)}></Form.Control>  
                    <Form.Label htmlFor="new-comment">Update Comment Box</Form.Label>
                        <Form.Control as={'textarea'} id="form-text" onChange={(e) => setUpdatedCommentBox(e.target.value)}></Form.Control>    
                    <Button type="submit" value="Submit" id="addPost" className="btn btn-outline-info" onClick={(e) => updatePost(e,posts)}>Update Post</Button>
                </FormGroup>
            </Form>

            {/* Post Table */}

            <h1>Upcoming Show Information</h1>

            <table id="list" className="table table-light table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>Comment</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" onClick={deletePost}>Delete</Button></td>
                    </tr>
                </tbody>
            </table>

            {/* Getting errors with the React table below which breaks the entire page when trying to connect the api data */}

            {/* <Table id="list" className="table table-light table-striped">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Event Name</Table.HeaderCell>
                        <Table.HeaderCell>Event Date</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {API_URL.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table> */}
        </Container>
    )
}