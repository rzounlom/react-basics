import React, { Component } from "react";

/** In this example: 
 * The componentDidMount method is used to start the timer when the component mounts.
The componentDidUpdate method is used to update the document title every time the component updates and to start or stop the timer when isTimerRunning state changes.
The componentWillUnmount method is used to clear the timer before the component unmounts, ensuring no memory leaks.
The startTimer, clearTimer, and toggleTimer methods are class methods used to handle the timer and update the state.
The render method returns the JSX to be rendered, including a button to toggle the timer on and off.

*/
class ExampleComponent extends Component {
  // Initializing state
  state = {
    count: 0,
    isTimerRunning: true,
  };

  // componentDidMount: Runs after the component mounts (similar to useEffect with empty dependency array)
  componentDidMount() {
    this.startTimer();
    console.log("Timer started");
  }

  // componentDidUpdate: Runs after updates (similar to useEffect without dependency array)
  componentDidUpdate(prevProps, prevState) {
    // Updating document title on every render
    document.title = `Count is ${this.state.count}`;
    console.log("Document title updated");

    // Starting or stopping the timer when isTimerRunning changes
    if (prevState.isTimerRunning !== this.state.isTimerRunning) {
      if (this.state.isTimerRunning) {
        this.startTimer();
        console.log("Timer started");
      } else {
        this.clearTimer();
        console.log("Timer cleared");
      }
    }
  }

  // componentWillUnmount: Runs before the component unmounts (similar to useEffect cleanup function)
  componentWillUnmount() {
    this.clearTimer();
    console.log("Timer cleared");
  }

  // Function to start the timer
  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  };

  // Function to clear the timer
  clearTimer = () => {
    clearInterval(this.timer);
  };

  // Function to toggle the timer on and off
  toggleTimer = () => {
    this.setState((prevState) => ({
      isTimerRunning: !prevState.isTimerRunning,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.toggleTimer}>
          {this.state.isTimerRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    );
  }
}

export default ExampleComponent;
