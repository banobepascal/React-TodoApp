import React, { Component } from "react";
import "./App.css";

import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Going to a meeting",
        completed: false
      },
      {
        id: 2,
        title: "Picking up some groceries",
        completed: true
      },
      {
        id: 3,
        title: "Call my boss",
        completed: false
      }
    ]
  };

  // Toggle complete todo
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = todoId => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== todoId)]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.toggleComplete}
          delete={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
