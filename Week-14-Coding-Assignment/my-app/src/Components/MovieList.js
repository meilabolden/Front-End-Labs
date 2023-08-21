import React from "react";
import Movie from './Movie';
import MovieInfo from './MovieInfo';
import AWalkToRemember from './MediaImages/AWalkToRemember.jpg';
import Encanto from './MediaImages/Encanto.jpg';
import Shazam2 from './MediaImages/Shazam2.jpg';

const MovieList = () => {
    return (
        <div className="movieList">
            {MovieInfo.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;