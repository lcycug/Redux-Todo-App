import React from "react";

export default props => {
  return props.todos.map(todo => <div key={todo.id}>{todo.text}</div>);
};
