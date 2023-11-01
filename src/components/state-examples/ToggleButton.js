import React, { useState } from "react";

//A button that toggles between "ON" and "OFF" states, updating the isToggled state variable.
function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button onClick={() => setIsToggled(!isToggled)}>
      {isToggled ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;
