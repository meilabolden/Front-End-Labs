// Coding Steps:
//
// Using what you’ve learned this week, create a page of an application that enables users 
//  to vote and leave reviews on movies.
// You should include at least the following components: 
// MovieList: a container for all the Movie components and their data.
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something 
//  (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
//  When submitted, the review should be added to the movie. All this data can be stored in an array, 
//  no networking or database needed for this assignment.

// ******************************************************************//

import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Movie from './Components/Movie';
import Stars from './Components/Stars';
import StarRating from './Components/Stars';
import Review from './Components/Review';



// function App() {
//   const rating = 1;

//   return (
//     <section className='container'>
//       <div className='app'>
        
//         <MovieList />
//       </div>
//     </section>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  // #handleRatingChange = (e) => {
  //   console.log(`Rating changed ...${ e }`)
  // }

  render () {

    // const rating = this.state.rating;

    return (
      <section>
        <div className="App">
          <h1>Review a Movie</h1>
            <MovieList />
        </div>
      </section>
    );
  };
};

// export default App;
