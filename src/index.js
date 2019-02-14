import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { todos, filters } from "./actions";
import TodoApp from "./TodoApp";
import "./styles.css";

const reducers = combineReducers({ todos, filters });
const store = createStore(reducers);
store.subscribe(() =>
  console.log("===> state: " + JSON.stringify(store.getState(), null, 2))
);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
