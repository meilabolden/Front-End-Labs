import React from 'react';
import AWalkToRemember from './MediaImages/AWalkToRemember.jpg';
import Encanto from './MediaImages/Encanto.jpg';
import Shazam2 from './MediaImages/Shazam2.jpg';
import Stars from './Stars';

const MovieInfo = [
    {
        id: 1,
        title: 'A Walk to Remember',
        image: <img src={ AWalkToRemember }/>,
        synopsis: 'Two North Carolina teens, Landon Carter and Jamie Sullivan, are thrown together after Landon gets into trouble and is sentenced to perform community service.',
        rating: 5,
        stars: <Stars />,
        reviews: []
    },
    {
        id: 2,
        title: 'Encanto',
        image: <img src={ Encanto }/>,
        synopsis: 'A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.',
        rating: 5,
        stars: <Stars />,
        reviews: []
    },
    {
        id: 3,
        title: 'Shazam 2',
        image: <img src={ Shazam2 }/>,
        synopsis: 'The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.',
        rating: 5,
        stars: <Stars />,
        reviews: []
    }
]


export default MovieInfo