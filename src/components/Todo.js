import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    console.log(value);
    // value is coming from the TodoForm component, handleSubmit function is called when the user submits the form. The handleSubmit function calls the onSubmit prop (submitUpdate function) with the new value of the todo. This updates the todo in the todos array in the TodoList component and sets the edit state to null, causing the Todo component to re-render and display the list of todos instead of the TodoForm.
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm addTodo={submitUpdate} />; //when user submit the only the submitUpdate is called whcih updates the value of that todo and set the value to edit.id to "null"  which indicates that the user is no longer editing a todo. This causes the Todo component to re-render and display the list of todos instead of the TodoForm.
  }

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todo-row ">
            <div key={todo.id}>{todo.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

/*
You are correct. In the Todo component, the submitUpdate function is passed as the onSubmit prop to the TodoForm component. However, the submitUpdate function is not defined in the TodoForm component.

The submitUpdate function is defined in the Todo component and is passed as a prop to the TodoForm component. It is called when the user submits the form in the TodoForm component. The submitUpdate function updates the todo in the todos array in the TodoList component and sets the edit state to null, causing the Todo component to re-render and display the list of todos instead of the TodoForm.

Here is the updated code for the Todo and TodoForm components with the correct prop names:
*/
