import React from "react";
import Movie from './Movie';
import MovieInfo from './MovieInfo';

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