import React from "react";

export default props => {
  return (
    <div>
      <hr />
      <a
        className={props.filter === "all" ? "active" : null}
        onClick={() => props.setFilter("all")}>
        All
      </a>
      {"  "}
      <a
        className={props.filter === "active" ? "active" : null}
        onClick={() => props.setFilter("active")}>
        Active
      </a>
      {"  "}
      <a
        className={props.filter === "completed" ? "active" : null}
        onClick={() => props.setFilter("completed")}>
        Completed
      </a>
    </div>
  );
};
