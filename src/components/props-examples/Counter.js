import React from "react"; //we could also destructure this: import React, { Component } from "react";

//*In this example, the Count class component receives a count prop and renders it. The App component renders Counter and sets the count prop.
class Counter extends React.Component {
  render() {
    return <h1>Count Value: {this.props.count}</h1>;
  }
}

export default Counter;
