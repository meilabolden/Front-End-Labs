import React from 'react';
import { Container } from 'react-bootstrap';

export default function Crew() {
	
    return (
        
        <Container>
            <h2>TRH Crew</h2>
                <Row id="container">
					<h2>The Rabbit Hole Founders</h2>
				</Row>
						
						<div class="Founders-div">
							<img src="TRH-images/TRH-Founders.jpg" alt="TRH Founders photo." width="600px"></img>
							<figcaption>From left to right: MayneFrame, Lwkylwky, Mute.</figcaption>
						</div>
				
				{/* <!--Start Founders & Crew List--> */}
						
						<Row className="TRH-Crew-div">
							
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
