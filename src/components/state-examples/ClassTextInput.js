import React from "react";

class ClassTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", submittedInput: "" };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevents page from reloading
    this.setState({ submittedInput: this.state.text }); //sets submittedInput to the value of text
    this.setState({ text: "" }); //sets text back to empty string
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <p>You typed: {this.state.text}</p>
        <p>You submitted: {this.state.submittedInput}</p>
      </div>
    );
  }
}

export default ClassTextInput;
