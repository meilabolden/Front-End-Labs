import React from 'react';
import { Button, Card, CardGroup, Container, Row, Image } from 'react-bootstrap';
import Buttons from './Buttons.js'
import Crew from './Crew.js';
import TRHLogo from './TRH-images/TRH Logo.png';
import TRH5yr from './TRH-images/TRH-5yr.jpg';
import Video from './Video.js';
import Gif from './TRH-images/TRH Logo.gif';



export default function About() {
	
		return (
		
			<Container fluid>
				{/* <!--Page Title--> */}

				<h2 className='title'>About Us</h2>
				<p>
					Beneath the Las Vegas Strip lies a network of beat makers and music appreciators. 
					Co-Founded in 2015 by LowkeyLukey, MayneFrame, and Mute, The Rabbit Hole is a collective of local producers 
					and sound connoisseurs that strive to change the fate of our desert's musical journey.
				</p>

				{/* <!--Start Rabbit Hole Journey YouTube Video--> */}

				<section>
					<Row className="border">
						<Video embedId="rHvPVLk8RxM" />
					</Row>
				</section>

				{/* <!--End Rabbit Hole Journey YouTube Video--> */}

				{/* <!--Start Founders section--> */}

				<h2>The Rabbit Hole Crew</h2>

				<div className='crew-img'>
						<img src={TRH5yr} alt="" width="600px"></img>
				</div>

				<figcaption>Post Rabbit Hole 5 Year Anniversary Show.</figcaption>

				<Crew />
					
			</Container>
		
		)
}


