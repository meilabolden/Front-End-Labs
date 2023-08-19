import React from "react";
import { Container } from "react-bootstrap";

export default class Comment extends React.Component {
    render() {
        return (

            // Placeholder for an upcoming messageboard feature but not working at this time.
            <Container>
                <div>
                    <div className="card-header outline-info text-black">
                        Username and Time
                    </div>
                    <div className="card-body">
                        Comment
                    </div>
                    <div>
                        <LikeButton />
                        <ReplyButton />
                    </div>
                </div>
            </Container>
        )
    }
}