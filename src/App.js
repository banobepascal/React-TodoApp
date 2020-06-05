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
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };

    if (title === "") {
      alert("title cannot be null");
    } else {
      setTodos([...todos, newTodo]);
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
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
