import React from "react";
import Movie from "./Movie.js";
import Person from "./Person.js";
import CreditCardInput from "./Credit.js";
import ImageSearch from "./ImageSearch.js";

const moviesArr = [
  {
    id: "jaws",
    movieName: "Jaws",
    year: 1993
  },
  {
    id: "breakfast",
    movieName: "Breakfast club",
    year: 1957
  },
  {
    id: "Once",
    movieName: "Once upon a time in America",
    year: 1963
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main-heading">Hello, world!</h1>
        <p>Welcome to our first React component</p>
        {moviesArr.map(movie => (
          <Movie movieName={movie.movieName} key={movie.id} year={movie.year} />
        ))}
        <Person />
        <CreditCardInput />
        <br />
        <br />
        <br />
        <h1>Unsplash image search</h1>
        <ImageSearch />
      </div>
    );
  }
}

export default App;
