import React, { useState } from "react";
import uuid from "uuid";
import "./App.css";

import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/Todos/AddTodo";

const App = () => {
  const todoArray = [
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
  ];
  const [todos, setTodos] = useState(todoArray);

  // Toggle complete todo
  const toggleComplete = (id) => {
    setTodos({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const deleteTodo = (todoId) => {
    setTodos({
      todos: [...this.state.todos.filter((todo) => todo.id !== todoId)],
    });
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };

    if (title === "") {
      alert("title cannot be null");
      setTodos(todos);
    } else {
      setTodos( newTodo);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={addTodo} />
        <Todos
          todos={todos}
          markComplete={toggleComplete}
          delete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
