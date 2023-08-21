import React, {useState} from "react";
import { FaStar } from 'react-icons/fa'

const defaultMaxRating = 5;

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


        return (
            <div>
                {[ ...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                onClick={() => (setRating(ratingValue))}
                            />
                            <FaStar key={star}
                                className="star" 
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                                size={30}
                                onMouseEnter={() => (setHover(ratingValue))}
                                onMouseLeave={() => (setHover(null))}
                            />
                        </label>
                    )
                })}
            </div>
            )
}

export default StarRating;

// export default class Stars extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     #handleClick = (e) => {
//         if (e.target) {
//             let rating = e.target.dataset.rating;
//             if (rating) {
//                 if (this.props.onRating) {
//                     this.props.onRating(rating);
//                 }
//             }
//         }
//     }

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

    // render() {
    //    let rating = this.props.rating || 0;
    //    let maxRating = this.props.maxRating || defaultMaxRating;

    //    let items = [];
    //    for(let i = 1; i <= maxRating; i++) {
    //     items.push(
    //         <i className={`bi bi-star${ (rating >= i) ? '-fill' : '' }`}></i>
    //     );
    //    }

    //    return (
    //     <div onClick={ this.#handleClick }>
    //         { items }
    //     </div>
    //    );
    // }   
// }