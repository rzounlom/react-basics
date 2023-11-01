import React, { useState } from "react";

/**A simple counter that increments the state variable count each time the button is clicked. */
function FunctionCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default FunctionCounter;
