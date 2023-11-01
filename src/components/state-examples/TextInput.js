import React, { useState } from "react";

//A text input that updates the text state variable as the user types, and a submit button that updates the submittedInput state variable when clicked.
function TextInput() {
  const [text, setText] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  const handleChange = (event) => {
    // console.log(event);
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page from reloading
    setSubmittedInput(text); //sets submittedInput to the value of text
    setText(""); //sets text back to empty string
  };

  return (
    <div>
      <input type="text" name="name" value={text} onChange={handleChange} />{" "}
      <button onClick={handleSubmit}>Submit</button>
      <p>You typed: {text}</p>
      <p>You submitted: {submittedInput}</p>
    </div>
  );
}

export default TextInput;
