import React from "react";

const defaultMaxRating = 5;

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    #handleClick = (e) => {
        if (e.target) {
            let rating = e.target.dataset.rating;
            if (rating) {
                if (this.props.onRating) {
                    this.props.onRating(rating);
                }
            }
        }
    }

    // getRatingColor(rating) {
    //     switch(rating) {
    //         case 1: 
    //             return '#e00';
    //         case 2: 
    //             return '#f00';
    //         case 3:
    //             return '#FFAS00';
    //         case 4:
    //             return '#cc9900';
    //         case 5:
    //             return '#008000';
    //     }
    //     return '#0a0a0a';
    // }

    render() {
       let rating = this.props.rating || 0;
       let maxRating = this.props.maxRating || defaultMaxRating;

       let items = [];
       for(let i = 1; i <= maxRating; i++) {
        items.push(
            <i className={`bi bi-star${ (rating >= i) ? '-fill' : '' }`}></i>
        );
       }

       return (
        <div onClick={ this.#handleClick }>
            { items }
        </div>
       );
    }   
}