import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          placeholder="Add a todo"
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button"> Add todo</button>
      </form>
    </>
  );
};

export default TodoForm;
