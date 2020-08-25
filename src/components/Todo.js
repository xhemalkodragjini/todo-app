import React, { useState } from "react";
import "./Todo.css";

export default function Todo(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(props.todo);

  function handleEditable() {
    setIsEditable(true);
  }

  function handleChangeEdit(event) {
    event.stopPropagation();
    setValue(event.target.value);
  }

  function handleCancel() {
    setIsEditable(false);
    setValue(props.todo);
  }

  if (isEditable) {
    return (
      <div className="todo-element row">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={handleChangeEdit}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-info btn-sm"
            onClick={() => props.handleEdit(value, props.todo)}
          >
            Submit Edit
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger btn-sm" onClick={handleCancel}>
            Cancel Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-element row">
      <div className="col-6">
        <h3>{props.todo}</h3>
      </div>
      <div className="col-3">
        <button className="btn btn-info btn-sm" onClick={handleEditable}>
          Edit
        </button>
      </div>
      <div className="col-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.handleDelete(props.todo)}
        >
          Delete
        </button>
      </div>{" "}
    </div>
  );
}
