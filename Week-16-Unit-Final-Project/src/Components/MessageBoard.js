import React from "react";
import { useState, useEffect } from 'react';
import { func } from "prop-types";
import { Container, Form, FormGroup, Table, Button } from "react-bootstrap";
import Create from "./CreatePost.js";

export default function Message() {
    
    // Host API
    const API_URL = 'https://649a1bd479fbe9bcf8404a5a.mockapi.io/familyChores';

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

            <Create />

            {/* <Form>
                <FormGroup>
                    <h1 className="text-center">Upcoming Events</h1>
                        <Form.Label  for="new-name">Name</Form.Label >
                            <Form.Control type="text" className="form-control" id="new-name"></Form.Control>
                        <Form.Label for="new-event">Event</Form.Label>
                            <Form.Control type="text" className="form-control" id="new-event"></Form.Control>
                        <Form.Label for="new-event-date">Event Date</Form.Label>
                            <Form.Control type="date" className="form-control" id="new-start-date"></Form.Control>  
                        <Form.Label for="new-comment">Comment Box</Form.Label>
                            <Form.Control as={'textarea'} id="form-text"></Form.Control>    
                        <div>
                            <Button type="submit" value="Submit" id="addPost" class="btn btn-outline-info">Add Post</Button>
                        </div>
                </FormGroup>
            </Form> */}

            {/* Update Post Form */}

            <h1 className="text-center">Update Upcoming Events</h1>

            <Form id="update-post">
                <FormGroup>
                        <Form.Label  htmlFor="new-name">Name</Form.Label >
                            <Form.Control type="text" className="form-control" id="new-name"></Form.Control>
                        <Form.Label htmlFor="new-event">Event</Form.Label>
                            <Form.Control type="text" className="form-control" id="new-event"></Form.Control>
                        <Form.Label htmlFor="new-event-date">Event Date</Form.Label>
                            <Form.Control type="date" className="form-control" id="new-start-date"></Form.Control>  
                        <Form.Label htmlFor="new-comment">Comment Box</Form.Label>
                            <Form.Control as={'textarea'} id="form-text"></Form.Control>    
                        <div>
                            <Button type="submit" value="Submit" id="addPost" className="btn btn-outline-info">Update Post</Button>
                        </div>
                </FormGroup>
            </Form>

            {/* Post Table */}

            <h1>Upcoming Show Information</h1>

            <Table id="list" className="table table-light table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Event</th>
                        <th>Event Date</th>
                        <th>Comment</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </Table>
        </Container>
    )
}