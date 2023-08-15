import React from "react";
import { Container } from "react-bootstrap";

export default class Comment extends React.Component {
    render() {
        return (
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