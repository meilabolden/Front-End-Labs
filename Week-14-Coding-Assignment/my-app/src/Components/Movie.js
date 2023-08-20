import React from "react";
import Stars from "./Stars.js";
import ReviewList from "./ReviewList.js";
import ReviewForm from "./ReviewForm.js";
import AWalkToRemember from './MediaImages/AWalkToRemember.jpg';
import Encanto from './MediaImages/Encanto.jpg';
import { Container } from "react-bootstrap";

const Movie = ({ movie }) => {
    const {title, image, synopsis, rating } = movie;

    return (
        <Container>
            <div className="movie">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{synopsis}</p>
            <Stars rating={rating} />
            <ReviewList reviews={movie.reviews} />
            <ReviewForm movieId={movie.id} />
            </div>
        </Container>
    );
};

export default Movie;