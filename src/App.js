import React, { Component } from "react";
import "./App.css";

import Todos from "./components/Todos";

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
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
