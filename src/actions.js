import uuid from "uuid";

export const todos = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: uuid.v4(),
          text: action.text,
          completed: false
        }
      ];
    case "switch":
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

export const filters = (state = "all", action) => {
  switch (action.filter) {
    case "all":
      return "all";
    case "active":
      return "active";
    case "completed":
      return "completed";
    default:
      return state;
  }
};
