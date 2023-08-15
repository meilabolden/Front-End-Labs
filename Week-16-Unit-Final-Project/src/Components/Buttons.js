import React from 'react';
import Button from 'react-bootstrap/Button';


//Book this Artist Button
function Buttons(color, text) {
    return (
        <>
        {/* Book an Artist button */}
            <Button type='submit' variant='info'>Book Artist</Button>
        </>
    )
}

export default Buttons;