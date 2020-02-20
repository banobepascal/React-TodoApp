import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="Add Todo ..." />
      </form>
    );
  }
}

export default AddTodo;
