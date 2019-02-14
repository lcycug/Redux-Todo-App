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
