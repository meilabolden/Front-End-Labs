import React from 'react';
import { Container, FormGroup, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TRHLogo from './TRH-images/TRH Logo.png';

export default function Contact() {
	
    return (
        
        // <!--Start of Contact Form-->
            <Container fluid>
                <Form >
                    {/* <h2 className='title'>Contact Us<img src={TRHLogo} height="30px" /></h2> */}
                    <h2 className='title'>Contact Us</h2>
                        <FormGroup id="form" className="center">
                            <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="text"/>
                            <Form.Label>Artist Name:</Form.Label>
                                <Form.Control type="text"/>
                            <Form.Label>Email Address:</Form.Label>
                                <Form.Control type="text"/>
                            <Form.Label>Sound Cloud:</Form.Label>
                                <Form.Control type="text"/>
                            <Form.Label>Enter general questions below.</Form.Label>
                                <Form.Control as={'textarea'} id="form-text"></Form.Control >
                                
                            <Form.Label>Interested in performing with us?</Form.Label>
                            
                                <Form.Check 
                                    type='switch'
                                    id='custom-switch'
                                    label='Yes'
                                />
                                <Form.Check 
                                    type='switch'
                                    id='custom-switch'
                                    label='No'
                                />
                            
                            {/* Old HTML radio button code */}
                                {/* <Form.Control type="radio" id="yes" name="performing_interest" value="YES"/>
                                <Form.Label htmlFor="yes">YES</Form.Label>
                                <Form.Control type="radio" id="no" name="performing_interest" value="NO"/>
                                <Form.Label htmlFor="no">NO</Form.Label> */}
                                
                            <div>
                                <Button type="submit">Submit</Button>
                            </div>
                        </FormGroup>
                </Form>
            </Container>

        // <!--End of Contact Form-->
    )
}
