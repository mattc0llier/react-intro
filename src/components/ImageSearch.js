import React from "react";
import cx from "classnames";

class ImageSearch extends React.Component {
  constructor() {
    super();

    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // searchUnsplash(event) {
  //
  //
  //       this.setState({
  //         input: body.results[0].urls.regular
  //       });
  //       console.log(this.state.input);
  //     });
  // }

  handleChange(event) {
    let searchInput = event.target.value;
    this.setState({
      input: searchInput
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${
        this.state.input
      }&client_id=8c68a31beb02d4db00929a5bc5fa68d0c3ec7fadfceb2866db41ab2e53c6145a`
    )
      .then(function(response) {
        return response.json();
      })
      .then(body => {
        // console.log(body);

        const resultsArray = body.results.map(item => {
          return item.urls.regular;
        });
        this.setState({
          urls: resultsArray
        });
        // console.log(resultsArray);
      });

    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className=""
            type="text"
            name="input"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ImageSearch;
