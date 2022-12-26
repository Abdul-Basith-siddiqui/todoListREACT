import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // if (!todo.text || /^\s*$/.test(todo.text)) return;
    // we can also write the above line like this

    if (todo.text === "") return;

    // const newTodos = [todo, ...todos];
    // setTodos(newTodos);

    setTodos((prevVal) => {
      return [todo, ...prevVal];
    });

    // console.log(...todos);
    // console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (newValue.text === "") return;

    setTodos((prevVal) => {
      return prevVal.map((item) => {
        return item.id === todoId ? newValue : item;
      });
    });
  };

  //delete todo
  // function removeTodo(id) {
  //   // console.log(id);
  //   setTodos((prevVal) => {
  //     return prevVal.filter((todo, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1> Whats the Plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        completeTodo={completeTodo}
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;

/*
The reason why console.log(...todos) not printing the latest added element is because setTodos is setting the value to todos. React doesn't immediately do that and it also takes a callback. So, javascript generally doesn't wait the setTodos to finish its work and console the items it have on todos. React plans out the re-rendering of the component when the state is updated. It doesn't do that immediately.

*/
