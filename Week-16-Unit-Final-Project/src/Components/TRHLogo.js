import React from "react";
import { Figure } from "react-bootstrap/Figure";
import TRHLogo from './TRH-images/TRH Logo.png';
import { Image } from "react-bootstrap/FigureImage";

function Logo() {
    return (
        <Figure>
            <Figure.Image 
            width={'30px'}
            height={'30px'}
            alt="logo"
            src={TRHLogo}
            />
        </Figure>
    )
}

export default Logo;