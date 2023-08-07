import React from 'react';
import { Alert, Container, Row } from 'react-bootstrap';
import TRHDTLV from './TRH-images/TRH-DTLV.jpg';

export default function Home() {
	
		return (
			<Container fluid>
				<Container>Home</Container>
				<h3>A Multi-Lateral Sound Experience.</h3>
				<Row className="cover-div">
					<img src={ TRHDTLV } alt="A photo of the TRH DTLV cover image" width="800px" ></img>
				</Row>
			</Container>
		)
}


