import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Add To Do"
          value={props.todo}
          onChange={props.handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={props.handleSubmit}
        className={
          !props.todo
            ? "btn btn-primary ml-2 mb-2 disabled"
            : "btn btn-primary ml-2 mb-2"
        }
      >
        Add
      </button>
    </form>
  );
}
export default SearchBar;
