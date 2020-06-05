import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle(title);
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        style={{
          flex: "10",
          padding: "5px",
          fontSize: "1em",
          height: "50px",
          border: "none",
          outline: "none",
          fontFamily: "'Ubuntu', sans-serif ",
        }}
        type="text"
        name="title"
        placeholder="Add Todo ..."
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{
          flex: "1",
          fontSize: "1em",
          fontFamily: "'Ubuntu', sans-serif ",
        }}
      />
    </form>
  );
};

export default AddTodo;
