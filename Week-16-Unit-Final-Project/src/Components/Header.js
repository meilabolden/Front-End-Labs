import React from "react";
import { Container } from "react-bootstrap";
import TRHLogo from './TRH-images/TRH Logo.png';

export default function Header() {
    return (
        <Container >
            <marquee><img src={TRHLogo} height="30px" /> </marquee>

            <div>
                <h1 className='site-title'>The Rabbit Hole LV</h1>
            </div>
        </Container>
    )
}