import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{
            flex: "10",
            padding: "5px",
            fontSize: "1em",
            height: "50px",
            border: "none",
            outline: "none",
            fontFamily: "'Ubuntu', sans-serif "
          }}
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{
            flex: "1",
            fontSize: "1em",
            fontFamily: "'Ubuntu', sans-serif "
          }}
        />
      </form>
    );
  }
}

export default AddTodo;
