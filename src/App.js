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

  markComplete = (id) => {
    //  const todos = [...this.state.todos];
     console.log(id);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
