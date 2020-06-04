import React, { Component } from "react";
import uuid from "uuid";
import "./App.css";

import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/Todos/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Going to a meeting",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Picking up some groceries",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Call my boss",
        completed: false,
      },
    ],
  };

  // Toggle complete todo
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (todoId) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== todoId)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };

    if (title === "") {
      alert("title cannot be null");
      this.setState({ todos: [...this.state.todos] });
    } else {
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.toggleComplete}
            delete={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
