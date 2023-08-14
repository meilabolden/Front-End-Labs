import React from 'react';
import { Alert, Container, Row } from 'react-bootstrap';
import TRHDTLV from './TRH-images/TRH-DTLV.jpg';
import TRHLogo from './TRH-images/TRH Logo.png';

export default function Home() {
	
		return (
			<Container fluid>
				{/* Commenting out old header image due to resizing issue */}
				{/* <h1  className='title'>Home<img src={TRHLogo} height="30px" /></h1> */}
				<h1  className='title'>Home</h1>
				<h3 className='sub-title'>A Multi-Lateral Sound Experience.</h3>
				<Row className="cover-div">
					<img src={ TRHDTLV } alt="A photo of the TRH DTLV cover image" width="800px" ></img>
				</Row>
			</Container>
		)
}


