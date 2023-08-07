import React from 'react';
import { Container, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Contact() {
	
    return (
        
        // <!--Start of Contact Form-->
            <Form>
                <h2>Contact Us</h2>
                    <FormGroup id="form" class="center">
                        <Form.Label>Full Name:</Form.Label><Br />
                            <Form.Control type="text"/><Br />
                        <Form.Label>Artist Name:</Form.Label><Br />
                            <Form.Control type="text"/><Br />
                        <Form.Label>Email Address:</Form.Label><Br />
                            <Form.Control type="text"/><Br />
                        <Form.Label>Sound Cloud:</Form.Label><Br />
                            <Form.Control type="text"/><Br />
                        <Form.Label>Enter general questions below.</Form.Label><Br />
                            <textarea id="form-text"></textarea>
                            <Br />
                        <Form.Label>Interested in performing with us?</Form.Label>
                        <Br />
                            <Form.Control type="radio" id="yes" name="performing_interest" value="YES"/>
                            <Form.Label for="yes">YES</Form.Label>
                            <Form.Control type="radio" id="no" name="performing_interest" value="NO"/>
                            <Form.Label for="no">NO</Form.Label>
                            <Br />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </FormGroup>
            </Form>

        // <!--End of Contact Form-->
    )
}
