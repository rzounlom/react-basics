import React from "react";

//Similar to the functional component example, but using a class component and this.state.
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; //create state variable count and initialize it to 0
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClassCounter;
