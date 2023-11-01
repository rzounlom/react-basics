import React from "react";

//A class component example of the toggle button, managing the isToggled state.
class ClassToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  render() {
    return (
      <button
        onClick={() => this.setState({ isToggled: !this.state.isToggled })}
      >
        {this.state.isToggled ? "ON" : "OFF"}
      </button>
    );
  }
}

export default ClassToggleButton;
