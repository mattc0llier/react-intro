import React from "react";

class Movie extends React.Component {
  constructor() {
    super();

    this.state = { counter: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState(
      {
        counter: this.state.counter + 1
      },
      () =>
        alert(
          `${this.props.movieName} has been clicked ${this.state.counter} times`
        )
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(this.props.movieName);
  }

  render() {
    return (
      <div>
        <h1 className="movie-title">{this.props.movieName}</h1>
        <p className="movie-year">{this.props.year}</p>
        <button onClick={this.handleClick}>Watch</button>
      </div>
    );
  }
}

export default Movie;
