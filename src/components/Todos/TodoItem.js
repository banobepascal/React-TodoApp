import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f8f8f8",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />
          {' '}
          {this.props.todo.title}
          <button
            onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: " #ed5565",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
