import React, { useState } from "react";
import {Button, FormGroup, Form} from 'semantic-ui-react';


export default function Create() {
    const [name, setName] = useState('');
    const [event, setEvent] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [commentBox, setCommentBox] = useState('');

    <input placeholder="name" onChange={(e) => setName(e.target.value)}/>;
    <input placeholder="event" onChange={(e) => setEvent(e.target.value)} />;
    <input placeholder="eventDate" onChange={(e) => setEventDate(e.target.value)} />;
    <input placeholder="commentBox" onChange={(e) => setCommentBox(e.target.value)} />

    const postData = () => {
        console.log(name);
        conosle.log(event);
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
                    <label htmlFor="new-event">Event</label>
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