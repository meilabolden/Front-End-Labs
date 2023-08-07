import React from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import Buttons from './Buttons.js'

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
						<iframe style="border: 3px solid #f1f1ec;" width="560" height="315" src="https://www.youtube.com/embed/rHvPVLk8RxM" title="YouTube video player" 
							frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
						</iframe>
					</Row>
				</section>

				{/* <!--End Rabbit Hole Journey YouTube Video--> */}

				{/* <!--Start Founders section--> */}

					
						<Row id="container">
							<h2>The Rabbit Hole Founders</h2>
						</Row>
						
						<div class="Founders-div">
							<img src="TRH-images/TRH-Founders.jpg" alt="TRH Founders photo." width="600px"></img>
							<figcaption>From left to right: MayneFrame, Lwkylwky, Mute.</figcaption>
						</div>
				
				{/* <!--Start Founders & Crew List--> */}
						
						<Row className="TRH-Crew-div">
							<h2>The Rabbit Hole Crew</h2>
								<img src="TRH-images/TRH-5yr.jpg" alt="" width="600px"></img>
								<figcaption>Post Rabbit Hole 5 Year Anniversary Show.</figcaption>
									<CardGroup style={{width: '18rem'}} className="crew-list">
										<Card>
											<a target="_blank" href="https://linktr.ee/lwkylky">
												<Card.Img src="TRH-images/LwkyLky3.jpg" height="150px"/>
											</a>
											<h4>Lwkylky</h4>
											<Buttons /> <Br />
										</Card>
										<Card>
											<a target="_blank" href="https://linktr.ee/Mayneframe">
												<Card.Img src="TRH-images/MayneFrame.jpg" height="150px"/>
											</a>
											<h4>MayneFrame</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<a target="_blank" href="https://linktr.ee/mutemind">
												<Card.Img src="TRH-images/Mute2.jpg" height="150px"/>
											</a>
											<h4>Mute.</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<a target="_blank" href="https://linktr.ee/weirddough">
												<Card.Img src="TRH-images/Weirddough.jpg" height="150px"/>
											</a>
											<h4>Weirddough</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Supreme-O2.jpg" height="150px"/>
											<h4>Supreme-O</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/LoDino.jpg" height="150px"/>
											<h4>Lo Dino</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Monro.jpg" height="150px"/>
											<h4>Monro</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Airyee.jpg" height="150px"/>
											<h4>Airyee</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/OneOnTheBeat.jpg" height="150px"/>
											<h4>OneOnTheBeat</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/SoManyFeels.jpg" height="150px"/>
											<h4>SoManyFeels</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Uymitsu.jpg" height="150px"/>
											<h4>Uymitsu</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Butterscotch.jpg" height="150px"/>
											<h4>Butterscotch</h4>
											<Buttons /><Br />
										</Card>
										<Card>
											<Card.Img src="TRH-images/Phillyzane.jpg" height="150px"/>
											<h4>PhillyZane</h4>
											<Buttons /><Br />
										</Card>
									</CardGroup>
						</Row> 
							
				{/* <!--End Founders & Crew List--> */}
							
					
        	</Container>
		
		)
}


