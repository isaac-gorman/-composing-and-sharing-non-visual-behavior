import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("Hooks are dOp3!");
  const [inputText, setInputText] = useState("");

  const handleChanges = (e) => {
    setInputText(e.target.value);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    console.log("I am the value of inputText ", inputText);
    setTitle(inputText);
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={changeTitle}>
        <div>
          <label htmlFor="input">Change Title</label>
          <br />
          <input
            className="Input-text"
            id="input"
            name="inputText"
            value={inputText}
            placeholder="Create new title"
            type="text"
            onChange={handleChanges}
          />
        </div>
        <button>ChangeTitle</button>
      </form>
    </div>
  );
};

export default DynamicTitle;

// Q: Where are the examples of Stateful logic?
// - handleChanges function is enabeling the user to alter the state of the inputText
// - changeTitle function is enabeling the user to change the state of the title, by passing it the value of inputText after the user has entered in new value, and clicks submit.

// Q: What didn't I consider stateful logic, that actually stateful logic (what did I learn?)?
// - The states are actually stateful logic themselves. So I could have counted
// - - title
// - - inputText
// - But in theory it's almost limitless as to what can be considred stateful logic in a React component.
