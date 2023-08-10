import React from 'react';
import { Button, Card, CardGroup, Container, Row } from 'react-bootstrap';
import Buttons from './Buttons.js'
import Crew from './Crew.js';


export default function About() {
	
		return (
		
			<Container fluid>
				{/* <!--Page Title--> */}

				<h2>About Us</h2>
				<p>
					Beneath the Las Vegas Strip lies a network of beat makers and music appreciators. 
					Co-Founded in 2015 by LowkeyLukey, MayneFrame, and Mute, The Rabbit Hole is a collective of local producers 
					and sound connoisseurs that strive to change the fate of our desert's musical journey.
				</p>

				{/* <!--Start Rabbit Hole Journey YouTube Video--> */}

				<section>
					<Row class="border">
						<FrameBorder style="border: 3px solid #f1f1ec;" width="560" height="315" src="https://www.youtube.com/embed/rHvPVLk8RxM" title="YouTube video player" 
							frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
						</FrameBorder>
					</Row>
				</section>

				{/* <!--End Rabbit Hole Journey YouTube Video--> */}

				{/* <!--Start Founders section--> */}

				<h2>The Rabbit Hole Crew</h2>
					<img src="TRH-images/TRH-5yr.jpg" alt="" width="600px"></img>
					<figcaption>Post Rabbit Hole 5 Year Anniversary Show.</figcaption>

				<Crew />
					
			</Container>
		
		)
}


