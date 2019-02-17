import React from "react";

export default ({ addTodo }) => {
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
        autoComplete="off"
      />
      <button
        onClick={() => {
          if (!input) return;
          addTodo(input);
          input = "";
          document.getElementById("input").value = "";
          document.getElementById("input").focus();
        }}>
        +
      </button>
      <hr />
    </>
  );
};
