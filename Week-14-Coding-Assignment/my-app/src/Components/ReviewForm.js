import React, {Component} from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default class ReviewForm extends Component {
    render() {
        return (
            <>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Add a Review</Form.Label><br></br>
                        <Form.Control as="textarea" placeholder="Let your voice be heard!"></Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="success" type="submit" value="submit">Submit</Button>
            </Container>
            </>
        )
    }   
}