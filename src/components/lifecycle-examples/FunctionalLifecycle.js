import React, { useEffect, useState } from "react";

/**In this example:

We have two pieces of state: count and isTimerRunning.
The first useEffect hook updates the document title every time the component renders, demonstrating a side effect that runs on every render.
The second useEffect hook sets up a timer that increments the count state every second when isTimerRunning is true. It also demonstrates the cleanup function, which clears the timer. This effect only runs when the component mounts and whenever isTimerRunning changes, as indicated by the dependency array [isTimerRunning].
There is a button to start and stop the timer, demonstrating the interaction with the useEffect cleanup function. */

function FunctionalLifecycle() {
  // State to store the count value
  const [count, setCount] = useState(0);

  // State to store the status of a timer
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // useEffect for side effect: Document title update (runs on every render)
  useEffect(() => {
    document.title = `Count is ${count}`;
    console.log("Document title updated");
  });

  // useEffect for side effect: Timer (runs once on mount and when isTimerRunning changes)
  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      console.log("Timer started");
    }
    // Cleanup function to clear the timer (runs on unmount or when isTimerRunning changes)
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, [isTimerRunning]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
        {isTimerRunning ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default FunctionalLifecycle;
