import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const getStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc solid",
    textDecoration: props.todo.completed ? "line-through" : "none"
  };

  return (
    <div style={getStyle}>
      <p>
        <input type="checkbox" onChange={() => props.markComplete(props.id)} />
        {props.todo.title}
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
