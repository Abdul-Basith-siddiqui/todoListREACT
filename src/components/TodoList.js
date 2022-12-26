import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // adding the items to todos array
  const addTodo = (todo) => {
    if (todo.text === "") return;
    setTodos((prevVal) => {
      return [todo, ...prevVal];
    });
  };

  //updating the text of the item to new text
  const updateTodo = (todoId, newValue) => {
    if (newValue.text === "") return;

    setTodos((prevVal) => {
      return prevVal.map((item) => {
        return item.id === todoId ? newValue : item;
      });
    });
  };

  //deleting the todo item form the array
  function removeTodo(id) {
    setTodos((prevVal) => {
      return prevVal.filter((todo, index) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <div className="todo-app">
      <h1> Whats the Plan for Today</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoList;

/*
The reason why console.log(...todos) not printing the latest added element is because setTodos is setting the value to todos. React doesn't immediately do that and it also takes a callback. So, javascript generally doesn't wait the setTodos to finish its work and console the items it have on todos. React plans out the re-rendering of the component when the state is updated. It doesn't do that immediately.

*/

//deleting the todo item form the array
// const removeTodo = (id) => {
//   const removeArr = todos.filter((todo) => todo.id !== id);

//   setTodos(removeArr);
// };
