import React from "react";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

// AddTodo
const mapDispatchToAddProps = (dispatch, ownProps) => ({
  addTodo: input => dispatch({ type: "add", text: input })
});

const AddTodoContainer = connect(
  null,
  mapDispatchToAddProps
)(AddTodo);

// Todo List
const mapStateToListProps = state => ({
  todos: state.todos
});

const TodoListContainer = connect(
  mapStateToListProps,
  null
)(TodoList);

// Filter buttons
const mapStateToFilterProps = state => ({
  filter: state.filters
});

const mapDispatchToFilterProps = dispatch => ({
  setFilter: filter => dispatch({ type: "filter", filter: filter })
});
const FilterContainer = connect(
  mapStateToFilterProps,
  mapDispatchToFilterProps
)(Filter);

export default () => {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <FilterContainer />
    </div>
  );
};
