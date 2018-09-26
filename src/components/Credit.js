import React from "react";
import cx from "classnames";

class CreditCardInput extends React.Component {
  constructor() {
    super();
    //initiate state of the test for the first time as an empty string
    this.state = { text: "" };

    //bind the context of the from the react component to the current card input component
    this.handleInput = this.handleInput.bind(this);
  }

  //handle the state changes we are listening to in the credit card form
  handleInput(event) {
    const input = event.target.value;

    // setState cuase render to be re-run
    this.setState({ text: input });
  }

  render() {
    //update what is displayed based on the date
    const classes = cx("input", {
      "input--valid": this.state.text.length === 16,
      "input--invalid": this.state.text.length > 16 || isNaN(this.state.text)
    });

    return (
      <div>
        <h2>Credit card</h2>
        <form>
          <input
            className={classes}
            type="text"
            name="input"
            //listen to the state chnages happening on every input
            onChange={this.handleInput}
            //set the value of the text box as the current state of the text
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

export default CreditCardInput;
