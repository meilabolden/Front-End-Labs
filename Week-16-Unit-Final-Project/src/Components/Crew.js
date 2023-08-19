import React from 'react';
import { Container, Row, Card, CardGroup, Img, Br } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Buttons from './Buttons.js';
import TRHFounders from './TRH-images/TRH-Founders.jpg';
import Lwkylky from './TRH-images/LwkyLky3.jpg';
import MayneFrame from './TRH-images/MayneFrame.jpg';
import Mute from './TRH-images/Mute2.jpg';
import Weirddough from './TRH-images/Weirddough.jpg';
import SupremeO from './TRH-images/Supreme-O2.jpg';
import Lo from './TRH-images/LoDino.jpg';
import Monro from './TRH-images/Monro.jpg';
import Airyee from './TRH-images/Airyee.jpg';
import OneOnTheBeat from './TRH-images/OneOnTheBeat.jpg';
import SoManyFeels from './TRH-images/SoManyFeels.jpg';
import Uymitsu from './TRH-images/Uymitsu.jpg';
import Butterscotch from './TRH-images/Butterscotch.jpg';
import PhillyZane from './TRH-images/Phillyzane.jpg';




export default function Crew() {
	
    return (
        
        <Container>
            <h2>TRH Crew</h2>
                <Row id="container">
					<h2>The Rabbit Hole Founders</h2>
				</Row>
						
						<div className="Founders-div">
							<img src={TRHFounders} alt="TRH Founders photo." ></img>
						</div>

                        <figcaption>From left to right: MayneFrame, Lwkylwky, Mute.</figcaption>
				
				{/* <!--Start Founders & Crew cards List--> */}
						
						<Container className="TRH-Crew-div">
							
										<Card style={{ width: '18rem' }} >
											<a target="_blank" href="https://linktr.ee/lwkylky">
												<Card.Img variant='top' src={Lwkylky} />
											</a>
											<h4>Lwkylky</h4>
											<Buttons /> 
										</Card>
										<Card style={{width: '18rem'}} >
											<a target="_blank" href="https://linktr.ee/Mayneframe">
												<Card.Img variant='top' src={MayneFrame} />
											</a>
											<h4>MayneFrame</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<a target="_blank" href="https://linktr.ee/mutemind">
												<Card.Img variant='top' src={Mute}/>
											</a>
											<h4>Mute.</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<a target="_blank" href="https://linktr.ee/weirddough">
												<Card.Img variant='top' src={Weirddough} />
											</a>
											<h4>Weirddough</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={SupremeO} />
											<h4>Supreme-O</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={Lo} />
											<h4>Lo Dino</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={Monro} />
											<h4>Monro</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={Airyee} />
											<h4>Airyee</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={OneOnTheBeat} />
											<h4>OneOnTheBeat</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={SoManyFeels} />
											<h4>SoManyFeels</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={Uymitsu} />
											<h4>Uymitsu</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={Butterscotch} />
											<h4>Butterscotch</h4>
											<Buttons />
										</Card>
										<Card style={{width: '18rem'}} >
											<Card.Img variant='top' src={PhillyZane} />
											<h4>PhillyZane</h4>
											<Buttons />
										</Card>
						</Container> 
							
				{/* <!--End Founders & Crew List--> */}
							
					
        	</Container>
        
    )
}
