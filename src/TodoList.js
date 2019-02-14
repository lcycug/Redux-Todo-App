import React from "react";

export default ({ filter, todos, switchState }) => {
  let filteredTodos;
  switch (filter) {
    case "active":
      filteredTodos = todos.filter(todo => todo.completed === false);
      break;
    case "completed":
      filteredTodos = todos.filter(todo => todo.completed === true);
      break;
    default:
      filteredTodos = todos;
  }

  return filteredTodos.map(todo => (
    <div
      className="line"
      key={todo.id}
      onClick={() => switchState(todo.id)}
      style={todo.completed ? { textDecoration: "line-through" } : null}>
      {todo.text}
    </div>
  ));
};
