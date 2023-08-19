import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fiveyear from './TRH-images/TRH-5yr.jpg';
import { Container, Img } from 'react-bootstrap';
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


export default function CarouselMerch() {
	
    return (
        // Displays all Merch images in a carousel
        <Container fluid>
            <Carousel fade interval={2000} className='carousel-inner'>
                <Carousel.Item>
                    <img src={TRHButtons} alt="TRH Buttons image" text='TRH Buttons'/>
                    <Carousel.Caption>
                        <h4>TRH Buttons</h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHStickers} alt="TRH Stickers image" text='TRH Stickers'/>
                    <Carousel.Caption>
                        <h4>TRH Stickers </h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHHat} alt="TRH Hat image" text='TRH Hat'/>
                    <Carousel.Caption>
                        <h4>TRH Trucker Hat </h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHLighter} alt="TRH Lighter image" text='TRH Lighter'/>
                    <Carousel.Caption>
                        <h4>TRH Lighter </h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHSFront} alt="TRH 8 year Anniversary shirt front" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Special Edition 8yr </h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHSBack} alt="TRH 8 year Anniversary shirt back" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Special Edition 8yr </h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHRSFront} alt="TRH 8 year Anniversary shirt red font front" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Special Edition 8yr </h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHRSBack} alt="TRH 8 year Anniversary shirt red font back" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Special Edition 8yr </h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHWTFront} alt="TRH limited edition white shirt front" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Limited Edition</h4> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TRHWTBack} alt="TRH limited edition white shirt back" text='TRH Shirt'/>
                    <Carousel.Caption>
                        <h4>Limited Edition</h4> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        
    )
}
