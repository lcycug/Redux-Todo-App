import React from "react";

export default props => {
  let input;
  console.log(input);
  return (
    <>
      <input
        id="input"
        type="text"
        onChange={ev => {
          input = ev.target.value;
        }}
      />
      <button
        onClick={() => {
          if (!input) return;
          props.addTodo(input);
          input = "";
          document.getElementById("input").value = "";
          document.getElementById("input").focus();
        }}>
        +
      </button>
    </>
  );
};
