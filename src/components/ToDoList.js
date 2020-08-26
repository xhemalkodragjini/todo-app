import React from "react";
import "./ToDoList.css";
import Todo from "./Todo";

function ToDoList(props) {
  return (
    <div className="todo-container">
      {props.todos.map((todo) => (
        <Todo
          key={todo}
          todo={todo}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}

export default ToDoList;
