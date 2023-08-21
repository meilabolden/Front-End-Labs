import React, { useState } from "react";
import {Button, FormGroup, Form} from 'semantic-ui-react';
import { createRef, Component, Console } from 'react';
import { findDOMNode } from 'react-dom';

export default function Create() {

    {/* Not using Create component due to error that I can't figure out */}
    const [name, setName] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [commentBox, setCommentBox] = useState('');

    <input placeholder="name" onChange={(e) => setName(e.target.value)}/>;
    <input placeholder="eventName" onChange={(e) => setEventName(e.target.value)} />;
    <input placeholder="eventDate" onChange={(e) => setEventDate(e.target.value)} />;
    <input placeholder="commentBox" onChange={(e) => setCommentBox(e.target.value)} />

    const postData = () => {
        console.log(name);
        conosle.log(eventName);
        console.log(eventDate);
        console.log(commentBox);
    }

    return (
        <div>
            {/* Add Post Form */}
            <Form id="post-form">
                <Form.Field>
                    <label htmlFor="new-name">Name</label>
                    <input type="text" className="form-control" id="new-name" />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="new-event-name">Event Name</label>
                    <input type="text" className="form-control" id="new-event" />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="new-event-date">Event Date</label>
                    <input type="date" className="form-control" id="new-start-date"/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="new-comment">Comment Box</label>
                    <input as={'textarea'} id="form-text"/>
                </Form.Field>
                <Button onClick={postData} type="submit" value="submit" id="addPost" >Add Post</Button>
            </Form>
        </div>
    )
}


// const Post = () => (
//     // Add Post Form
//     <Form id="post-form">
//         <Form.Field>
//             <label htmlFor="new-name">Name</label>
//             <input type="text" className="form-control" id="new-name" />
//         </Form.Field>
//         <Form.Field>
//             <label htmlFor="new-event">Event</label>
//             <input type="text" className="form-control" id="new-event" />
//         </Form.Field>
//         <Form.Field>
//             <label htmlFor="new-event-date">Event Date</label>
//             <input type="date" className="form-control" id="new-start-date"/>
//         </Form.Field>
//         <Form.Field>
//             <label htmlFor="new-comment">Comment Box</label>
//             <input as={'textarea'} id="form-text"/>
//         </Form.Field>
//         <Button type="submit" value="submit" id="addPost" className="btn btn-outline-info">Add Post</Button>
//     </Form>
// )

// export default Post;