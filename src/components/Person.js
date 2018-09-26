import React from "react";

class Person extends React.Component {
  constructor() {
    super();

    this.state = { name: "" };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    event.preventDefault();

    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <form>
          <input type="text" name="input" onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default Person;
