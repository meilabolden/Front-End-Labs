import React from 'react';
import { Button, Card, CardGroup, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TRHLogo from './TRH-images/TRH Logo.png';
import TRHButtons from './TRH-images/TRH-Buttons.jpg';
import TRHStickers from './TRH-images/TRH-Stickers.jpg';
import TRHHat from './TRH-images/TRH-Hat.jpg';
import TRHLighter from './TRH-images/TRH-Lighter.jpg';
import TRHSFront from './TRH-images/TRH-Shirt-Front.jpg';
import TRHSBack from './TRH-images/TRH-Shirt-back.jpg';
import TRHRSFront from './TRH-images/TRH-Red-Shirt-Front.jpg';
import TRHRSBack from './TRH-images/TRH-Red-Shirt-back.jpg';
import TRHWTFront from './TRH-images/TRH-WhiteT-Front.jpg';
import TRHWTBack from './TRH-images/TRH-WhiteT-back.jpg';
import Carousel from 'react-bootstrap/Carousel';
import CarouselMerch from './Carousel';


export default function Merch() {
	
		return (
		
				<Container fluid>
					{/* Commenting out old header image due to resizing issue */}
					{/* <h1 className='title'>Merch! <img src={TRHLogo} height="30px" /></h1> */}
					<h1 className='title'>Merch! </h1>
					<CarouselMerch />


				<h2 className='title'>Merch Prices</h2>

					<Table responsive className="table">
						<thead>
							<tr>
								<th>Merch</th>
								<th>Item Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Shirts</td>
								<td>$25</td>
							</tr>
							<tr>
								<td>Hats</td>
								<td>$20</td>
							</tr>
							<tr>
								<td>Lighter</td>
								<td>$7</td>
							</tr>
							<tr>
								<td>Buttons</td>
								<td>$5</td>
							</tr>
							<tr>
								<td>Stickers</td>
								<td>$3</td>
							</tr>
						</tbody>
					</Table>
				</Container>
		)
}
